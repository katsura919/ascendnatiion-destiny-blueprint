import { Magnet, ShieldAlert, Repeat } from "lucide-react";

export function MechanismSection() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden z-10">
      
      <div className="max-w-5xl mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        
        {/* Section Badge */}
        <div className="relative inline-block mb-10 px-5 py-2.5 border-2 border-background text-primary-foreground font-bold tracking-widest text-sm bg-transparent uppercase">
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-background border-2 border-card z-10"></div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-background border-2 border-card z-10"></div>
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-background border-2 border-card z-10"></div>
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-background border-2 border-card z-10"></div>
          There’s a Blueprint Behind Your Life
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-sans font-black leading-tight mb-8">
          Your life <span className="italic opacity-90 underline decoration-secondary">isn’t random.</span>
        </h2>

        {/* The Shift Statement */}
        <div className="bg-background text-foreground px-8 py-8 md:px-12 md:py-10 rounded-3xl shadow-2xl skew-y-1 transform transition-transform hover:skew-y-0 duration-500 max-w-4xl mx-auto mb-16 border-b-8 border-secondary">
          <p className="text-2xl md:text-3xl font-sans font-bold tracking-tight">
             There’s a <span className="text-secondary relative whitespace-nowrap">
              hidden energetic structure
              <svg className="absolute w-full h-3 md:h-4 -bottom-1 left-0 text-secondary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span> influencing:
          </p>
        </div>

        {/* List of influences */}
        <div className="w-full flex flex-col items-center mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-4xl justify-center">
            
            <div className="group flex flex-col items-center p-8 border border-primary-foreground/10 rounded-3xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-background/20">
              <div className="w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <Magnet className="w-8 h-8" />
              </div>
              <span className="text-xl md:text-2xl font-bold font-sans tracking-wide capitalize text-center">What you attract</span>
            </div>

            <div className="group flex flex-col items-center p-8 border border-primary-foreground/10 rounded-3xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-background/20">
              <div className="w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500 delay-75">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <span className="text-xl md:text-2xl font-bold font-sans tracking-wide capitalize text-center">What you tolerate</span>
            </div>

            <div className="group flex flex-col items-center p-8 border border-primary-foreground/10 rounded-3xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-background/20">
              <div className="w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500 delay-150">
                <Repeat className="w-8 h-8" />
              </div>
              <span className="text-xl md:text-2xl font-bold font-sans tracking-wide capitalize text-center">What keeps repeating</span>
            </div>

          </div>
        </div>

        {/* The resulting state */}
        <div className="text-center max-w-4xl">
          <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-10 opacity-90 italic">
            And until you understand it…
          </p>
          <div className="bg-secondary text-secondary-foreground px-6 py-6 md:px-10 md:py-8 inline-block transform -rotate-1 rounded-2xl shadow-2xl border-2 border-primary-foreground/20">
            <p className="text-2xl md:text-4xl font-extrabold font-heading tracking-tighter">
              You’ll keep trying to <span className="underline decoration-primary-foreground/40">fix the surface</span>—while the root stays the same.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
