"use client";

import Image from "next/image";
import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const categories = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Cooking",
];

const courses = [
    {
        title: "Learn Figma from Basic",
        creator: "purepixel studio",
        price: "$25",
        category: "Featured",
        image:
            "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Build Digital Asset",
        creator: "purepixel studio",
        price: "$25",
        category: "Featured",
        image:
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "the Power of Big Data",
        creator: "purepixel studio",
        price: "$25",
        category: "Featured",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Balancing Productivity and Life",
        creator: "purepixel studio",
        price: "$25",
        category: "Featured",
        image:
            "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Mastering Money Management",
        creator: "purepixel studio",
        price: "$25",
        category: "Featured",
        image:
            "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "From Idea to Startup Success",
        creator: "purepixel studio",
        price: "$25",
        category: "Featured",
        image:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    },
];

export default function CoursesPage() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("Featured");
    const [sort, setSort] = useState("Most relevant");
    const [page, setPage] = useState(1);

    const visibleCourses = courses.filter(
        (course) =>
            (category === "Featured" || course.category === category) &&
            course.title.toLowerCase().includes(query.toLowerCase()),
    );

    return (
        <main className="bg-white font-sans text-[#111421]" id="top">
            <div className="bg-[#073bd5] bg-[linear-gradient(#ffffff1c_1px,transparent_1px),linear-gradient(90deg,#ffffff1c_1px,transparent_1px)] bg-size-[51px_51px] text-white">
                <SiteHeader />
                <div className="mx-auto max-w-232.5 px-6 sm:px-10 lg:px-16">
                    <div className="mx-auto max-w-150 py-9 text-center sm:py-10">
                        <h1 className="text-[22px] font-bold tracking-[-.7px] sm:text-[25px]">
                            Find Your Next Course
                        </h1>
                        <form
                            className="mx-auto mt-4 flex max-w-120 items-center justify-center gap-2"
                            onSubmit={(event) => event.preventDefault()}
                        >
                            <label className="flex h-9 w-full items-center rounded-full bg-white px-3 text-[#a0a4aa] shadow-sm">
                                <span className="mr-2 text-[15px] leading-none">⌕</span>
                                <span className="sr-only">Search courses</span>
                                <input
                                    className="w-full bg-transparent text-[12px] text-[#222] outline-none placeholder:text-[#9da2a9]"
                                    value={query}
                                    onChange={(event) => setQuery(event.target.value)}
                                    placeholder="Search"
                                />
                            </label>
                            <div className="relative flex items-center">
                                <select
                                    className="h-9 appearance-none rounded-full bg-[#baff00] pl-3 pr-7 text-[10px] font-medium text-[#243400] outline-none cursor-pointer"
                                    aria-label="Course type"
                                >
                                    <option>Courses</option>
                                    <option>Classes</option>
                                    <option>Paths</option>
                                </select>
                                {/* Custom dropdown arrow perfectly centered vertically */}
                                <svg
                                    className="pointer-events-none absolute right-2.5 h-2.5 w-2.5 fill-[#243400]"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <section className="mx-auto max-w-232.5 px-6 pb-10 pt-7 sm:px-10 lg:px-16">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex gap-2">
                        <button
                            className="flex h-8 items-center gap-1 rounded-full border border-[#e1e3e6] px-3 text-[12px]"
                            type="button"
                        >
                            <Image src="/assets/courseicon.png" alt="" width={15} height={15} />
                            Filter
                        </button>
                        <button
                            className="flex h-8 items-center gap-1 rounded-full border border-[#e1e3e6] px-3 text-[12px]"
                            type="button"
                        >
                            <Image src="/assets/levelicon.png" alt="" width={15} height={15} />
                            Level
                        </button>
                        <button
                            className="flex h-8 items-center gap-1 rounded-full border border-[#e1e3e6] px-3 text-[12px]"
                            type="button"
                        >
                            <Image src="/assets/categoryicon.png" alt="" width={15} height={15} />
                            Category
                        </button>
                    </div>
                    <label className="flex h-9 items-center gap-1 rounded-full border border-[#e1e3e6] px-3 text-[10px] text-[#555a62]">
                        ☷ <span className="sr-only">Sort courses</span>
                        <select
                            className="bg-transparent appearance-none outline-none"
                            value={sort}
                            onChange={(event) => setSort(event.target.value)}
                        >
                            <option>Most relevant</option>
                            <option>Newest</option>
                            <option>Price: low to high</option>
                        </select>
                    </label>
                </div>
                <div
                    className="mt-5 flex flex-wrap gap-2"
                    aria-label="Course categories"
                >
                    {categories.map((item) => (
                        <button
                            className={`rounded-full px-2 py-1.5 text-[12px] transition-colors ${category === item ? "bg-[#baff00] text-[#304500]" : "bg-[#f5f5f6] text-[#555861] hover:bg-[#e9eaec]"}`}
                            key={item}
                            type="button"
                            onClick={() => {
                                setCategory(item);
                                setPage(1);
                            }}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {visibleCourses.map((course) => (
                        <CourseCard key={course.title} {...course} />
                    ))}
                </div>
                {visibleCourses.length === 0 && (
                    <p className="py-20 text-center text-[11px] text-[#777c86]">
                        No courses found.
                    </p>
                )}
                <nav
                    className="mt-10 flex items-center justify-center gap-5 text-[9px]"
                    aria-label="Course pages"
                >
                    <button
                        className="flex h-6 w-6 items-center justify-center rounded-full border border-[#e1e3e6] text-[14px]"
                        type="button"
                        onClick={() => setPage(Math.max(1, page - 1))}
                        aria-label="Previous page"
                    >
                        ‹
                    </button>
                    {[1, 2, 3, 4, 5].map((item) => (
                        <button
                            className={
                                page === item ? "font-bold text-[#1556e8]" : "text-[#454a52]"
                            }
                            key={item}
                            type="button"
                            onClick={() => setPage(item)}
                        >
                            {item}
                        </button>
                    ))}
                    <button
                        className="flex h-6 w-6 items-center justify-center rounded-full border border-[#e1e3e6] text-[14px]"
                        type="button"
                        onClick={() => setPage(Math.min(5, page + 1))}
                        aria-label="Next page"
                    >
                        ›
                    </button>
                </nav>
            </section>
            <SiteFooter />
        </main>
    );
}
