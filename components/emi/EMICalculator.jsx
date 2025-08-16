'use client';

import { useMemo, useState } from "react";

function calcEMI(principal, annualRatePct, months) {
  const r = (annualRatePct/100)/12;
  if (months <= 0) return { emi: 0, total: 0, perDay: 0 };
  if (r === 0) {
    const emi = principal / months;
    return { emi, total: emi * months, perDay: emi / 30 };
  }
  const pow = Math.pow(1 + r, months);
  const emi = principal * r * pow / (pow - 1);
  return { emi, total: emi * months, perDay: emi / 30 };
}

export default function EMICalculator({ lang='en' }) {
  const t = (en, hi) => (lang === 'hi' ? hi : en);

  const [price, setPrice]   = useState(75000);
  const [down, setDown]     = useState(15000);
  const [months, setMonths] = useState(15);
  const [rate, setRate]     = useState(22);

  const principal = Math.max(price - down, 0);
  const { emi, total, perDay } = useMemo(
    () => calcEMI(principal, rate, months),
    [principal, rate, months]
  );

  return (
    <div id="finance" className="emi-dark space-y-4">
      <h2 className="text-xl font-semibold text-white">
        {t("Quick EMI Calculator","त्वरित EMI कैलकुलेटर")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="label">{t("Battery Price (₹)","बैटरी कीमत (₹)")}</label>
          <input
            className="input focus-brand"
            type="number" min={0}
            value={price}
            onChange={e=>setPrice(Number(e.target.value||0))}
            placeholder="75000"
          />
        </div>
        <div>
          <label className="label">{t("Down-Payment (₹)","डाउन-पेमेंट (₹)")}</label>
          <input
            className="input focus-brand"
            type="number" min={0} max={price}
            value={down}
            onChange={e=>setDown(Number(e.target.value||0))}
            placeholder="15000"
          />
        </div>
        <div>
          <label className="label">{t("Tenure (months)","अवधि (महीने)")}</label>
          <select
            className="select focus-brand"
            value={months}
            onChange={e=>setMonths(Number(e.target.value))}
          >
            {[12,15,18,24].map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
        <div>
          <label className="label">{t("Interest (APR %)","ब्याज (APR %)")}</label>
          <input
            className="input focus-brand"
            type="number" min={0} step="0.1"
            value={rate}
            onChange={e=>setRate(Number(e.target.value||0))}
            placeholder="22"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div className="card p-4 bg-white text-neutral-900">
          <div className="text-sm text-neutral-500">{t("Monthly EMI","मासिक EMI")}</div>
          <div className="text-2xl font-semibold">₹{Math.round(emi).toLocaleString()}</div>
        </div>
        <div className="card p-4 bg-white text-neutral-900">
          <div className="text-sm text-neutral-500">{t("Cost Per Day","प्रति-दिन लागत")}</div>
          <div className="text-2xl font-semibold">₹{Math.round(perDay).toLocaleString()}</div>
        </div>
        <div className="card p-4 bg-white text-neutral-900">
          <div className="text-sm text-neutral-500">{t("Total Payment","कुल भुगतान")}</div>
          <div className="text-2xl font-semibold">₹{Math.round(total).toLocaleString()}</div>
        </div>
      </div>

      <p className="text-xs text-white/80">
        {t("Illustrative figures. Final EMI post KYC & approval. Late fees and processing charges may apply.",
           "उदाहरण मात्र। अंतिम EMI KYC और मंज़ूरी के बाद तय होगा। लेट फीस और प्रोसेसिंग शुल्क लागू हो सकते हैं.")}
      </p>
    </div>
  );
}
