'use client';
import { useState } from 'react';

export default function FAQ({ lang='en' }){
  const t=(en,hi)=> (lang==='hi'?hi:en);
  const faqs=[
    {q:t("What if I miss an EMI?","अगर EMI छूट जाए तो?"),
     a:t("We give a grace window and reminders on WhatsApp. Late fees may apply as per policy.","हम ग्रेस विंडो और व्हाट्सऐप रिमाइंडर देते हैं। पॉलिसी के अनुसार लेट फीस लग सकती है।")},
    {q:t("Where is service available?","सेवा कहाँ उपलब्ध है?"),
     a:t("Agra city limits for quick-swap. Nearby areas covered via partner centers.","आगरा शहर सीमा में क्विक-स्वैप। आस-पास के क्षेत्र पार्टनर सेंटर्स से कवर।")},
    {q:t("Is lithium safe?","क्या लिथियम सुरक्षित है?"),
     a:t("Yes—BMS protections and certified components. Follow charging guidelines.","हाँ—BMS प्रोटेक्शन और प्रमाणित कंपोनेंट्स। चार्जिंग गाइडलाइंस का पालन करें।")},
  ];

  // allow multiple open items
  const [open, setOpen] = useState(new Set());

  const toggle = (idx) => {
    const next = new Set(open);
    next.has(idx) ? next.delete(idx) : next.add(idx);
    setOpen(next);
  };

  return (
    <section id="faq" className="container-tight py-16 md:py-20">
      <h2 className="text-3xl font-semibold mb-8">{t("Frequently Asked Questions","अक्सर पूछे जाने वाले प्रश्न")}</h2>

      <div className="rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
        {faqs.map((item,i)=>{
          const active = open.has(i);
          return(
            <div key={i} className={`border-b last:border-0 border-neutral-200 ${active?'faq-active':''}`}>
              <button
                onClick={()=>toggle(i)}
                className="w-full text-left px-5 md:px-6 py-4 md:py-5 focus-brand"
                aria-expanded={active}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-medium">{item.q}</span>
                  <span className={`shrink-0 transition-transform duration-200 ${active?'rotate-45':''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  </span>
                </div>
              </button>
              {active && <div className="px-5 md:px-6 pb-4 text-sm text-neutral-700 leading-relaxed">{item.a}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
