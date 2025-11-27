export default function Button({ children, href, className, onClick, variant = 'primary' }) {
  const base = 'inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:ring-offset-2';

  const variants = {
    primary: 'bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)]',
    secondary: 'bg-white text-[var(--brand)] border-2 border-[var(--brand)] hover:bg-[var(--brand-light)]'
  };

  const classes = `${base} ${variants[variant]} ${className || ''}`;

  return (
    href ? (
      <a href={href} className={classes}>
        {children}
      </a>
    ) : (
      <button onClick={onClick} className={classes}>
        {children}
      </button>
    )
  )
}

