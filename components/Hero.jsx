'use client';
import EMICalculator from '@/components/emi/EMICalculator';

/* Tiny, bolder inline icons (not boring) */
const PhoneShield = (props) => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" {...props}>
    <rect x="6" y="2" width="12" height="20" rx="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 8.5c1.8-1 3.3-1.6 4.5-1.8V10c0 2.6-1.7 4.4-4.5 5.9C9.2 14.4 7.5 12.6 7.5 10V6.7c1.2.2 2.7.7 4.5 1.8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const StopwatchBolt = (props) => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" {...props}>
    <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="13" r="7" stroke="currentColor" strokeWidth="2"/>
    <path d="M10 3h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M13 2v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16.5 4.5 18 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const FileClock = (props) => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" {...props}>
    <path d="M6 3h7l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2" />
    <path d="M13 3v5h5" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="15" r="3.5" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 13.5V15l1.2 1.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default function Hero({ lang='en' }) {
  const t = (en, hi) => (lang === 'hi' ? hi : en);

  return (
    <section className="bg-aurora text-white">
      <div className="container-tight grid md:grid-cols-2 gap-14 items-center py-16 md:py-24">
        {/* Left */}
        <div className="space-y-6 md:space-y-7 reveal">
          <span className="badge-pro">
            {t("Own your battery in 15 months", "15 महीनों में बैटरी अपने नाम")}
          </span>

          <h1 className="h1">
            {t("Small down-payment. Easy daily EMI.","कम डाउन-पेमेंट। आसान दैनिक EMI.")}
            <br/>{t("More runs, more earnings.","ज़्यादा दौड़, ज़्यादा कमाई.")}
          </h1>

          <p className="subtle text-white/80">
            {t("36-month warranty · Exchange available · Local service in Agra",
               "36 माह वारंटी · एक्सचेंज उपलब्ध · आगरा में स्थानीय सेवा")}
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#apply" className="btn btn-primary focus-brand">{t("Apply Now","अभी आवेदन करें")}</a>
            </div>

          {/* Trust cues as pill badges */}
          <div className="mt-2 flex flex-wrap gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1.5 text-xs text-white/90">
              <PhoneShield className="shrink-0" /> {t("OTP secure","OTP सुरक्षित")}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1.5 text-xs text-white/90">
              <StopwatchBolt className="shrink-0" /> {t("Takes < 2 mins","सिर्फ़ < 2 मिनट")}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1.5 text-xs text-white/90">
              <FileClock className="shrink-0" /> {t("Documents later","दस्तावेज़ बाद में")}
            </span>
          </div>
        </div>

        {/* Right: EMI calculator */}
        <div className="rounded-3xl emi-wrap bg-white/10 backdrop-blur-xl p-5 md:p-6 lg:p-8 reveal" style={{animationDelay:'.08s'}}>
          <EMICalculator lang={lang}/>
        </div>
      </div>
    </section>
  );
}
