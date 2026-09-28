import Image from "next/image";
import Link from "next/link";

const paths = [
  { title: "Design", asset: "design.png", slug: "design" },
  { title: "Development", asset: "development.png", slug: "development" },
  { title: "IT & Software", asset: "it.png", slug: "it-software" },
  { title: "Business", asset: "business.png", slug: "business" },
  { title: "Marketing", asset: "marketing.png", slug: "marketing" },
  { title: "Photography", asset: "photography.png", slug: "photography" },
];

export default function LearningPaths() {
  return (
    <section aria-labelledby="learning-paths-title" className="bg-white px-5 pb-20 pt-14 font-sans text-[#080b20] sm:pt-16">
      <div className="mx-auto text-center">
        <h2 className="font-(family-name:--font-poppins) text-center" id="learning-paths-title">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mx-auto mt-3 max-w-162.5 text-[11px] leading-[1.6] text-[#92959e] sm:text-[12px]">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various<br className="hidden sm:block" /> fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
        </p>
        <div className="mx-auto mt-11 flex w-full flex-wrap justify-center gap-x-12! gap-y-4 lg:flex-nowrap lg:-space-x-4">
          {paths.map((path) => (
            <Link
              className="group flex h-41.75 w-41.75 flex-col items-center justify-center gap-2 rounded-3xl border border-[#dfe1e5] bg-white px-3 py-4 transition-all hover:-translate-y-1 hover:border-[#baff00] hover:shadow-[0_10px_25px_rgba(18,31,64,0.08)]"
              href={`/courses?category=${path.slug}`}
              key={path.slug}
            >
              <span className="flex h-15 w-24 items-center justify-center rounded-[40px] p-3 transition-transform group-hover:scale-105">
                <Image src={`/assets/${path.asset}`} alt="" width={16} height={16} className="h-12 w-12 object-contain" />
              </span>
              <span className="mt-3 text-[13px] leading-none text-[#20222a]">{path.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
