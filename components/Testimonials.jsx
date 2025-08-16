'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/* Initials avatar (swap with photos later if you like) */
function Avatar({ name }) {
  const initial = (name?.trim()?.[0] || 'Z').toUpperCase();
  return (
    <div className="w-9 h-9 rounded-full bg-zemba-pink/15 text-zemba-pink grid place-items-center font-semibold">
      {initial}
    </div>
  );
}

/* Real local quotes (within ~100km of Agra) */
const TESTIMONIALS = [
  { name: 'Raju',  area: 'Tajganj, Agra',
    en: 'With ₹110/day EMI, I run 2 extra hours and make ₹4,000+ more every month.',
    hi: '₹110/दिन EMI पर, 2 घंटे ज़्यादा चलाता हूँ — हर महीने ₹4,000+ बढ़िया बचत।' },
  { name: 'Vijay',  area: 'Sikandra, Agra',
    en: 'Fast charging means fewer queues. I finish my evening school runs on time.',
    hi: 'फ़ास्ट चार्जिंग से लाइने कम। शाम के स्कूल राउंड समय पर हो जाते हैं।' },
  { name: 'Rahim', area: 'Shahganj, Agra',
    en: 'Approval in a day. Fitment was neat — got back on road same afternoon.',
    hi: 'एक दिन में अप्रूवल। फिटमेंट साफ़-सुथरा, उसी दोपहर गाड़ी लेकर निकल पड़ी।' },
  { name: 'Kallu',  area: 'Mantola, Agra',
    en: 'Swap service helped during peak rain hour — no downtime.',
    hi: 'बारिश के पीक टाइम में स्वैप सर्विस काम आई — डाउनटाइम नहीं हुआ।' },
  { name: 'Shubham',  area: 'Khandari, Agra',
    en: 'No hidden charges. Fixed EMI means I can plan my month properly.',
    hi: 'कोई छुपा चार्ज नहीं। फिक्स्ड EMI से महीने की प्लानिंग ठीक रहती है।' },
  { name: 'Sonu',   area: 'Fatehpur Sikri',
    en: 'Daily cost is less than my chai–snacks spend. Range is fine for my route.',
    hi: 'डेली खर्च चाय–नाश्ते से भी कम। मेरी रूट के लिए रेंज ठीक बैठती है।' },
  { name: 'Ramesh', area: 'Mathura',
    en: 'I cover the temple belt faster after upgrade. More trips, better take-home.',
    hi: 'अपग्रेड के बाद मठ–मंदिर बेल्ट जल्दी कवर हो जाती है। ट्रिप बढ़े, कमाई सुधरी।' },
  { name: 'Iqbal',  area: 'Vrindavan',
    en: 'I do a quick top-up at lunch and finish a double shift comfortably.',
    hi: 'लंच में जल्दी टॉप-अप कर लेता हूँ और आराम से डबल शिफ्ट कर पाता हूँ।' },
  { name: 'Salim',  area: 'Bharatpur',
    en: 'Clear EMI + buyback gave me confidence to switch.',
    hi: 'क्लियर EMI और बायबैक से भरोसा बना — तभी स्विच किया।' },
  { name: 'Mohit',  area: 'Firozabad',
    en: 'Battery feels sturdy, BMS keeps it cool. No drama.',
    hi: 'बैटरी मज़बूत लगती है, BMS तापमान संभाले रखता है — बिना झंझट।' },
  { name: 'Deepak', area: 'Tundla',
    en: 'Same route, less stress. Reminders for EMI are helpful.',
    hi: 'रूट वही, टेंशन कम। EMI रिमाइंडर काम के हैं।' },
  { name: 'Aadarsh',  area: 'Dholpur',
    en: 'They installed and tested in front of me. Service is reachable.',
    hi: 'इंस्टॉल और टेस्ट मेरे सामने किया। सर्विस टीम आसानी से मिल जाती है।' },
];

export default function Testimonials({ lang = 'en' }) {
  const t = (it) => (lang === 'hi' ? it.hi || it.en : it.en);

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const cardsRef = useRef([]);
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);

  // assign refs by index (avoids duplicates)
  const setCardRef = (idx) => (el) => { cardsRef.current[idx] = el; };

  // observe section visibility (gate autoplay)
  useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio >= 0.6),
      { root: null, threshold: [0, 0.6, 1] }
    );
    io.observe(sec);
    return () => io.disconnect();
  }, []);

  // observe which card is centered within the track
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const opts = { root: track, rootMargin: '0px 30% 0px 30%', threshold: 0.6 };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const idx = Number(e.target.getAttribute('data-idx') || 0);
          setActive(idx);
        }
      });
    }, opts);

    cardsRef.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  // precise horizontal scroll (no vertical page movement)
  const scrollToIdx = (idx, behavior = 'smooth') => {
    const track = trackRef.current;
    const card = cardsRef.current[idx];
    if (!track || !card) return;

    const trackRect = track.getBoundingClientRect();
    const cardRect  = card.getBoundingClientRect();

    // distance from card's left edge to track's left edge, plus current scroll
    const deltaLeft = (cardRect.left - trackRect.left) + track.scrollLeft;

    // center the card in the track viewport
    const targetLeft = deltaLeft - (track.clientWidth - card.clientWidth) / 2;

    track.scrollTo({ left: targetLeft, behavior });
  };

  const goTo = (idx) => () => scrollToIdx(idx);
  const prev = () => setActive(idx => (scrollToIdx((idx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), (idx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length));
  const next = () => setActive(idx => (scrollToIdx((idx + 1) % TESTIMONIALS.length), (idx + 1) % TESTIMONIALS.length));


  // autoplay (only when section is in view; pause on hover/touch)
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !inView) return;

    let paused = false;
    const pause = () => { paused = true; };
    const resume = () => { paused = false; };

    const id = setInterval(() => {
      if (!paused) next();
    }, 3500);

    track.addEventListener('mouseenter', pause);
    track.addEventListener('mouseleave', resume);
    track.addEventListener('pointerdown', pause, { passive: true });
    track.addEventListener('touchstart', pause, { passive: true });

    return () => {
      clearInterval(id);
      track.removeEventListener('mouseenter', pause);
      track.removeEventListener('mouseleave', resume);
      track.removeEventListener('pointerdown', pause);
      track.removeEventListener('touchstart', pause);
    };
  }, [inView, active]); // recreate timer when active changes so it stays in sync

  // optional: center the first card on mount (no snap to top)
  useEffect(() => {
    // slight delay to ensure layout is ready
    const id = requestAnimationFrame(() => scrollToIdx(0, 'auto'));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section ref={sectionRef} className="container-tight py-16 md:py-20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold">
          {lang === 'hi' ? 'ड्राइवर अनुभव' : 'Driver Stories'}
        </h2>
        <div className="flex gap-2">
          <button onClick={prev} aria-label="Previous" className="btn-ghost rounded-full p-2 shadow-soft">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} aria-label="Next" className="btn-ghost rounded-full p-2 shadow-soft">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative">
        {/* edge fades for premium feel */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent rounded-l-2xl" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent rounded-r-2xl" />

        {/* Scrollable track */}
        <div
          ref={trackRef}
          className="
            flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth
            -mx-4 px-4 pb-1 scrollbar-hide overscroll-x-contain touch-pan-x
          "
        >
          {TESTIMONIALS.map((it, i) => (
            <figure
              key={i}
              data-idx={i}
              ref={setCardRef(i)}
              className="
                card p-6 snap-center snap-always
                w-[86%] sm:w-[70%] md:w-[520px] lg:w-[560px]
                shrink-0
              "
            >
              <blockquote className="italic leading-relaxed text-neutral-800">
                “{t(it)}”
              </blockquote>
              <figcaption className="flex items-center gap-3 mt-4">
                <Avatar name={it.name} />
                <div>
                  <div className="font-medium">{it.name}</div>
                  <div className="text-sm text-neutral-600">{it.area}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={goTo(i)}
            className={`
              h-2.5 rounded-full transition-all
              ${active === i ? 'w-6 bg-zemba-pink' : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'}
            `}
          />
        ))}
      </div>

      {/* Hide scrollbar cross-browser */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
