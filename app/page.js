'use client';

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import HowItWorks from "@/components/HowItWorks";
import ProductSpecs from "@/components/ProductSpecs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CTASticky from "@/components/CTASticky";

/* NEW: trust bar */
import TrustBar from "@/components/TrustBar";

export default function Page() {
  const [lang, setLang] = useState('en');
  const toggleLang = () => setLang(l => (l === 'en' ? 'hi' : 'en'));

  return (
    <main>
      <Header lang={lang} onToggleLang={toggleLang} />

      {/* Hero with dark calculator panel + premium badge */}
      <Hero lang={lang} />

      {/* Why Zemba (larger icons, stronger chips) */}
      <ValueProps lang={lang} />

      {/* How it works (stepper with connecting line) */}
      <HowItWorks lang={lang} />

      {/* Product specs as you already have */}
      <ProductSpecs lang={lang} />

      {/* NEW: Monochrome credibility strip (CE / BIS / ISO) just below specs */}
      <TrustBar />

      {/* Driver stories (avatars + mobile-first carousel) */}
      <Testimonials lang={lang} />

      {/* Softer FAQ cards with padding + brand focus ring */}
      <FAQ lang={lang} />

      {/* Apply section (kept as-is) */}
      <section id="apply" className="container-tight py-14 md:py-20">
        <div className="card p-6">
          <h2 className="text-2xl font-semibold mb-4">
            {lang === 'hi' ? "अभी आवेदन करें" : "Apply Now"}
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(lang === 'hi'
                ? 'धन्यवाद! हम जल्द ही संपर्क करेंगे.'
                : 'Thank you! We will contact you shortly.');
            }}
            className="grid md:grid-cols-3 gap-4"
          >
            <div>
              <label className="label">{lang === 'hi' ? "नाम" : "Name"}</label>
              <input className="input focus-brand" required placeholder={lang === 'hi' ? "पूरा नाम" : "Full name"} />
            </div>
            <div>
              <label className="label">{lang === 'hi' ? "मोबाइल" : "Mobile"}</label>
              <input className="input focus-brand" type="tel" required placeholder="+91" />
            </div>
            <div>
              <label className="label">{lang === 'hi' ? "क्षेत्र" : "Area"}</label>
              <input className="input focus-brand" required placeholder={lang === 'hi' ? "उदा. ताजगंज" : "e.g., Tajganj"} />
            </div>
            <div className="md:col-span-3 flex items-center gap-3">
              <button className="btn btn-primary focus-brand">
                {lang === 'hi' ? "सबमिट करें" : "Submit"}
              </button>
              <span className="text-sm text-neutral-600">
                {lang === 'hi'
                  ? "OTP और कागज़ात बाद में लिए जाएंगे"
                  : "OTP & documents will be collected later"}
              </span>
            </div>
          </form>
        </div>
      </section>

      <Footer lang={lang} />

      {/* Floating WhatsApp/Call pills */}
      <CTASticky lang={lang} />
    </main>
  );
}
