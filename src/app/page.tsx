"use client";

import Image from "next/image";
import CourseDiscovery from "@/components/CourseDiscovery";
import CourseGrid from "@/components/CourseGrid";
import LearningPaths from "@/components/LearningPaths";
import LearningShowcase from "@/components/LearningShowcase";
import CreatorBanner from "@/components/CreatorBanner";
import CommunityTestimonials from "@/components/CommunityTestimonials";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function Home() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section
        className="hero pixel-hero relative! block! min-h-138.75! overflow-hidden! bg-[#073bd5]! px-5! pb-0! pt-9.25! text-white! md:min-h-147.5! md:pt-5.25!"
        id="top"
      >
        <Image
          className="pixel-decoration lime-squiggle left-[-70.58px]! h-[386.79px]! w-[386.79px]! object-contain!"
          src="/assets/lime-squiggle.png"
          alt=""
          width={387}
          height={387}
          priority
        />
        <Image
          className="pixel-decoration lime-square h-92.5! w-92.5! "
          src="/assets/lime-sqaure.png"
          alt=""
          width={104}
          height={154}
          priority
        />
        <Image
          className="pixel-decoration left-white-squiggle h-43.75! top-91.25!"
          src="/assets/white-squiggle.png"
          alt=""
          width={77}
          height={93}
          priority
        />
        <Image
          className="pixel-decoration right-white-squiggle"
          src="/assets/white-squiggle-of-right.png"
          alt=""
          width={100}
          height={110}
          priority
        />
        <Image
          className="pixel-decoration white-ring"
          src="/assets/whtie-ring.png"
          alt=""
          width={104}
          height={96}
          priority
        />
        <Image
          className="pixel-decoration triangle"
          src="/assets/triangle.png"
          alt=""
          width={58}
          height={59}
          priority
        />
        <div className="pixel-hero-copy relative z-3 mx-auto w-full text-center">
          <h1 className="font-sans! font-bold leading-[1.02] tracking-[-1px] text-[clamp(31px,8vw,45px)] md:text-[clamp(34px,5.1vw,67px)]">
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>
          <p className="mx-auto mt-4.25 mb-6.25 font-sans text-[18px]! leading-[1.35] w-full md:text-[9px]">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
          <form
            className="course-search flex items-center justify-center gap-1.75"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="search-field flex h-5.5 w-[54vw] max-w-48.5 items-center rounded-[20px] bg-white px-2.5 text-[#9c9c9c]">
              <span>⌕</span>
              <input
                className="w-full border-0 font-sans text-[7px] outline-0"
                aria-label="Search courses"
                placeholder="Course, topic, creator"
              />
            </label>
            <button
              className="h-5.5 rounded-[20px] border-0 bg-[#b8ff00] px-3 font-sans text-[7px] text-[#122500]"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>

        <div className="pixel-hero-art">
          <div className="lime-arc" />
          <Image
            className="student-image"
            src="/assets/student.png"
            alt="Student learning with a laptop"
            width={480}
            height={383}
            priority
          />
          <div className="stat-card design-card">
            <span>UI/UX Design</span>
            <small>200 Courses · 1000+ Students</small>
          </div>
          <div className="stat-card progress-card">
            <span>Learning Progress</span>
            <b>55%</b>
            <i />
          </div>
          <div className="stat-card students-card">
            <span>Happy Students</span>
            <small>
              45.2K <b>☺</b>
            </small>
            <div className="mini-avatars">
              <i />
              <i />
              <i />
              <i />
              <i />
              <b>2K+</b>
            </div>
          </div>
        </div>
      </section>

      <CourseDiscovery />
      <CourseGrid />
      <LearningPaths />
      <LearningShowcase />
      <CreatorBanner />
      <CommunityTestimonials />
      <SiteFooter />
    </main>
  );
}
