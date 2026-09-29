import Image from "next/image";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: "/assets/first-slider.png",
    quote: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: "/assets/second-slider.png",
    quote: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: "/assets/third-slider.png",
    quote: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function CommunityTestimonials() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_43%_14%,#ddff69_0%,#f7f9ef_28%,transparent_51%),radial-gradient(circle_at_4%_92%,#cbd8ff_0%,#f6f7fb_37%,#fdfdfb_72%)] px-6 py-14 font-sans text-[#111421] sm:px-10 sm:py-16 lg:px-16 lg:py-17" aria-labelledby="community-title">
      <div className="relative mx-auto max-w-232.5">
        <div className="grid items-start gap-8 md:grid-cols-[1fr_1.18fr] md:gap-16 lg:gap-24">
          <h2 className="max-w-80 text-[26px] font-bold leading-[1.05] tracking-[-1px] sm:text-[30px]" id="community-title">Discover What Our<br />Community Is Saying</h2>
          <p className="max-w-95 text-[10px] leading-[1.55] text-[#646a73]">At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.</p>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-3 md:gap-6 lg:mt-10">
          {testimonials.map((testimonial) => (
            <article className="min-h-56 rounded-[13px] bg-white px-3.5 py-3.5 shadow-[0_12px_35px_rgba(68,80,115,0.05)]" key={testimonial.name}>
              <div className="flex items-center gap-3">
                <Image className="h-10 w-10 rounded-full object-cover" src={testimonial.image} alt={`${testimonial.name} profile`} width={40} height={40} />
                <div>
                  <h3 className="text-[10px] font-bold leading-none">{testimonial.name}</h3>
                  <p className="mt-1 text-[8px] leading-none text-[#1556e8]">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-6 text-[9px] leading-[1.55] text-[#676c74]">&quot;{testimonial.quote}&quot;</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}