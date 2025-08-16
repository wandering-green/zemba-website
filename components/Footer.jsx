'use client';

/* Inline, brand-friendly icons (stroke=2, rounded) */
const Phone = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 6c0-1.1.9-2 2-2h2a2 2 0 0 1 2 1.7l.4 2a2 2 0 0 1-.6 1.9l-1 1a14 14 0 0 0 6 6l1-1a2 2 0 0 1 1.9-.6l2 .4A2 2 0 0 1 20 16v2a2 2 0 0 1-2 2h-.5C10.2 20 4 13.8 4 6.5V6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WhatsAppBubble = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 3a8 8 0 0 0-7 11.9L4 21l6.2-1a8 8 0 1 0 1.8-15Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M9.8 8.8c.3-1 1.6-.3 2 .1.5.4 1.2 1.4 1.2 1.4s.2.3 0 .7c-.2.4-.7 1-.7 1s.6.8 1.2 1.3c.6.6 1.4 1.1 1.4 1.1s.6-.4 1-.6c.4-.1.7.1.7.1s1 .6 1.4 1.1c.4.4 1 1.7 0 2-.9.3-2.4.2-4-.5-1.5-.7-3.2-2-4.4-3.4-1.2-1.3-2.1-3.1-2.4-4-.3-.9 0-1.3.6-1.7.7-.4 1-.6 1-.6Z" fill="currentColor"/>
  </svg>
);

const Pin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 22s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const DocShield = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M6 3h7l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M13 3v5h5" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 12c1.8-1 3.3-1.6 4.5-1.8V14c0 2.6-1.7 4.4-4.5 5.9C9.2 18.4 7.5 16.6 7.5 14v-3.8C8.7 10.4 10.2 11 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

export default function Footer({ lang='en' }) {
  const t = (en, hi) => (lang === 'hi' ? hi : en);

  return (
    <footer id="contact" className="bg-zemba-coal text-neutral-200">
      <div className="container-tight py-12">
        {/* top divider for structure */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-semibold text-white">ZEMBA</div>
            <p className="text-sm text-neutral-400 mt-2">
              {t("Finance-first battery partner for e-rickshaw drivers in Agra.","आगरा के ई-रिक्शा ड्राइवरों के लिए वित्त-प्रथम बैटरी पार्टनर।")}
            </p>
          </div>

          {/* Contact (with bold icons) */}
          <div>
            <div className="font-semibold text-white mb-3">{t("Contact","संपर्क")}</div>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-neutral-300"/>
                <a className="underline" href="tel:+919105666644">+91 91056 66644</a>
              </li>
              <li className="flex items-center gap-2.5">
                <WhatsAppBubble className="w-5 h-5 text-zemba-pink"/>
                <a className="underline" href="https://wa.me/919105666644" target="_blank" rel="noreferrer">WhatsApp</a>
                <span className="text-neutral-500 text-sm">{t("(preferred)","(बेहतर)")}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Pin className="w-5 h-5 text-neutral-300"/>
                <span>{t("Agra, Uttar Pradesh","आगरा, उत्तर प्रदेश")}</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="font-semibold text-white mb-3">{t("Legal","कानूनी")}</div>
            <div className="flex items-start gap-2.5 text-sm text-neutral-400">
              <DocShield className="w-5 h-5"/>
              <p>
                {t("Financing facilitated via registered NBFC partners. Terms apply.",
                   "वित्तपोषण पंजीकृत NBFC पार्टनर्स के माध्यम से। शर्तें लागू।")}
              </p>
            </div>
          </div>
        </div>

        <div className="text-xs text-neutral-500 mt-8">
          © {new Date().getFullYear()} Zemba
        </div>
      </div>
    </footer>
  );
}
