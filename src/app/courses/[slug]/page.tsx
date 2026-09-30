"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const courseDetails: Record<
    string,
    { title: string; subtitle: string; image: string }
> = {
    "learn-figma-from-basic": {
        title: "Learn Figma from Basic",
        subtitle: "Unlock your creativity with design fundamentals",
        image:
            "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=80",
    },
    "build-digital-asset": {
        title: "Build Digital Asset",
        subtitle: "Create polished digital work from the ground up",
        image:
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
    },
    "the-power-of-big-data": {
        title: "Build Digital Asset: A Comprehensive Guide",
        subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    },
    "balancing-productivity-and-life": {
        title: "Balancing Productivity and Life",
        subtitle: "Build a practical rhythm for focused, sustainable work",
        image:
            "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1000&q=80",
    },
    "mastering-money-management": {
        title: "Mastering Money Management",
        subtitle: "Make confident decisions with your money",
        image:
            "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1000&q=80",
    },
    "from-idea-to-startup-success": {
        title: "From Idea to Startup Success",
        subtitle: "Turn a promising idea into a focused business",
        image:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80",
    },
};

const lessons = [
    "Introduction to Digital Assets",
    "Design Principles for Success",
    "Advanced Techniques in Digital Creation",
    "User-Centric Design Strategies",
    "Interactive Media and Engagement",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
];
const thumbnails = [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=240&q=80",
    "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=240&q=80",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=240&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=240&q=80",
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=240&q=80",
];

export default function CourseDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const course = courseDetails[slug] ?? courseDetails["the-power-of-big-data"];
    const [activeTab, setActiveTab] = useState("About");

    return (
        <main className="bg-white font-sans text-[#111421]" id="top">
            <div className="bg-[#073bd5] bg-[linear-gradient(#ffffff1c_1px,transparent_1px),linear-gradient(90deg,#ffffff1c_1px,transparent_1px)] bg-size-[51px_51px] text-white">
                <SiteHeader />
                <div className="px-6 sm:px-10 lg:px-16">
                    <div className="mx-auto max-w-232.5 pb-5 pt-8 sm:pt-9">
                        <div className="flex flex-wrap items-center justify-between gap-5">
                            <div>
                                <h1 className="text-[22px] font-bold leading-[1.1] sm:text-[28px]">
                                    {course.title}
                                </h1>
                                <p className="mt-1 text-[16px] text-white/90">
                                    {course.subtitle}
                                </p>
                                <p className="mt-2 text-[14px]">
                                    by <span className="text-lime-300">purepixel studio</span>
                                </p>
                            </div>
                            <button
                                className="rounded-full bg-[#baff00] px-4 py-2 text-[14px] text-[#263900]"
                                type="button"
                            >
                                ↗ Share
                            </button>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2 text-[16px]">
                            <span className="rounded-full bg-white px-3 py-1 text-black">
                                ▣ Intermediate
                            </span>
                            <span className="rounded-full bg-white px-3 py-1 text-black">
                                ★ 4.8 (172 reviews)
                            </span>
                            <span className="rounded-full bg-white px-3 py-1 text-black">
                                ♟ 79K Students
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <section className="mx-auto grid max-w-232.5 gap-7 px-6 py-7 sm:px-10 lg:grid-cols-[minmax(0,1fr)_230px] lg:px-16">
                <div className="">
                    <div className="relative aspect-[1.8/1] overflow-hidden rounded-[9px] bg-[#e8e8e8]">
                        <Image
                            className="object-cover"
                            src={course.image}
                            alt="Course preview"
                            fill
                            unoptimized
                        />
                        <button
                            className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[22px] shadow-sm"
                            type="button"
                            aria-label="Play course preview"
                        >
                            ▶
                        </button>
                    </div>

                    <div className="mt-7 flex gap-2 border-b border-[#e5e6e8] pb-3">
                        <TabButton
                            active={activeTab === "About"}
                            onClick={() => setActiveTab("About")}
                        >
                            About
                        </TabButton>
                        <TabButton
                            active={activeTab === "Lessons"}
                            onClick={() => setActiveTab("Lessons")}
                        >
                            Lessons
                        </TabButton>
                        <TabButton
                            active={activeTab === "Reviews"}
                            onClick={() => setActiveTab("Reviews")}
                        >
                            Reviews
                        </TabButton>
                    </div>
                    {activeTab === "About" && <AboutContent />}
                    {activeTab === "Lessons" && <LessonsContent />}
                    {activeTab === "Reviews" && <ReviewsContent />}
                </div>
                <CourseSidebar lessons={lessons} />
            </section>
            <SiteFooter />
        </main>
    );
}

function TabButton({
    active,
    children,
    onClick,
}: {
    active: boolean;
    children: string;
    onClick: () => void;
}) {
    return (
        <button
            className={`rounded-full px-3 py-1.5 text-[14px] ${active ? "bg-[#baff00] text-[#304500]" : "bg-[#f5f5f6] text-[#555a62]"}`}
            type="button"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

function AboutContent() {
    return (
        <div className="pt-5 text-[13px] leading-[1.55] text-[#686d75]">
            <p className="font-bold text-[40px] text-[#20242a]">Description</p>
            <p className="mt-3">
                Embark on an enlightening exploration of the world of digital creation
                with our comprehensive course, “Digital Asset: A Comprehensive Guide.”
                This transformative learning experience invites you to delve deep into
                the intricacies of crafting impactful digital content.
            </p>
            <p className="mt-3">
                In the initial modules, you&apos;ll establish a solid foundation by
                immersing yourself in the fundamental concepts that form the backbone of
                digital asset creation. Understand the fundamental elements that
                contribute to compelling digital content.
            </p>
            <p className="mt-3">
                As you progress through the course, you&apos;ll ascend to higher levels
                of expertise, delving into the nuances of design principles that drive
                impactful creations. Uncover the secrets behind effective visual
                communication.
            </p>
            <p className="mt-5 font-bold text-[40px] text-[#20242a]">Sneak Peek</p>
            <div className="mt-3 flex gap-2 overflow-hidden">
                {thumbnails.map((image) => (
                    <Image
                        className="h-16 w-22 shrink-0 rounded-md object-cover"
                        src={image}
                        alt="Course lesson preview"
                        width={88}
                        height={64}
                        key={image}
                        unoptimized
                    />
                ))}
            </div>
            <p className="mt-5 font-bold text-[40px] text-[#20242a]">Key Points</p>
            <ul className="mt-3 space-y-2">
                {[
                    "Foundational Concepts",
                    "Design Principles Mastery",
                    "Advanced Techniques in Digital Creation",
                    "Project Showcase and Critique",
                    "Optimizing for Various Platforms",
                    "Digital Asset Management Best Practices",
                    "Monetization Strategies",
                    "Capstone Project Building Your Portfolio",
                ].map((item) => (
                    <li className="flex items-center text-[12px]! gap-2" key={item}>
                        <span className="flex h-3 w-3 items-center justify-center rounded-full bg-[#1556e8] text-white">
                            ✓
                        </span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function LessonsContent() {
    return (
        <div className="pt-5 leading-[1.55] text-[#686d75]">
            <p className="font-bold text-[40px] text-[#20242a]">
                Explore the Modules
            </p>
            <p className="mt-3 text-[13px]">
                Immerse yourself in the course content as we break down each module into
                comprehensive lessons, providing practical insights and hands-on
                experiences.
            </p>
            <p className="mt-5 text-[40px] font-bold text-[#20242a]">Lesson List</p>
            <div className="mt-3 space-y-3">
                {lessons.map((lesson, index) => (
                    <div className="flex gap-3" key={lesson}>
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#baff00]">
                            <Image
                                className="w-9"
                                src="/assets/video.png"
                                alt="Lesson icon"
                                width={16}
                                height={16}
                            />
                        </span>
                        <p>
                            <strong className="font-semibold text-[#20242a]">
                                Module {index + 1}: {lesson}
                            </strong>
                            <br />
                            Master practical skills and techniques through engaging, guided
                            learning.
                        </p>
                    </div>
                ))}
            </div>

            <p className="mt-5 font-bold text-[40px] text-[#20242a]">
                Lesson Content
            </p>
            <p className="mt-3">
                Engage with each lesson through captivating video content, detailed
                textual explanations, and interactive elements.
            </p>
            <p className="mt-5 font-bold text-[40px] text-[#20242a]">
                Lesson Progress Tracking
            </p>
            <p className="mt-3">
                Witness your growth as you complete lessons, with an intuitive progress
                tracking feature guiding you through your learning journey.
            </p>
            <div className="mt-4 rounded-[7px] border border-[#dfe1e5] p-3">
                <span className="text-[14px] text-black">Learning Progress</span>
                <strong className="mt-1 block text-[16px] text-[#20242a]">55%</strong>
                <div className="mt-1 h-1 rounded-full bg-[#e5e6e8]">
                    <div className="h-1 w-[55%] rounded-full bg-[#baff00]" />
                </div>
            </div>
        </div>
    );
}

function ReviewsContent() {
    return (
        <div className="pt-5 leading-[1.55] text-[#686d75]">
            <p className="font-bold text-[40px] text-[#20242a]">
                What Learners Are Saying
            </p>
            <p className="mt-3 text-[18px]">
                Discover what our learners have to say about their experience with this
                course. Hear from people who have embraced the learning and
                transformation.
            </p>
            <div className="mt-4 grid grid-cols-[54px_1fr_55px] items-center gap-4 rounded-lg border border-[#dfe1e5] p-4">
                <div className="flex h-12 w-12 flex-col items-center justify-center rounded-[5px] bg-[#baff00] text-[#304500]">
                    <span className="text-[7px]">Ratings</span>
                    <strong className="text-[17px]">4.7</strong>
                </div>
                <div className="space-y-2">
                    {[90, 75, 60, 38, 18].map((width) => (
                        <div className="flex items-center gap-2" key={width}>
                            <div className="h-1 w-full rounded-full bg-[#e5e6e8]">
                                <div
                                    className="h-1 rounded-full bg-[#baff00]"
                                    style={{ width: `${width}%` }}
                                />
                            </div>
                            <span className="text-[#333943]">★★★★★</span>
                        </div>
                    ))}
                </div>
                <span>
                    720
                    <br />
                    120
                    <br />
                    21
                    <br />
                    12
                    <br />
                    16
                </span>
            </div>
            <p className="mt-5 font-bold text-[40px] text-[#20242a]">
                Individual Reviews:
            </p>
            <div className="mt-3 space-y-3">
                {["PurePearl Studio", "Albert Flores", "Cody Fisher"].map((name) => (
                    <article
                        className="rounded-[9px] border border-[#dfe1e5] p-4"
                        key={name}
                    >
                        <div className="flex gap-2">
                            <Image src="/assets/purple.png" alt="" width={35} height={35} />
                            <strong className="text-[#20242a]">{name}</strong>
                            <span>a year ago</span>
                        </div>
                        <div className="mt-2 text-[#333943]">★★★★★</div>
                        <p className="mt-3">
                            This course transformed my approach to digital design. The
                            combination of theory, hands-on exercises, and real-world
                            applications made it a truly enriching experience.
                        </p>
                    </article>
                ))}
            </div>
        </div>
    );
}

function CourseSidebar({ lessons }: { lessons: string[] }) {
    return (
        <aside className="h-fit w-87.5 rounded-[10px] border border-[#dfe1e5] p-4 text-[#464b54] lg:sticky lg:top-4">
            <strong className="text-[#20242a]">102 Lessons (24 hours)</strong>
            <ol className="mt-3 space-y-2">
                {lessons.slice(0, 3).map((lesson, index) => (
                    <li className="flex gap-2" key={lesson}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <span className="flex-1">{lesson}</span>
                        <time className="text-[#1556e8]">{index + 1} min</time>
                    </li>
                ))}
            </ol>
            <p className="mt-3 border-t border-[#e5e6e8] pt-3">
                Ready to Dive In? Enroll Now and Start Building Your Digital Future!
            </p>
            <strong className="mt-2 block text-[24px] text-[#1556e8]">
                $25<span className="text-[12px] text-[#777c86]">/lifetime</span>
            </strong>
            <button
                className="mt-3 w-full rounded-full bg-[#baff00] py-2 text-[16px] text-black"
                type="button"
            >
                Enroll Now
            </button>
            <p className="mt-4 font-bold text-[30px] text-[#20242a]">This course include</p>
            <ul className="mt-2 space-y-2">
                <li>▣ Learning Resources</li>
                <li>▣ Quality Lesson Videos</li>
                <li>▣ Certificate of Completion</li>
                <li>▣ Private Consultation</li>
            </ul>
            <div className="my-3 border-t border-[#e5e6e8]" />
            <div className="flex items-center gap-2">
                <Image
                    className="h-9 rounded-full object-cover"
                    src="/assets/purple.png"
                    alt="Creator"
                    width={35}
                    height={35}
                />
                <span>
                    <strong className="block text-[#20242a]">PurePearl Studio</strong>
                    Professional Creator
                </span>
            </div>
            <p className="mt-3">
                Ready to Dive In? Enroll Now and Start Building Your Digital Future!
            </p>
            <button
                className="mt-3 rounded-full border border-[#dfe1e5] px-3 py-1.5 text-[13px]"
                type="button"
            >
                See Full Profile
            </button>
        </aside>
    );
}
