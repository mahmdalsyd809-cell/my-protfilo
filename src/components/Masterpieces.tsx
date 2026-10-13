import imge from "../assets/image/Gemini_Generated_Image_h9i6och9i6och9i6.jfif" ;
export default function Masterpieces() {
  return (
    <section className="py-28 bg-marble-100/50 border-t border-gold-300/40 relative" id="masterpieces">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 stagger-init from-bottom opacity-0 invisible">
          <div>
            <span className="font-serifHeading text-xs uppercase tracking-[0.4em] text-gold-600 font-semibold block mb-3">Chapter II : skills</span>
            <h2 className="font-serifHeading text-3xl sm:text-5xl font-bold text-obsidian-950 uppercase tracking-tight">My skills &amp; To be real developer</h2>
          </div>
          <p className="font-bodyRoman text-lg text-obsidian-800/70 max-w-md mt-4 md:mt-0">
            A curatorial anthology of bespoke commissions, decentralized protocols, and private vaults.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          <div className="lg:col-span-5 rounded-3xl bg-white border border-gold-400/50 p-6 flex flex-col justify-between shadow-monument stagger-init from-left opacity-0 invisible" data-stagger-delay="100">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6 border border-gold-300">
              <img alt="Classical Roman temple" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500" src={imge} />
              <span className="absolute top-4 left-4 bg-obsidian-950/80 backdrop-blur-md text-gold-300 text-[10px] font-sansMeta font-semibold px-3 py-1 rounded-full uppercase tracking-widest border border-gold-500/30">
                The skill what i earend 
              </span>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2 text-gold-600 text-xs font-serifHeading tracking-widest uppercase">
                <span>Collection • MMXXIV</span>
                <span>—</span>
                <span>Imperial Archive</span>
              </div>
              <h3 className="font-serifHeading text-2xl font-bold text-obsidian-950 mb-3">that section is about what i learned and skiil i earend </h3>
              <p className="font-bodyRoman text-base text-obsidian-800/80 leading-relaxed mb-6">
             from begining to end about what i know about web 
              </p>
            </div>
          </div>
          {/* loop part */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'The basics', sub: 'HTml', desc: 'its like a skelton or furniture of any website  and without it you canot make a website  ', icon: '🏛️' },
              { title: 'The artistry', sub: 'Css', desc: 'its like the drawing and skin for website and making web colored and its like u are an artist carves into rock to create a beautiful masterpieace ', icon: '🏺' },
              { title: 'the logic', sub: 'javascript', desc: 'its like a magic and give alive to website its everything in a front end   ', icon: '📜' },
              { title: 'The wisdom & knowlege', sub: 'react & git  ', desc: 'this is what i learned to make website and it make it eazy to me to  ', icon: '⚜️' }
            ].map((item, idx) => (
              <div key={idx} className="rounded-3xl bg-white border border-gold-300/70 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-gold-500 transition-all group stagger-init from-bottom opacity-0 invisible" data-stagger-delay={150 + (idx * 50)}>
                <div>
                  <div className="h-36 rounded-xl bg-gradient-to-br from-gold-100 to-marble-200 border border-gold-200 flex items-center justify-center mb-6 overflow-hidden relative">
                    <span className="font-decorative text-4xl text-gold-600/40 group-hover:scale-125 transition-transform duration-500">{item.icon}</span>
                    <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="font-serifHeading text-[10px] tracking-[0.2em] text-gold-600 font-bold uppercase block mb-1">{item.sub}</span>
                  <h4 className="font-serifHeading text-lg font-bold text-obsidian-950 mb-2">{item.title}</h4>
                  <p className="font-bodyRoman text-sm text-obsidian-800/75 leading-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
            {/* end loop part */}
          </div>
        </div>
      </div>
    </section>
  );
}
