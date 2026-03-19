import { Coins, Heart, Leaf } from "lucide-react";

export function OfferIntroSection() {
  return (
    <section id="revelations" className="relative w-full py-24 md:py-32 bg-background overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-20">
        
        {/* Section Badge */}
        <div className="relative inline-block mb-10 px-5 py-2.5 border-2 border-primary text-primary-foreground font-bold tracking-widest text-sm bg-background/50 uppercase">
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-secondary border-2 border-primary z-10"></div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-secondary border-2 border-primary z-10"></div>
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-secondary border-2 border-primary z-10"></div>
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-secondary border-2 border-primary z-10"></div>
          The Transformation
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground font-heading leading-tight mb-16 tracking-tight">
          What Your <br/><span className="text-secondary italic underline decoration-primary underline-offset-8">Blueprint Reveals</span>
        </h2>

        {/* Revelations List */}
        <div className="flex flex-col gap-10 w-full max-w-5xl justify-center text-left">
          
          {/* Money & Career */}
          <div className="group relative bg-white/50 backdrop-blur-sm border-2 border-foreground/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-8 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
            <div className="w-20 h-20 shrink-0 bg-secondary rounded-2xl rotate-3 flex items-center justify-center text-secondary-foreground font-bold shadow-xl group-hover:rotate-0 transition-transform duration-500">
              <Coins className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-sans text-foreground mb-3">Money & Career Alignment</h3>
              <p className="text-xl md:text-2xl font-medium text-foreground/70 leading-relaxed">
                Understand your natural strengths for earning and attracting abundance—and the hidden blocks slowing you down.
              </p>
            </div>
          </div>

          {/* Love & Relationships */}
          <div className="group relative bg-white/50 backdrop-blur-sm border-2 border-foreground/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-8 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
            <div className="w-20 h-20 shrink-0 bg-secondary rounded-2xl -rotate-3 flex items-center justify-center text-secondary-foreground font-bold shadow-xl group-hover:rotate-0 transition-transform duration-500">
              <Heart className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-sans text-foreground mb-3">Love & Relationships</h3>
              <p className="text-xl md:text-2xl font-medium text-foreground/70 leading-relaxed">
                See the energy you bring into relationships and how to attract emotionally safe, aligned love.
              </p>
            </div>
          </div>

          {/* Health & Vitality */}
          <div className="group relative bg-white/50 backdrop-blur-sm border-2 border-foreground/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-8 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
            <div className="w-20 h-20 shrink-0 bg-secondary rounded-2xl rotate-6 flex items-center justify-center text-secondary-foreground font-bold shadow-xl group-hover:rotate-0 transition-transform duration-500">
              <Leaf className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-sans text-foreground mb-3">Health & Vitality</h3>
              <p className="text-xl md:text-2xl font-medium text-foreground/70 leading-relaxed">
                Identify emotional patterns stored in your body and learn how to restore balance and energy.
              </p>
            </div>
          </div>

        </div>     </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/5 rounded-full blur-[100px]"></div>
      </div>
    </section>
  );
}
