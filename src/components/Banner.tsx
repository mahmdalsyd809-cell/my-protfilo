export default function Banner() {
  const skills = [
    "html", "css", "javascript", "react", "typescript", "git & github"
  ];
  
  // Repeat items to ensure it covers wide screens
  const repeatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className="w-full py-4 border-y border-gold-400/30 bg-marble-100/60 overflow-hidden relative">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 60s linear infinite;
          }
        `}
      </style>
      <div className="flex w-max animate-marquee text-gold-600 font-serifHeading text-xs uppercase tracking-[0.35em] whitespace-nowrap hover:[animation-play-state:paused]">
        <div className="flex items-center px-4">
          {repeatedSkills.map((item, idx) => (
            <span key={`part1-${idx}`} className="mx-6 sm:mx-10">• {item}</span>
          ))}
        </div>
        <div className="flex items-center px-4">
          {repeatedSkills.map((item, idx) => (
            <span key={`part2-${idx}`} className="mx-6 sm:mx-10">• {item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
