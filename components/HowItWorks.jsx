export default function HowItWorks({ lang='en' }){
  const t=(en,hi)=> (lang==='hi'?hi:en);
  const steps=[
    {n:1,title:t("Apply (2 mins)","आवेदन (2 मिनट)"),desc:t("Aadhaar + DL + RC","आधार + DL + RC")},
    {n:2,title:t("Same-day Approval","उसी दिन मंजूरी"),desc:t("Quick checks","फ़ास्ट चेक")},
    {n:3,title:t("Down-Payment","डाउन-पेमेंट"),desc:t("UPI/Cash/Card","UPI/कैश/कार्ड")},
    {n:4,title:t("Fitment & Road-Test","फिटमेंट व रोड-टेस्ट"),desc:t("Install + test","इंस्टॉल + टेस्ट")},
    {n:5,title:t("Easy EMIs","आसान EMI"),desc:t("UPI/autopay reminders","UPI/ऑटोपे रिमाइंडर")},
  ];

  return (
    <section id="how" className="bg-neutral-50/60">
      <div className="container-tight py-16 md:py-20">
        <h2 className="text-3xl font-semibold mb-10">{t("How it works","कैसे काम करता है")}</h2>
        <div className="timeline relative">
          <div className="timeline-line"></div>
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((s,i)=>(
              <div key={s.n} className="card card-elev p-6 reveal" style={{animationDelay:`.${i}2s`}}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-zemba-pink text-white grid place-items-center font-semibold">{s.n}</div>
                  <div className="font-semibold">{s.title}</div>
                </div>
                <p className="text-sm text-neutral-600 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
