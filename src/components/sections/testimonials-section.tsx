import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

type Testimonial = {
    name: string
    role: string
    image: string
    quote: string
}

const testimonials: Testimonial[] = [
    {
        name: 'Sarah Jenkins',
        role: 'Health & Wellness Coach',
        image: 'https://randomuser.me/api/portraits/women/1.jpg',
        quote: 'I hit a revenue plateau for nearly 2 years. After my reading, I realized I was leaking energy in my leadership. Within 30 days of realigning my blueprint, my income naturally shifted.',
    },
    {
        name: 'Michael Chen',
        role: 'Creative Professional',
        image: 'https://randomuser.me/api/portraits/men/6.jpg',
        quote: 'I kept attracting the same toxic patterns in love. My blueprint showed me exactly where the cycle started. I am now in a safe, aligned relationship for the first time ever.',
    },
    {
        name: 'Elena Rodriguez',
        role: 'Spiritual Mentor',
        image: 'https://randomuser.me/api/portraits/women/7.jpg',
        quote: 'I felt chronic burnout and a lack of vitality. The report identified emotional energy stored in my body that I never knew existed. Realigning my frequency has restored my balance.',
    },
    {
        name: 'David Thompson',
        role: 'Executive Director',
        image: 'https://randomuser.me/api/portraits/men/8.jpg',
        quote: 'I was lost and looking for my life purpose. This reading decoded my unique energetic blueprint and gave me clear, practical strategies to manifest abundance with ease.',
    },
    {
        name: 'Linda Wu',
        role: 'Entrepreneur',
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
        quote: "Understanding my natural strengths for earning changed everything. I stopped guessing and started aligning with my authentic power. The abundance followed naturally.",
    },
    {
        name: 'James O’Connor',
        role: 'Tech Consultant',
        image: 'https://randomuser.me/api/portraits/men/2.jpg',
        quote: 'The 1:1 call after my reading was the breakthrough I needed. It turned the information into a practical roadmap. I finally feel grounded and in control of my destiny.',
    },
    {
        name: 'Sophia Martin',
        role: 'Yoga Instructor',
        image: 'https://randomuser.me/api/portraits/women/5.jpg',
        quote: 'I never realized how much my past was blocking my current success. The tools to break repeating cycles actually work. My life feels lighter and more focused now.',
    },
    {
        name: 'Marcus Sterling',
        role: 'Business Mentor',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
        quote: 'I was a skeptic until I saw my business revenue stagnate for no logical reason. This reading helped me identify the exact mindset block that was stopping my next level.',
    },
    {
        name: 'Amara Okafor',
        role: 'Creative Artist',
        image: 'https://randomuser.me/api/portraits/women/8.jpg',
        quote: 'The Destiny Blueprint isn\'t just a report; it\'s a mirror. It helped me understand why I was attracting inconsistent clients and how to shift my frequency to align with high-value opportunities.',
    },
]

const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
    const result: Testimonial[][] = []
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize))
    }
    return result
}

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3))

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="relative w-full py-24 md:py-32 bg-background overflow-hidden z-10">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
                <div className="mx-auto max-w-4xl text-center mb-16 md:mb-24 flex flex-col items-center">
                    
                    {/* Section Badge */}
                    <div className="relative inline-block mb-10 px-5 py-2.5 border-2 border-primary text-primary font-bold tracking-widest text-sm bg-background uppercase">
                        <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-secondary border-2 border-primary z-10"></div>
                        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-secondary border-2 border-primary z-10"></div>
                        <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-secondary border-2 border-primary z-10"></div>
                        <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-secondary border-2 border-primary z-10"></div>
                        What Changes After Your Reading
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading mb-6 tracking-tight text-foreground leading-tight">
                        Loved by the Community
                    </h2>
                    <p className="text-xl md:text-2xl font-medium opacity-80 max-w-2xl mx-auto leading-relaxed">
                        Hear from people just like you who shifted their energy and finally started attracting the reality they wanted.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonialChunks.map((chunk, chunkIndex) => (
                        <div key={chunkIndex} className="space-y-6">
                            {chunk.map(({ name, role, quote, image }, index) => (
                                <Card key={index} className="border-2 border-primary/10 bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 rounded-3xl">
                                    <CardContent className="p-6 md:p-8 flex flex-col gap-6">
                                        <div className="flex text-secondary gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 fill-current" />
                                            ))}
                                        </div>

                                        <blockquote className="mt-2 flex-1">
                                            <p className="text-foreground/80 text-lg md:text-xl leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
                                        </blockquote>

                                        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-primary/10">
                                            <Avatar className="w-14 h-14 border-2 border-primary/20">
                                                <AvatarImage alt={name} src={image} loading="lazy" />
                                                <AvatarFallback className="bg-primary/10 text-primary font-bold">{name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <h3 className="font-bold text-foreground font-sans text-lg">{name}</h3>
                                                <span className="text-primary text-sm font-semibold tracking-wide">{role}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}