"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

const courseImage =
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80";

export default function LoginPage() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setSubmitted(true);
    }

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#073bd5] bg-[linear-gradient(#ffffff1c_1px,transparent_1px),linear-gradient(90deg,#ffffff1c_1px,transparent_1px)] bg-size-[59px_59px] px-6 py-5 font-sans text-white sm:px-10 sm:py-8 lg:px-16">
            <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-282 items-center justify-between gap-12 lg:gap-20">
                <AuthArtwork />
                <section
                    className="relative h-96 w-full max-w-70 rounded-[13px] bg-white px-7 py-8 text-[#25282e] shadow-[0_16px_40px_rgba(0,23,111,0.2)] sm:px-8 sm:py-9"
                    aria-labelledby="login-title"
                >
                    <p className="text-[8px] text-[#1556e8]">Sign In</p>
                    <h1
                        className="mt-1 text-[25px] font-bold leading-[1.02] tracking-[-1px]"
                        id="login-title"
                    >
                        Welcome Back
                    </h1>
                    <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
                        <Field
                            label="Email"
                            type="email"
                            placeholder="designer@example.com"
                        />
                        <Field label="Password" type="password" placeholder="********" />
                        <div className="flex justify-end pt-1">
                            <button
                                className="rounded-full bg-[#baff00] px-4 py-2 text-[8px] text-[#243400] transition-transform hover:-translate-y-0.5"
                                type="submit"
                            >
                                Sign In
                            </button>
                        </div>
                        {submitted && (
                            <p className="text-right text-[8px] text-[#1556e8]" role="status">
                                Welcome back.
                            </p>
                        )}
                    </form>
                    <div className="absolute inset-x-7 top-64 flex items-center gap-2 text-[7px] text-[#9da2a9] sm:inset-x-8">
                        <span className="h-px flex-1 bg-[#e1e3e6]" />
                        <span>or</span>
                        <span className="h-px flex-1 bg-[#e1e3e6]" />
                    </div>
                    <div className="absolute inset-x-7 top-72 flex justify-center gap-3 sm:inset-x-8">
                        <button
                            className="flex h-9 w-9 items-center justify-center rounded-[9px] border border-[#e1e3e6] text-[16px] font-bold"
                            type="button"
                            aria-label="Continue with Facebook"
                        >
                            f
                        </button>
                        <button
                            className="flex h-9 w-9 items-center justify-center rounded-[9px] border border-[#e1e3e6] text-[16px] font-bold"
                            type="button"
                            aria-label="Continue with Google"
                        >
                            G
                        </button>
                    </div>
                    <p className="absolute inset-x-0 bottom-5 text-center text-[8px] text-[#71767e]">
                        New user?{" "}
                        <Link className="text-[#1556e8]" href="/signup">
                            Create an account
                        </Link>
                    </p>
                </section>
            </div>
        </main>
    );
}

function AuthArtwork() {
    return (
        <section
            className="relative hidden min-h-130 flex-1 self-stretch overflow-hidden md:block"
            aria-label="ByteSpace sign in introduction"
        >
            <Link
                className="absolute left-0 top-0 z-10 flex items-center gap-1.5 text-[13px] font-bold"
                href="/"
                aria-label="ByteSpace home"
            >
                <Image
                    className="h-4.5 w-4.5 object-contain"
                    src="/assets/logo.png"
                    alt=""
                    width={29}
                    height={32}
                    priority
                />
            </Link>
            <div className="absolute left-0 top-10 z-10 max-w-55">
                <h2 className="text-[11px] font-semibold leading-none">
                    Sign in with ease
                </h2>
                <p className="mt-3 text-[8px] leading-[1.6] text-white/85">
                    Experience a seamless and efficient sign-in process that grants you
                    instant access to a world of knowledge.
                </p>
            </div>
            <div className="absolute left-1/2 top-35 h-72 w-67.5 -translate-x-1/2 border border-[#4c9cf2]/80">
                <div className="absolute left-3 top-12 h-45 w-44 -rotate-1 overflow-hidden rounded-xl! bg-white p-2 text-[#1c2027] shadow-[0_14px_30px_rgba(1,24,117,0.25)]">
                    <CoursePreview image={courseImage} title="the Power of Big Data" />
                </div>
                <div className="absolute left-16 top-0 z-20 h-49 w-45 rotate-1 overflow-hidden rounded-xl! bg-white p-2 text-[#1c2027] shadow-[0_14px_30px_rgba(1,24,117,0.25)]">
                    <CoursePreview image={courseImage} title="the Power of Big Data" />
                </div>
                <div className="absolute -bottom-2 left-26 z-30 w-32 rounded-[9px] bg-[#baff00] px-2 py-2 text-[#284000] shadow-[0_10px_24px_rgba(1,24,117,0.2)]">
                    <span className="block text-[6px] font-semibold">Happy Students</span>
                    <span className="block text-[5px]">45.2K</span>
                    <div className="mt-1 flex -space-x-1">
                        <i className="h-4 w-4 rounded-full border border-white bg-[#c48d68]" />
                        <i className="h-4 w-4 rounded-full border border-white bg-[#4e332d]" />
                        <i className="h-4 w-4 rounded-full border border-white bg-[#bb7653]" />
                        <b className="flex h-4 w-4 items-center justify-center rounded-full border border-white bg-[#304500] text-[5px] text-white">
                            2K+
                        </b>
                    </div>
                </div>
            </div>
            <div className="absolute left-8 top-5 h-12 w-12 rounded-full border-11 border-[#baff00]" />
            <Image
                className="absolute bottom-5 -left-2 h-20 w-20 object-contain"
                src="/assets/green-triangle.png"
                alt=""
                width={58}
                height={59}
            />
            <Image
                className="absolute bottom-13 -right-px h-20 w-20 rotate-12 object-contain"
                src="/assets/white-squiggle-of-right.png"
                alt=""
                width={100}
                height={110}
            />
        </section>
    );
}

function Field({
    label,
    type,
    placeholder,
}: {
    label: string;
    type: string;
    placeholder: string;
}) {
    return (
        <label className="block text-[7px] text-[#20242a]">
            <span className="mb-1 block">{label}</span>
            <input
                className="h-6.5 w-full rounded-md! border border-[#e1e3e6] px-3 text-[8px] outline-none transition-colors placeholder:text-[#9da2a9] focus:border-[#1556e8]"
                type={type}
                placeholder={placeholder}
                required
            />
        </label>
    );
}

function CoursePreview({ image, title }: { image: string; title: string }) {
    return (
        <>
            <div className="relative h-24 overflow-hidden rounded-md! bg-[#e9ebef]">
                <Image className="object-cover" src={image} alt="" fill unoptimized />
            </div>
            <div className="pt-1.5">
                <div className="flex items-start justify-between gap-1">
                    <h3 className="truncate text-[8px] font-bold leading-tight">
                        {title}
                    </h3>
                    <span className="shrink-0 text-[7px]">
                        4.5 <b className="text-[#baff00]">★</b>
                    </span>
                </div>
                <p className="mt-0.5 text-[5px] text-[#1556e8]">by purepixel studio</p>
                <div className="mt-2 flex items-center justify-between">
                    <span className="rounded-full bg-[#f4f5f6] px-1.5 py-1 text-[5px]">
                        ▥ Beginner
                    </span>
                    <span className="text-[6px] text-[#1556e8]">
                        $25<span className="text-[4px] text-[#777]">/lifetime</span>
                    </span>
                </div>
            </div>
        </>
    );
}
