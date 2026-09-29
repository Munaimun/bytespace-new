import Image from "next/image";

const checklist = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

function MetricCard({
  label,
  value,
  detail,
  className,
}: {
  label: string;
  value: string;
  detail: string;
  className: string;
}) {
  return (
    <div className={`absolute w-24 rounded-[9px] bg-[#073bd5] p-2.5 font-sans text-white shadow-[0_8px_20px_rgba(7,59,213,0.16)] ${className}`}>
      <span className="block text-[6px] leading-none">{label}</span>
      <small className="mt-1 block text-[5px] text-white/70">{detail}</small>
      <strong className="mt-1 block text-[14px] leading-none">{value}</strong>
      <i className="mt-2 block h-1 w-12 rounded-full bg-[#baff00]" />
    </div>
  );
}

export default function LearningShowcase() {
  return (
    <section
      aria-labelledby="showcase-title"
      className="overflow-hidden bg-linear-to-br from-[#fbfff1] via-white to-[#e9f0ff] px-5 py-16 font-sans text-[#111421] sm:px-10 sm:py-20 lg:px-20"
    >
      <h2 className="sr-only" id="showcase-title">
        Learn and create with Bytespace
      </h2>
      <div className="mx-auto grid max-w-232.5 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="order-1">
          <div className="max-w-85">
            <h3 className="text-[27px] font-bold leading-[1.05] tracking-[-1px] sm:text-[30px]">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h3>
            <p className="mt-5 text-[10px] leading-[1.55] text-[#7d818b]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the right course for
              you.
            </p>
            <div className="mt-5 flex gap-8">
              <div>
                <strong className="block text-[14px] text-[#1556e8]">
                  12K
                </strong>
                <span className="text-[10px] text-[#7d818b]">Students</span>
              </div>
              <div>
                <strong className="block text-[14px] text-[#1556e8]">
                  70+
                </strong>
                <span className="text-[10px] text-[#7d818b]">Courses</span>
              </div>
              <div>
                <strong className="block text-[14px] text-[#1556e8]">16</strong>
                <span className="text-[10px] text-[#7d818b]">Creators</span>
              </div>
            </div>
          </div>
        </div>
        <div className="order-2 relative mx-auto h-71.25 w-full max-w-107.5">
          <div className="absolute left-0 top-8 z-10 w-70 overflow-hidden rounded-[10px] border border-[#dfe1e5] bg-white p-2 shadow-[0_10px_24px_rgba(18,31,64,0.08)]">
            <div className="relative h-28 overflow-hidden rounded-md bg-[#e9ebef]">
              <Image src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=500&q=80" alt="Course preview" fill className="object-cover" unoptimized />
            </div>
            <div className="pt-2 text-[#111421]">
              <div className="flex items-start justify-between gap-1"><strong className="truncate text-[10px]">Learn Figma from Basic</strong><span className="text-[8px] text-[#727780]">4.5 <b className="text-[#baff00]">★</b></span></div>
              <p className="mt-0.5 text-[6px] text-[#1556e8]">by purepixel studio</p>
              <div className="mt-2 flex items-center justify-between"><span className="rounded-full bg-[#f4f5f6] px-2 py-1 text-[6px] text-[#555861]">▥ Beginner</span><span className="text-[10px] font-bold text-[#1556e8]">$25<span className="text-[5px] font-normal text-[#777c86]">/lifetime</span></span></div>
            </div>
          </div>
          <Image
            className="absolute bottom-0 top-5 left-10 z-20 h-80! w-90! object-contain object-top"
            src="/assets/student.png"
            alt="Student learning online"
            width={480}
            height={383}
          />
          <Image
            className="absolute -right-0.5 top-16 z-30 h-28 w-28 object-contain"
            src="/assets/lime-squiggle.png"
            alt=""
            width={267}
            height={387}
          />
          <div className="absolute right-0 top-28 z-40 rounded-md bg-white px-3 py-2 shadow-[0_6px_18px_rgba(15,28,65,0.12)]">
            <span className="block text-[6px] text-[#777c86]">
              Learning Progress
            </span>
            <strong className="block text-[19px] leading-none">55%</strong>
            <i className="mt-1 block h-1 w-10 rounded-full bg-[#baff00]" />
          </div>
        </div>

        <div className="order-4 relative mx-auto h-75 w-full max-w-107.5 lg:order-3">
          <Image
            className="absolute bottom-0 left-[5%] z-20 h-90 w-90 object-contain object-top"
            src="/assets/lady.png"
            alt="Creator using Bytespace"
            width={480}
            height={383}
          />
          <Image
            className="absolute left-[54%] top-8 z-30 h-24 w-24 object-contain"
            src="/assets/lime-squiggle.png"
            alt=""
            width={267}
            height={387}
          />
          <MetricCard
            label="Total Revenue"
            value="$120.29"
            detail="July 28"
            className="left-3 top-2 w-50!"
          />
          <MetricCard
            label="Year to Date"
            value="$1,200.38"
            detail="2023"
            className="left-3 top-24"
          />
          <div className="absolute bottom-8 right-1 z-40 rounded-[9px] bg-white px-3 py-2 shadow-[0_6px_18px_rgba(15,28,65,0.12)]">
            <span className="block text-[6px] text-[#777c86]">
              Happy Students
            </span>
            <span className="block text-[5px] text-[#777c86]">45.2K <b className="text-[#baff00]">☺</b></span>
            <div className="mt-1 flex h-5 items-center">
              <i className="-ml-1 h-5 w-5 rounded-full border border-white bg-[#c88f6d]" />
              <i className="-ml-1 h-5 w-5 rounded-full border border-white bg-[#4b3a34]" />
              <i className="-ml-1 h-5 w-5 rounded-full border border-white bg-[#8d5e4a]" />
              <i className="-ml-1 h-5 w-5 rounded-full border border-white bg-[#c5a078]" />
              <b className="-ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#baff00] text-[6px]">2K+</b>
            </div>
          </div>
        </div>
        <div className="order-3 lg:order-4 lg:pl-3">
          <h3 className="text-[27px] font-bold leading-[1.05] tracking-[-1px] sm:text-[30px]">
            Create &amp; Manage
            <br />
            Courses Easily.
          </h3>
          <p className="mt-5 max-w-87.5 text-[10px] leading-[1.55] text-[#7d818b]">
            <strong className="text-[#20242f]">Bytespace</strong> supports
            individuals or entities in the creation, publication, and
            administration of educational courses.
          </p>
          <ul className="mt-5 space-y-2 text-[12px] text-[#20242f]">
            {checklist.map((item) => (
              <li className="flex items-center gap-2" key={item}>
                <span className="flex h-2 w-2 items-center justify-center rounded-full bg-[#1556e8] text-[5px] text-white">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
