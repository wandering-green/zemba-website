'use client';

export default function Header({ lang='en', onToggleLang }) {
  const t = (en, hi) => (lang === 'hi' ? hi : en);

  const Zap = (props) => (
    <svg viewBox="0 0 24 24" width="14" height="14" {...props}>
      <path d="M13.5 2 5 13h6l-1.5 9L19 10h-6L13.5 2Z" fill="currentColor"/>
    </svg>
  );

  const nav = [
    { href: '#finance', label: t('Finance','वित्त') },
    { href: '#product', label: t('Product','उत्पाद') },
    { href: '#how', label: t('How it works','कैसे') },
    { href: '#faq', label: t('FAQ','प्रश्न') },
    { href: '#contact', label: t('Contact','संपर्क') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-100">
      <div className="container-tight flex items-center justify-between py-3">
        <a href="#" className="brand-pill focus-brand" aria-label="Zemba">
          <span className="brand-mark"><Zap/></span>
          <span className="brand-text">ZEMBA</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n)=>(
            <a key={n.href} href={n.href} className="text-sm text-neutral-700 hover:text-neutral-900">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={onToggleLang} className="btn btn-ghost text-sm focus-brand" aria-label="Toggle language">
            {lang === 'hi' ? 'English' : 'हिन्दी'}
          </button>
          <a href="#apply" className="btn btn-primary focus-brand text-sm">
            {t('Apply Now','अभी आवेदन करें')}
          </a>
        </div>
      </div>
    </header>
  );
}
