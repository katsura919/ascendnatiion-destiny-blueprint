import { Sparkles } from "lucide-react";

export function SolutionIntroSection() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-secondary text-secondary-foreground overflow-hidden z-10">
      
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-[-10%] w-[50%] h-[100%] bg-background/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[80%] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        
        {/* Sparkle Icon */}
        <div className="mb-8 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-2xl mt-4">
          <Sparkles className="w-8 h-8" />
        </div>

        {/* Lead in */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans mb-8 tracking-tighter uppercase italic">
          This is not a generic reading.
        </h2>

        {/* The Decoding Line */}
        <div className="max-w-3xl mb-12">
          <p className="text-xl md:text-2xl font-medium leading-relaxed opacity-90">
            Using your <span className="text-primary font-bold">full birth name and date of birth</span>, we decode your unique energetic blueprint to reveal:
          </p>
        </div>

        {/* Feature list / Revelations */}
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-6 mb-16 px-4">
          {[
            { text: "Where your power naturally exists", delay: 0 },
            { text: "Where you’ve been leaking energy", delay: 100 },
            { text: "What’s blocking your next level", delay: 200 }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="group flex items-center justify-between p-6 md:p-8 bg-background/5 border-2 border-primary/10 rounded-3xl hover:bg-background/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-lg">
                  {idx + 1}
                </div>
                <span className="text-xl md:text-2xl font-bold font-sans text-left">{item.text}</span>
              </div>
              <Sparkles className="hidden md:block w-6 h-6 text-primary/30 group-hover:text-primary transition-colors" />
            </div>
          ))}
        </div>  

      </div>
    </section>
  );
}
