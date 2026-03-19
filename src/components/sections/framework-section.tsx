import { FileText, Zap, RefreshCw, Sparkle, PhoneCall, UserCheck, LayoutDashboard } from "lucide-react";

export function FrameworkSection() {
  return (
    <section id="reading" className="relative w-full py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden z-10">
      
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary-foreground/5 to-transparent pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-20">
        
        <div className="flex flex-col items-center text-center mb-16">
          {/* Section Badge */}
          <div className="relative inline-block mb-10 px-5 py-2.5 border-2 border-background text-primary-foreground font-bold tracking-widest text-sm bg-transparent uppercase">
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-background border-2 border-primary z-10"></div>
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-background border-2 border-primary z-10"></div>
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-background border-2 border-primary z-10"></div>
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-background border-2 border-primary z-10"></div>
            The Deliverables
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black font-heading leading-tight tracking-tight mb-4">
            When you get your <br className="hidden md:block"/><span className="text-secondary italic">Destiny Blueprint Reading</span>
          </h2>
          <p className="text-2xl md:text-3xl font-medium opacity-90">you receive:</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Main Deliverables List */}
          <div className="flex flex-col gap-6">
            {[
              { icon: FileText, title: "A detailed personalized report of your energetic strengths & challenges" },
              { icon: Zap, title: "Clear strategies to realign your energy for abundance" },
              { icon: RefreshCw, title: "Guidance to break repeating cycles" },
              { icon: Sparkle, title: "Practical tools to manifest with ease" }
            ].map((item, idx) => (
              <div key={idx} className="group flex items-start gap-6 p-6 border border-primary-foreground/10 rounded-2xl bg-background/5 hover:bg-background/10 transition-all duration-300">
                <div className="w-12 h-12 shrink-0 bg-secondary rounded-xl flex items-center justify-center text-secondary-foreground shadow-lg group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <p className="text-xl md:text-2xl font-bold font-sans leading-snug">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {/* Bonus Experience Card */}
          <div className="relative p-1 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-primary rounded-[2.5rem] blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-background text-foreground rounded-[2rem] p-8 md:p-12 shadow-2xl border-4 border-secondary/20">
              
              <div className="inline-block px-4 py-2 bg-secondary text-secondary-foreground font-black text-sm tracking-widest rounded-full mb-8 uppercase">
                + BONUS EXPERIENCE
              </div>

              <h3 className="text-3xl md:text-4xl font-black font-heading mb-6 tracking-tight">
                Within 24 hours, you’ll <span className="text-primary italic">get access to:</span>
              </h3>

              <div className="space-y-8">
                {[
                  { icon: PhoneCall, text: "A private 1:1 call where we walk you through your blueprint" },
                  { icon: UserCheck, text: "Personalized guidance + answers to your questions" },
                  { icon: LayoutDashboard, text: "Support to actually apply what you learn" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <div className="w-10 h-10 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary mt-1">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <p className="text-xl md:text-2xl font-bold font-sans">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
