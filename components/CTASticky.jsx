export default function CTASticky({ lang='en' }) {
  const t = (en, hi) => lang === 'hi' ? hi : en;
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
      <a href="https://wa.me/919105666644" target="_blank" rel="noreferrer" className="btn btn-primary shadow-soft">
        {t("WhatsApp Us","व्हाट्सऐप करें")}
      </a>
      <a href="tel:+919105666644" className="btn bg-white text-black shadow-soft border border-neutral-200">
        {t("Call Now","कॉल करें")}
      </a>
    </div>
  );
}
