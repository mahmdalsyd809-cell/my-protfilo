export default function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-obsidian-950 text-white relative overflow-hidden border-t-2 border-gold-500" id="contact">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-gold-500/10 blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="border-t border-gold-500/20 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-marble-300/60 font-sansMeta space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <span className="font-serifHeading text-gold-500 font-bold text-sm">𝚲</span>
            <span className="tracking-widest uppercase">© create by (mohamed ahmed alsyed ) a realy front end developer hope u like my protfilo (this is my first protfilo )</span>
          </div>
          <div className="flex space-x-6 font-serifHeading text-[10px] tracking-widest uppercase text-gold-400">
            <a className="hover:text-white transition-colors" href="#">Delphi</a>
            <a className="hover:text-white transition-colors" href="#">Athens</a>
            <a className="hover:text-white transition-colors" href="#">Alexandria</a>
            <a className="hover:text-white transition-colors" href="#">Rome</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
