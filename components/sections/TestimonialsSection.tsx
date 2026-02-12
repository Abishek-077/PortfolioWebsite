import Image from "next/image";
import { Star } from "lucide-react";

import { Marquee } from "@/components/magicui/marquee";
import { testimonialBottom, testimonialTop, type Testimonial } from "@/data/testimonials";

function TestimonialCard({ jobTitle, rating, dueDate, body }: Testimonial) {
  return (
    <div className="relative h-fit max-w-sm cursor-pointer space-y-2.5 overflow-hidden rounded-xl border p-4">
      <h3 className="mb-2.5 text-sm font-medium text-green-600">{jobTitle}</h3>
      <div className="flex items-center gap-4">
        <div className="flex items-center text-xs">
          {Array.from({ length: rating }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-orange-400 text-orange-400" />
          ))}
          <span className="ml-2 font-medium">
            {rating}
            .00
          </span>
          <span className="ml-3 text-muted-foreground">{dueDate}</span>
        </div>
      </div>
      <p className="text-sm">&quot;{body}&quot;</p>
      <Image src="/upwork.png" width={50} height={50} alt="Upwork Company" />
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="container">
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl">Testimonials</h2>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover={false} className="[--duration:20s]">
          {testimonialTop.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.jobTitle}-${index}`} {...testimonial} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover={false} className="[--duration:20s]">
          {testimonialBottom.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.jobTitle}-${index}`} {...testimonial} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
      </div>
    </section>
  );
}

