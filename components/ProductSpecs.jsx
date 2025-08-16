import Image from "next/image";

export default function ProductSpecs({ lang='en' }) {
  const t = (en, hi) => lang === 'hi' ? hi : en;
  const specs = [
    [t("Voltage","वोल्टेज"), "48V"],
    [t("Capacity","क्षमता"), "100Ah"],
    [t("Charge Time","चार्ज समय"), t("3–4 hours","3–4 घंटे")],
    [t("Cycle Life","साइकिल लाइफ"), "2000+"],
    [t("Range/Charge","रेंज/चार्ज"), t("Up to 90 km*","90 किमी तक*")],
    [t("Warranty","वारंटी"), t("36 months","36 महीने")],
  ];

  return (
    <section id="product" className="container-tight py-14 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-neutral-100">
            <Image src="/battery.png" alt="Zemba Battery" width={1200} height={900} className="w-full h-auto" />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold">{t("Zemba E-Rickshaw Lithium Battery","ज़ेम्बा ई-रिक्शा लिथियम बैटरी")}</h2>
          <p className="text-neutral-600 mt-2">{t("Built for long life and fast charging. CE/BIS compliant, with advanced BMS protections.","लंबी उम्र व तेज़ चार्जिंग के लिए बनी। CE/BIS अनुरूप, उन्नत BMS सुरक्षा।")}</p>

          <ul className="grid grid-cols-2 gap-3 mt-6">
            {specs.map(([k,v])=>(
              <li key={k} className="card p-4">
                <div className="text-sm text-neutral-500">{k}</div>
                <div className="font-semibold">{v}</div>
              </li>
            ))}
          </ul>

          <div className="card p-5 mt-6">
            <div className="font-semibold mb-2">{t("Exchange Program","एक्सचेंज कार्यक्रम")}</div>
            <p className="text-sm text-neutral-700">{t("Old battery buyback to reduce your upfront cost.","पुरानी बैटरी का बायबैक—शुरुआती खर्च कम।")}</p>
            <div className="font-semibold mt-4 mb-1">{t("Safety & Standards","सुरक्षा व मानक")}</div>
            <ul className="list-disc pl-5 text-sm text-neutral-700 space-y-1">
              <li>{t("BMS protections: OV/UV/OC/short/thermal","BMS सुरक्षा: OV/UV/OC/शॉर्ट/थर्मल")}</li>
              <li>{t("CE/BIS compliant","CE/BIS अनुरूप")}</li>
              <li>{t("Recycling program available","रिसाइक्लिंग कार्यक्रम उपलब्ध")}</li>
            </ul>
          </div>

          <p className="text-xs text-neutral-500 mt-3">
            {t("*Actual range depends on route, load & driving.","*वास्तविक रेंज मार्ग, भार व ड्राइविंग पर निर्भर।")}
          </p>
        </div>
      </div>
    </section>
  );
}
