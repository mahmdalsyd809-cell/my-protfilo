export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden" id="hero">
      <div className="absolute inset-0 pointer-events-none opacity-20 flex justify-between px-4 sm:px-12">
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-gold-500 to-transparent"></div>
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-gold-500 to-transparent hidden md:block"></div>
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-gold-500 to-transparent"></div>
      </div>
      <div className="absolute top-24 left-8 text-gold-400/30 w-32 h-32 hidden xl:block pointer-events-none">
        <svg fill="currentColor" viewBox="0 0 100 100">
          <path d="M50 0 C60 20 80 30 100 35 C80 40 60 50 50 70 C40 50 20 40 0 35 C20 30 40 20 50 0 Z"></path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-4 text-center lg:text-left order-2 lg:order-1 stagger-init from-left opacity-0 invisible" data-stagger-delay="200">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-gold-400/40 bg-white/60 mb-6">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
            <span className="font-sansMeta text-[11px] uppercase tracking-widest text-gold-700 font-semibold">Developer who's looking for a job </span>
          </div>
          <h1 className="font-serifHeading text-4xl sm:text-5xl xl:text-6xl text-obsidian-950 font-bold leading-tight tracking-tight uppercase mb-6"><div className="font-serifHeading text-3xl font-bold gold-foil-text"> Mohamed Ahmed</div><div>Front-End</div><div>React  TypeScript</div><div> developer</div></h1>
          <p className="font-bodyRoman text-xl sm:text-2xl text-obsidian-800/80 leading-relaxed mb-8">
            hi im mohamed and this is my portfolio i hope you ll like it , its for interdouse my self and show test of my work i take year to learn what is front end and how build and develop front side of websites  
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gold-500 hover:bg-gold-600 text-white font-serifHeading text-xs uppercase tracking-[0.2em] shadow-lg shadow-gold-500/25 transition-all text-center flex items-center justify-center gap-2" 
              href="https://wa.me/201007373720?text=%D9%85%D9%87%D8%AA%D9%85%20%D8%A7%D9%86%20%D8%A7%D8%B9%D8%B1%D9%81%20%D8%B9%D9%86%D9%83%20%D8%A7%D9%83%D8%AA%D8%B1%20%D9%88%D9%86%D8%B4%D8%AA%D8%BA%D9%84%20%D8%B3%D9%88%D8%A7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              Contact on WhatsApp 
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 stagger-init scale-up opacity-0 invisible" data-stagger-delay="100">
          <div className="relative w-72 sm:w-88 md:w-96 aspect-[3/4] flex items-center justify-center">
            <div className="absolute -inset-10 border border-gold-400/30 rounded-full animate-spin-slow pointer-events-none"></div>
            <div className="absolute -inset-6 border-2 border-dashed border-gold-500/25 rounded-full animate-spin-reverse pointer-events-none"></div>
            <div className="relative w-full h-full rounded-2xl md:rounded-t-full border-4 border-gold-400 p-2 bg-gradient-to-b from-gold-300 via-gold-500 to-gold-700 shadow-monument overflow-hidden">
              <div className="w-full h-full rounded-xl md:rounded-t-full overflow-hidden bg-marble-100 relative group">
                <img alt="Classical Carrara Marble Bust of Aurelius Vance" className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBboVw3clPKjBQTcu06YJlLDsfjZqdCRljH529Y7qDh9z2Ty3YmvlQU1tvCMhSA12IgRCXEM_MorH8wEVF_PV9b7INcp9izdgbGHSof5-SVTiER7r0Y4C1OhtpvIWq0NzCvSaQ4SG5BOPeFg4cu-7Qt17fPjCaXlb1r-x6FIU1PU02mS7bN7hjJpDOaCdxjFxYCgcxt1q3kWTJSbctInq4W3jYSFpbaIQfx8dMX6dTgjefrmewVumiHfrSHd0FqmvYv0Gk" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/40 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 inset-x-4 py-2 px-3 bg-white/85 backdrop-blur-md rounded-lg border border-gold-400/60 text-center">
                  <span className="font-serifHeading text-[10px] tracking-[0.3em] uppercase text-gold-700 font-bold">!The greatest Developer ever Me!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-6 order-3 stagger-init from-right opacity-0 invisible" data-stagger-delay="300">
          <div className="p-6 rounded-2xl bg-white/80 border border-gold-300/60 shadow-sm backdrop-blur-sm relative overflow-hidden group hover:border-gold-500 transition-colors">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gold-400/10 rounded-bl-full pointer-events-none"></div>
            <span className="font-serifHeading text-3xl font-bold gold-foil-text block mb-1">I</span>
            <h4 className="font-serifHeading text-xs uppercase tracking-wider text-obsidian-900 font-bold">seven month of learing</h4>
            <p className="font-bodyRoman text-sm text-obsidian-800/70 mt-1">the basics of front end .</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/80 border border-gold-300/60 shadow-sm backdrop-blur-sm relative overflow-hidden group hover:border-gold-500 transition-colors">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gold-400/10 rounded-bl-full pointer-events-none"></div>
            <span className="font-serifHeading text-3xl font-bold gold-foil-text block mb-1">II</span>
            <h4 className="font-serifHeading text-xs uppercase tracking-wider text-obsidian-900 font-bold">with what and who</h4>
            <p className="font-bodyRoman text-sm text-obsidian-800/70 mt-1">i was study in eraasoft and youtube and ieee  </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/80 border border-gold-300/60 shadow-sm backdrop-blur-sm relative overflow-hidden group hover:border-gold-500 transition-colors">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gold-400/10 rounded-bl-full pointer-events-none"></div>
            <span className="font-serifHeading text-3xl font-bold gold-foil-text block mb-1">III</span>
            <h4 className="font-serifHeading text-xs uppercase tracking-wider text-obsidian-900 font-bold">traing with who </h4>
            <p className="font-bodyRoman text-sm text-obsidian-800/70 mt-1">icaree and eraasoft and job day with eraasoft acting like working in realy compney </p>
          </div>
        </div>
      </div>
    </section>
  );
}
