# Kissaan Sampatti - AWS Deployment Guide

## Project Overview
- **Project:** Kissaan Sampatti Website
- **Framework:** Next.js 16 (Static Export)
- **Output:** Static HTML/CSS/JS files
- **Repository:** https://github.com/manikaran301/kissaansampatti_website

---

## Prerequisites

| Requirement | Version |
|-------------|---------|
| Node.js | 18.x or 20.x (build only) |
| Nginx | Latest |
| Ubuntu | 20.04 / 22.04 LTS |

---

## Step 1: Build Static Files (Local/CI)

```bash
# Clone repository
git clone https://github.com/manikaran301/kissaansampatti_website.git
cd kissaansampatti_website

# Install dependencies
npm install

# Build static files
npm run build
```

**Output:** `out/` folder containing all static files.

---

## Step 2: AWS EC2 Setup

### 2.1 Launch EC2 Instance
- **AMI:** Ubuntu 22.04 LTS
- **Instance Type:** t2.micro (free tier) or t2.small
- **Storage:** 8 GB minimum

### 2.2 Security Group Rules

| Type | Port | Source | Description |
|------|------|--------|-------------|
| SSH | 22 | Your IP | SSH access |
| HTTP | 80 | 0.0.0.0/0 | Web traffic |
| HTTPS | 443 | 0.0.0.0/0 | SSL traffic |

---

## Step 3: Server Configuration

### 3.1 SSH into EC2
```bash
ssh -i your-key.pem ubuntu@<EC2-PUBLIC-IP>
```

### 3.2 Update System
```bash
sudo apt update && sudo apt upgrade -y
```

### 3.3 Install Nginx
```bash
sudo apt install nginx -y
sudo systemctl enable nginx
sudo systemctl start nginx
```

### 3.4 Install Node.js (for building)
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

---

## Step 4: Deploy Static Files

### 4.1 Clone & Build on Server
```bash
cd /var/www
sudo git clone https://github.com/manikaran301/kissaansampatti_website.git
cd kissaansampatti_website
sudo npm install
sudo npm run build
```

### 4.2 Copy Files to Nginx Root
```bash
sudo rm -rf /var/www/html/*
sudo cp -r out/* /var/www/html/
sudo chown -R www-data:www-data /var/www/html
```

---

## Step 5: Nginx Configuration

### 5.1 Create Site Config
```bash
sudo nano /etc/nginx/sites-available/kissaan-sampatti
```

### 5.2 Add Configuration
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    root /var/www/html;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

    # Cache static assets
    location /_next/static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    # Handle 404
    error_page 404 /404.html;
}
```

### 5.3 Enable Site
```bash
sudo ln -s /etc/nginx/sites-available/kissaan-sampatti /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

---

## Step 6: SSL Certificate (Optional but Recommended)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Auto-renewal test
sudo certbot renew --dry-run
```

---

## Step 7: Update Deployment Script

Create `/var/www/update-site.sh`:
```bash
#!/bin/bash
cd /var/www/kissaansampatti_website
sudo git pull origin main
sudo npm install
sudo npm run build
sudo rm -rf /var/www/html/*
sudo cp -r out/* /var/www/html/
sudo chown -R www-data:www-data /var/www/html
echo "Deployment complete!"
```

Make executable:
```bash
sudo chmod +x /var/www/update-site.sh
```

**To update site:** `sudo /var/www/update-site.sh`

---

## Quick Commands Reference

| Action | Command |
|--------|---------|
| Check Nginx status | `sudo systemctl status nginx` |
| Restart Nginx | `sudo systemctl restart nginx` |
| View Nginx logs | `sudo tail -f /var/log/nginx/error.log` |
| Test Nginx config | `sudo nginx -t` |
| Update site | `sudo /var/www/update-site.sh` |

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| 403 Forbidden | `sudo chown -R www-data:www-data /var/www/html` |
| 502 Bad Gateway | Check Nginx config: `sudo nginx -t` |
| Site not loading | Check security group port 80 is open |
| CSS not loading | Clear browser cache, check file permissions |

---

## Contact
For issues, contact the development team.

