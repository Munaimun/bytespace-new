import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function NotFound() {
    return (
        <main className="bg-white font-sans text-[#111421]" id="top">
            <section className="bg-[#073bd5] bg-[linear-gradient(#ffffff1c_1px,transparent_1px),linear-gradient(90deg,#ffffff1c_1px,transparent_1px)] bg-size-[61px_61px] text-white">
                <SiteHeader />
                <div className="flex flex-col items-center justify-center px-6 pb-16 pt-6 text-center">
                    {/* 404 Text with Gradient */}
                    <h1 className="select-none bg-linear-to-b from-[#d4ff00] via-[#8ce21e] to-[#4c9222] bg-clip-text text-[150px] font-black leading-none tracking-tight text-transparent sm:text-[260px] md:text-[340px] lg:text-[400px]">
                        404
                    </h1>

                    {/* Headline overlapping 404 */}
                    <h2 className="relative z-10 -mt-16 text-3xl font-bold! leading-tight tracking-tight text-white sm:-mt-28 sm:text-5xl md:-mt-36 md:text-6xl -top-25">
                        The page you are looking
                        <br />
                        for doesn’t exist
                    </h2>

                    {/* Subtitle */}
                    <p className="mt-6 text-xs text-white/80 sm:text-sm md:text-base">
                        Try to use a correct url or go back to homepage to start again
                    </p>

                    {/* Back to Home Button */}
                    <Link
                        className="mt-8 rounded-full bg-[#baff00] px-7 py-3 text-sm font-semibold text-black! transition-transform hover:-translate-y-0.5"
                        href="/"
                    >
                        Back to Home
                    </Link>
                </div>
            </section>
            <SiteFooter />
        </main>
    );
}