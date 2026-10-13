import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Banner from './components/Banner';
import Odyssey from './components/Odyssey';
import Masterpieces from './components/Masterpieces';
import Pillars from './components/Pillars';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function App() {
  const [count, setCount] = useState(0);
  const [roman, setRoman] = useState("I");
  const [preloaderActive, setPreloaderActive] = useState(true);

  const container = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Custom Cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX - 2, // The tip of the sword is at 2,2
          y: e.clientY - 2,
          duration: 0.1, // Faster follow for the main pointer
          ease: "power2.out"
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useGSAP(() => {
    // Preloader Animation
    const romanNumerals = [
      { limit: 10, symbol: "I" },
      { limit: 25, symbol: "XXV" },
      { limit: 50, symbol: "L" },
      { limit: 75, symbol: "LXXV" },
      { limit: 90, symbol: "XC" },
      { limit: 100, symbol: "C" },
    ];

    const proxy = { value: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        const exitTl = gsap.timeline({
          onComplete: () => {
            setPreloaderActive(false);
            triggerEntranceAnimations();
          }
        });

        exitTl.to('.loader-content', { opacity: 0, duration: 0.5 })
              .to('.center-line', { scaleY: 1, duration: 0.6, ease: "power3.inOut" })
              .to('.center-line', { opacity: 0, duration: 0.3 }, "+=0.1")
              .to('.curtain-left', { xPercent: -100, duration: 1, ease: "power3.inOut" }, "<")
              .to('.curtain-right', { xPercent: 100, duration: 1, ease: "power3.inOut" }, "<");
      }
    });

    tl.to(proxy, {
      value: 100,
      duration: 3.5,
      ease: "power1.inOut",
      onUpdate: () => {
        const val = Math.floor(proxy.value);
        setCount(val);
        const activeRoman = romanNumerals.find(r => val <= r.limit);
        if (activeRoman) setRoman(activeRoman.symbol);
      }
    });

    function triggerEntranceAnimations() {
      const elements = gsap.utils.toArray<HTMLElement>('.stagger-init');
      elements.forEach((el) => {
        let x = 0, y = 0, scale = 1;
        if (el.classList.contains('from-left')) x = -70;
        if (el.classList.contains('from-right')) x = 70;
        if (el.classList.contains('from-bottom')) y = 60;
        if (el.classList.contains('scale-up')) scale = 0.92;

        const delayAttr = el.getAttribute('data-stagger-delay');
        const delay = delayAttr ? parseInt(delayAttr) / 1000 : 0.1;

        gsap.set(el, { opacity: 0, visibility: 'visible' });

        gsap.fromTo(el, 
          { x, y, scale, autoAlpha: 0 },
          { 
            x: 0, y: 0, scale: 1, autoAlpha: 1,
            duration: 1.2,
            delay: delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    }
  }, { scope: container });

  return (
    <div ref={container} className="bg-marble-texture text-obsidian-900 font-bodyRoman antialiased selection:bg-gold-500 selection:text-white relative overflow-x-hidden">
      {/* Roman Sword Cursor */}
      <div ref={cursorRef} className="gold-cursor fixed z-[101] top-0 left-0 hidden lg:block pointer-events-none w-8 h-8">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_4px_6px_rgba(212,175,55,0.4)]">
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBF5B7" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#997838" />
            </linearGradient>
          </defs>
          <g>
            {/* Blade */}
            <path d="M2 2 L14.5 10.5 L16 16 L10.5 14.5 Z" fill="url(#goldGrad)" stroke="#997838" strokeWidth="0.5" strokeLinejoin="round"/>
            <path d="M2 2 L16 16" stroke="#FCF6BA" strokeWidth="0.5" opacity="0.8"/>
            {/* Crossguard */}
            <path d="M11 19 L13 21 L21 13 L19 11 Z" fill="#141312" stroke="url(#goldGrad)" strokeWidth="1"/>
            {/* Grip */}
            <line x1="16" y1="16" x2="24" y2="24" stroke="#141312" strokeWidth="3" strokeLinecap="round"/>
            <line x1="16" y1="16" x2="24" y2="24" stroke="url(#goldGrad)" strokeWidth="1" strokeLinecap="round"/>
            {/* Pommel */}
            <circle cx="25" cy="25" r="3.5" fill="url(#goldGrad)" stroke="#141312" strokeWidth="1"/>
          </g>
        </svg>
      </div>

      {preloaderActive && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-marble-50 overflow-hidden">
          <div className="curtain-left absolute inset-y-0 left-0 w-1/2 bg-marble-100"></div>
          <div className="curtain-right absolute inset-y-0 right-0 w-1/2 bg-marble-100"></div>
          <div className="center-line absolute inset-y-0 left-1/2 w-[2px] bg-gold-400/80 -translate-x-1/2 z-0 scale-y-0 origin-top"></div>
          
          <div className="loader-content relative z-10 flex flex-col items-center text-center px-6 max-w-lg">
            <div className="relative w-32 h-32 mb-6 flex items-center justify-center">
              <svg className="w-full h-full text-gold-500 animate-spin-slow" viewBox="0 0 100 100">
                <circle cx="50" cy="50" fill="none" r="46" stroke="currentColor" strokeDasharray="6, 6" strokeWidth="1.5"></circle>
                <circle cx="50" cy="50" fill="none" r="40" stroke="#D4AF37" strokeWidth="1"></circle>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-decorative text-gold-600 text-3xl font-bold tracking-widest">🏛️</span>
              </div>
            </div>
            <p className="font-serifHeading text-xs uppercase tracking-[0.4em] text-gold-700 mb-2">My First Protfilo</p>
            <h2 className="font-serifHeading text-xl tracking-widest text-obsidian-950 font-bold mb-4">Mohamed Ahmed</h2>
            <p className="italic text-gold-900/70 text-sm mb-6">"Front-End Developer "</p>
            <div className="flex items-center space-x-3 text-gold-600 font-sansMeta text-xs uppercase tracking-widest">
              <span className="font-serifHeading text-base font-bold text-gold-500 tracking-wider">{roman}</span>
              <span className="text-gold-400">/</span>
              <span className="text-sm font-semibold">{count}%</span>
            </div>
            <div className="w-56 h-[2px] bg-gold-200 mt-4 overflow-hidden relative rounded-full">
              <div className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-300 transition-all" style={{ width: `${count}%` }}></div>
            </div>
          </div>
        </div>
      )}

      <Navbar />
      <Hero />
      <Banner />
      <Odyssey />
      <Masterpieces />
      <Pillars />
      <Footer />
    </div>
  );
}
