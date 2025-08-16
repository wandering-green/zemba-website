// Unified stroke-based icons

const Bolt = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M13 2 6 14h6l-1 8 8-12h-6l1-8Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const Swap = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4 7h14l-3-3m3 3-3 3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 17H6l3-3m-3 3 3 3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Shield = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 3 4 6v6c0 6 4 10 8 12 4-2 8-6 8-12V6l-8-3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="m9 12 2 2 4-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Badge = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="m9 12 2 2 4-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ValueProps({ lang = 'en' }) {
  const t = (en, hi) => (lang === 'hi' ? hi : en);
  const items = [
    {
      Icon: Bolt,
      title: t('Earn More, Spend Less', 'ज़्यादा कमाई, कम खर्च'),
      desc: t('Fast charging → more trips per day.', 'तेज़ चार्जिंग → ज़्यादा ट्रिप/दिन'),
    },
    {
      Icon: Swap,
      title: t('Zero Downtime Promise', 'ज़ीरो डाउनटाइम वादा'),
      desc: t('Quick-swap service in Agra.', 'आगरा में क्विक-स्वैप सेवा'),
    },
    {
      Icon: Shield,
      title: t('Transparent Finance', 'पारदर्शी वित्त'),
      desc: t('Fixed EMI. No hidden charges.', 'निश्चित EMI, कोई छिपे शुल्क नहीं'),
    },
    {
      Icon: Badge,
      title: t('Own in 15 Months', '15 महीनों में मालिक'),
      desc: t('Asset in your name.', 'संपत्ति आपके नाम'),
    },
  ];

  return (
    <section id="why" className="container-tight py-16 md:py-20">
      <h2 className="text-3xl font-semibold mb-8">
        {t('Why Zemba', 'ज़ेम्बा क्यों')}
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map(({ Icon, title, desc }, i) => (
          <div
            key={i}
            className="card card-elev p-6 card-hover reveal"
            style={{ animationDelay: `.${i}2s` }}
          >
            <div className="w-14 h-14 rounded-2xl bg-zemba-pink/16 text-zemba-pink flex items-center justify-center">
              <Icon className="w-8 h-8" />
            </div>
            <div className="mt-4 font-semibold">{title}</div>
            <p className="text-sm text-neutral-600 mt-1">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
