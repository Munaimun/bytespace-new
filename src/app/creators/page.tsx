"use client";

import Image from "next/image";
import CourseCard from "@/components/CourseCard";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const creatorCourses = [
    { title: "Learn Figma from Basic", creator: "purepixel studio", price: "$25", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80" },
    { title: "Build Digital Asset", creator: "purepixel studio", price: "$25", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80" },
    { title: "the Power of Big Data", creator: "purepixel studio", price: "$25", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80" },
    { title: "Balancing Productivity and Life", creator: "purepixel studio", price: "$25", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80" },
    { title: "Mastering Money Management", creator: "purepixel studio", price: "$25", image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900&q=80" },
    { title: "From Idea to Startup Success", creator: "purepixel studio", price: "$25", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80" },
];

export default function CreatorsPage() {
    return (
        <main className="bg-white font-sans text-[#111421]" id="top">
            <div className="bg-[#073bd5] bg-[linear-gradient(#ffffff1c_1px,transparent_1px),linear-gradient(90deg,#ffffff1c_1px,transparent_1px)] bg-size-[58px_58px] text-white">
                <SiteHeader />
                <section className="mx-auto max-w-232.5 px-6 pb-10 pt-7 sm:px-10 lg:px-16" aria-labelledby="creator-title">
                    <div className="flex flex-wrap items-center gap-3">
                        <Image className="h-12 w-12 rounded-[11px] object-cover" src="/assets/first-slider.png" alt="PurePearl Studio" width={48} height={48} />
                        <div><div className="flex items-center gap-3"><h1 className="text-[18px] font-bold leading-none" id="creator-title">PurePearl Studio</h1><span className="rounded-full bg-[#baff00] px-3 py-1 text-[7px] text-[#304500]">Creator</span></div><p className="mt-2 text-[7px] text-white/85">Passionate UI/UX Web designer</p></div>
                    </div>
                    <p className="mt-5 max-w-180 text-[8px] leading-[1.7] text-white/90">Welcome to the creative world of Creator&apos;s Name! Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!<br />Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.</p>
                    <div className="mt-5 flex items-center justify-between gap-4"><div className="flex gap-2 text-[8px]"><span className="rounded-full bg-white px-3 py-1.5 text-[#1556e8]">3 <span className="text-[#333]">Products</span></span><span className="rounded-full bg-white px-3 py-1.5 text-[#1556e8]">12 <span className="text-[#333]">Followers</span></span></div><button className="rounded-full bg-[#baff00] px-4 py-2 text-[8px] text-[#304500] transition-transform hover:-translate-y-0.5" type="button">Follow</button></div>
                </section>
            </div>

            <section className="mx-auto max-w-232.5 px-6 pb-12 pt-7 sm:px-10 lg:px-16">
                <div className="flex flex-wrap items-center justify-between gap-4"><div className="flex gap-2"><button className="rounded-full border border-[#e1e3e6] px-3 py-1.5 text-[8px]" type="button">▽ Filter</button><button className="rounded-full border border-[#e1e3e6] px-3 py-1.5 text-[8px]" type="button">☷ Level</button><button className="rounded-full border border-[#e1e3e6] px-3 py-1.5 text-[8px]" type="button">⌾ Category</button></div><button className="rounded-full border border-[#e1e3e6] px-3 py-1.5 text-[8px]" type="button">☷ Most relevant</button></div>
                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">{creatorCourses.map((course) => <CourseCard key={course.title} {...course} />)}</div>
            </section>
            <SiteFooter />
        </main>
    );
}