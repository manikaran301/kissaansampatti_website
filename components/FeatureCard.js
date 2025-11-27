export default function FeatureCard({ title, children, icon }) {
  return (
    <div className="card p-6 hover:border-[var(--brand)] transition-all">
      {icon && (
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--brand-light)] text-2xl mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">{title}</h3>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{children}</p>
    </div>
  )
}

