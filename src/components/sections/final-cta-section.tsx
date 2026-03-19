import Link from "next/link";
import { ArrowRight, Calendar, Clock, ChevronDown } from "lucide-react";
import { SparklesText } from "../ui/sparkles-text";

export function FinalCtaSection() {
  const faqs = [
    {
      question: "What exactly is a Destiny Blueprint Reading?",
      answer: "It is a deep-dive energetic analysis using your birth name and date of birth to decode your unique frequency map. You receive a personalized report covering money, love, and health, followed by a 1:1 integration call.",
    },
    {
      question: "How long does it take to get my results?",
      answer: "Once you secure your reading, our team begins the decoding process immediately. You will receive your personalized report via email within 24 hours, along with a link to schedule your 1:1 breakthrough call.",
    },
    {
      question: "Is the 1:1 call a sales pitch?",
      answer: "No. The call is a dedicated 30-minute session designed to walk you through your blueprint, answer your specific questions, and provide practical strategies for immediate alignment.",
    },
    {
      question: "I’ve tried numerology and astrology before. How is this different?",
      answer: "While we use foundational elements like birth data, the Destiny Blueprint focuses specifically on identifying 'energetic leaks' and 'power centers' the practical points where you are currently losing or gaining momentum in your daily life.",
    },
    {
      question: "What information do I need to provide?",
      answer: "All we need is your full birth name and your date of birth. This information allows us to tap into the specific energetic structure you were born with.",
    },
    {
      question: "Can I ask about specific areas like a career change or a relationship issue?",
      answer: "Absolutely. During your 1:1 session, we can focus on whichever area of your blueprint you feel needs the most immediate attention or alignment.",
    },
    {
      question: "What if I don't resonate with the reading?",
      answer: "Our goal is clarity and empowerment. Most clients find the accuracy of the blueprint to be a 'mirror' for things they've felt but couldn't quite name. If you have questions, the 1:1 call is the perfect place to explore them deepy.",
    },
    {
      question: "How do I know if I'm ready for this?",
      answer: "If you keep hitting the same plateaus or repeating the same cycles despite doing 'the work,' your energetic foundation is likely out of alignment. This reading is for those ready to stop guessing and start commanding their reality.",
    }
  ];

  return (
    <section id="join" className="relative w-full py-24 md:py-32 bg-background overflow-hidden z-10">
      <div className="max-w-6xl mx-auto px-6 relative z-20 flex flex-col items-center">
        
        {/* Massive CTA Card */}
        <div className="w-full bg-primary text-primary-foreground rounded-[2.5rem] p-10 md:p-16 lg:p-24 shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
          
          {/* Decorative glows inside card */}
          <div className="absolute top-0 right-[-10%] w-[50%] h-[100%] bg-background/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[80%] bg-secondary/20 rounded-full blur-[100px] pointer-events-none"></div>

          {/* Section Badge */}
          <div className="relative inline-block mb-10 px-5 py-2.5 border-2 border-background text-primary-foreground font-bold tracking-widest text-sm bg-transparent uppercase">
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-background border-2 border-primary z-10"></div>
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-background border-2 border-primary z-10"></div>
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-background border-2 border-primary z-10"></div>
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-background border-2 border-primary z-10"></div>
            The Final Step
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black font-heading tracking-tight leading-tight mb-8">
            You already <span className="text-primary-foreground italic">feel it…</span>
          </h2>

          {/* Final Offer Box */}
          <div className="flex flex-col items-center gap-6 bg-background/10 border-2 border-background/20 px-10 py-10 rounded-[2rem] backdrop-blur-sm mb-12 w-full max-w-2xl shadow-xl relative group">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-6 py-1.5 rounded-full font-black text-sm tracking-widest uppercase shadow-lg">
              Final Offer
            </div>
            
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-4">
                <span className="text-2xl md:text-3xl line-through opacity-50 font-bold">$300</span>
                <SparklesText className="text-5xl md:text-7xl font-black text-primary-foreground">$149 Today</SparklesText>
              </div>
              <p className="mt-6 text-lg md:text-xl font-bold font-sans text-center">
                Includes your personalized report + <br className="hidden sm:block"/> private guided session
              </p>
            </div>
          </div>

          <Link href="/join" className="group relative inline-flex items-center justify-center px-12 py-8 font-black text-primary bg-white rounded-full shadow-2xl hover:bg-white transition-all duration-300 hover:scale-105 active:scale-95 text-xl md:text-3xl font-sans w-full sm:w-auto overflow-hidden">
            <div className="absolute inset-0 bg-secondary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative">Get Your Destiny Blueprint Reading Now</span>
            <ArrowRight className="ml-4 w-8 h-8 group-hover:translate-x-2 transition-transform relative" strokeWidth={3} />
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="w-full max-w-4xl mt-24 md:mt-32">
          <h3 className="text-4xl md:text-5xl font-black font-heading text-center text-foreground mb-16">
            Commonly <span className="text-primary italic">Asked Questions</span>
          </h3>

          <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white/50 backdrop-blur-sm border-2 border-primary/5 rounded-3xl overflow-hidden hover:border-primary/20 transition-all hover:shadow-lg [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between p-7 md:p-8 cursor-pointer font-bold font-sans text-lg md:text-xl text-foreground select-none">
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-primary shrink-0 transition-transform duration-300 group-open:-rotate-180" strokeWidth={3} />
                </summary>
                <div className="px-8 pb-8 text-foreground/70 text-lg leading-relaxed pt-0">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
