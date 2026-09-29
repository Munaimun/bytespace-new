import Image from "next/image";

const checklist = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];

function MetricCard({ label, value, className }: { label: string; value: string; className: string }) {
  return (
    <div className={`absolute rounded-[5px] bg-[#073bd5] p-2 font-sans text-white shadow-[0_8px_20px_rgba(7,59,213,0.16)] ${className}`}>
      <span className="block text-[5px] leading-none opacity-80">{label}</span>
      <strong className="mt-1 block text-[10px] leading-none">{value}</strong>
      <i className="mt-1 block h-1 w-9 rounded-full bg-[#baff00]" />
    </div>
  );
}

export default function LearningShowcase() {
  return (
    <section aria-labelledby="showcase-title" className="overflow-hidden bg-linear-to-br from-[#fbfff1] via-white to-[#e9f0ff] px-5 py-16 font-sans text-[#111421] sm:px-10 sm:py-20 lg:px-20">
      <h2 className="sr-only" id="showcase-title">Learn and create with Bytespace</h2>
      <div className="mx-auto grid max-w-232.5 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="order-1">
          <div className="max-w-85">
            <h3 className="text-[27px] font-bold leading-[1.05] tracking-[-1px] sm:text-[30px]">Your Path to Professional<br />Growth Starts Here!</h3>
            <p className="mt-5 text-[10px] leading-[1.55] text-[#7d818b]">Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the right course for you.</p>
            <div className="mt-5 flex gap-8">
              <div><strong className="block text-[14px] text-[#1556e8]">12K</strong><span className="text-[7px] text-[#7d818b]">Students</span></div>
              <div><strong className="block text-[14px] text-[#1556e8]">70+</strong><span className="text-[7px] text-[#7d818b]">Courses</span></div>
              <div><strong className="block text-[14px] text-[#1556e8]">16</strong><span className="text-[7px] text-[#7d818b]">Creators</span></div>
            </div>
          </div>
        </div>
        <div className="order-2 relative mx-auto h-71.25 w-full max-w-107.5">
          <div className="absolute right-4 top-4 h-52 w-52 rounded-full bg-[#f4ffd7] blur-2xl" />
          <div className="absolute right-8 top-2 z-10 h-20 w-28 overflow-hidden rounded-[9px] border border-[#dfe1e5] bg-white p-1"><div className="relative h-full w-full overflow-hidden rounded-[5px]"><Image src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=500&q=80" alt="Course preview" fill className="object-cover" unoptimized /></div></div>
          <Image className="absolute bottom-0 left-[31%] z-20 h-62.5 w-65 object-contain object-top" src="/assets/student.png" alt="Student learning online" width={480} height={383} />
          <Image className="absolute -right-0.5 top-16 z-30 h-28 w-28 object-contain" src="/assets/lime-squiggle.png" alt="" width={267} height={387} />
          <div className="absolute right-1 top-28 z-40 rounded-md bg-white px-3 py-2 shadow-[0_6px_18px_rgba(15,28,65,0.12)]"><span className="block text-[6px] text-[#777c86]">Learning Progress</span><strong className="block text-[19px] leading-none">55%</strong><i className="mt-1 block h-1 w-10 rounded-full bg-[#baff00]" /></div>
        </div>

        <div className="order-4 relative mx-auto h-75 w-full max-w-107.5 lg:order-3">
          <Image className="absolute bottom-0 left-[16%] z-20 h-66.25 w-70 object-contain object-top" src="/assets/student.png" alt="Creator using Bytespace" width={480} height={383} />
          <Image className="absolute bottom-10 left-4 z-30 h-24 w-24 -rotate-12 object-contain" src="/assets/lime-squiggle.png" alt="" width={267} height={387} />
          <MetricCard label="Total Revenue" value="$202.29" className="left-3 top-8" />
          <MetricCard label="Year to Date" value="$1,200.38" className="left-3 top-24" />
          <div className="absolute bottom-8 right-5 z-40 rounded-md bg-white px-3 py-2 shadow-[0_6px_18px_rgba(15,28,65,0.12)]"><span className="block text-[6px] text-[#777c86]">Happy Students</span><div className="mt-1 flex h-5 items-center"><i className="-ml-1 h-5 w-5 rounded-full bg-[#c88f6d]" /><i className="-ml-1 h-5 w-5 rounded-full bg-[#4b3a34]" /><i className="-ml-1 h-5 w-5 rounded-full bg-[#8d5e4a]" /><b className="-ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#baff00] text-[6px]">2K+</b></div></div>
        </div>
        <div className="order-3 lg:order-4 lg:pl-3">
          <h3 className="text-[27px] font-bold leading-[1.05] tracking-[-1px] sm:text-[30px]">Create &amp; Manage<br />Courses Easily.</h3>
          <p className="mt-5 max-w-87.5 text-[10px] leading-[1.55] text-[#7d818b]"><strong className="text-[#20242f]">Bytespace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.</p>
          <ul className="mt-5 space-y-2 text-[8px] text-[#20242f]">
            {checklist.map((item) => <li className="flex items-center gap-2" key={item}><span className="flex h-2 w-2 items-center justify-center rounded-full bg-[#1556e8] text-[5px] text-white">✓</span>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
