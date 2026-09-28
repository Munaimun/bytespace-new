import Image from "next/image";

const logos = [
  "first-slider.png",
  "second-slider.png",
  "third-slider.png",
  "fourth-slider.png",
  "fifth-slider.png",
];

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export default function CourseDiscovery() {
  return (
    <section aria-labelledby="course-discovery-title" className="bg-white font-sans text-[#080b20]">
      <div className="flex min-h-30 items-center justify-center bg-[#f5f5f6] px-5 py-7">
        <div className="grid w-full max-w-175 grid-cols-2 items-center justify-items-center gap-x-10! gap-y-8! sm:grid-cols-5">
          {logos.map((logo, index) => (
            <div className={`${index === logos.length - 1 ? "col-span-2 sm:col-span-1" : ""} flex items-center gap-1.5 text-[#858891]`} key={logo}>
              <Image src={`/assets/${logo}`} alt="Logopsum" width={40} height={40} className="h-7 w-7 object-contain sm:h-8 sm:w-8" />
              <span className="text-[13px] font-semibold tracking-[-0.4px]">Logoipsum</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-190 flex-col items-center px-5 pb-10 pt-11 text-center sm:pt-12">
        <h2 id="course-discovery-title" className="text-[27px] font-bold leading-[1.14] tracking-[-1px] sm:text-[28px]">
          Discover Your Passion,<br />
          Build Your Skills
        </h2>
        <p className="mt-3  text-[11px] leading-[1.55] text-[#9698a0] sm:text-[12px]">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different<br className="hidden sm:block" /> fields, from technology to the arts, and make a difference in your career and life.
        </p>
        <div className="mt-6 flex  flex-wrap justify-center gap-2.5" aria-label="Course categories">
          {categories.map((category, index) => (
            <button
              className={`rounded-full px-3 py-1.5 text-[10px] leading-none transition-colors ${index === 0 ? "bg-[#baff00] text-[#304500]" : "bg-[#f5f5f6] text-[#555861] hover:bg-[#e9eaec]"}`}
              key={category}
              type="button"
            >
              {category}
            </button>
          ))}
          <button className="px-1 py-1.5 text-[10px] text-[#1556e8]" type="button">+ More</button>
        </div>
      </div>
    </section>
  );
}
