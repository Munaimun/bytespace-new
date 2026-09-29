import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function NotFound() {
    return (
        <main className="bg-white font-sans text-[#111421]" id="top">
            <section className="bg-[#073bd5] bg-[linear-gradient(#ffffff1c_1px,transparent_1px),linear-gradient(90deg,#ffffff1c_1px,transparent_1px)] bg-size-[61px_61px] text-white">
                <SiteHeader />
                <div className="flex min-h-105 flex-col items-center justify-center px-6 pb-10 pt-3 text-center sm:min-h-110">
                    <h1 className="text-[clamp(100px,18vw,180px)] font-bold leading-[.78] tracking-[-8px] text-[#baff00]">404</h1>
                    <h2 className="mt-5 max-w-110 text-[22px] font-bold leading-[1.02] tracking-[-.7px] sm:text-[25px]">The page you are looking<br />for doesn&apos;t exist</h2>
                    <p className="mt-4 text-[7px] text-white/80">Try a URL or select a tab to navigate to a valid page</p>
                    <Link className="mt-4 rounded-full bg-[#baff00] px-4 py-2 text-[7px] text-[#304500] transition-transform hover:-translate-y-0.5" href="/">Back to Home</Link>
                </div>
            </section>
            <SiteFooter />
        </main>
    );
}