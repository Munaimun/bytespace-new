"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="site-header pixel-header relative! z-5! flex! max-w-none! bg-[#073bd5]! bg-[linear-gradient(#ffffff1c_1px,transparent_1px),linear-gradient(90deg,#ffffff1c_1px,transparent_1px)]! bg-size-[51px_51px]! px-5! py-3! text-white! md:px-[max(52px,calc((100vw-1240px)/2))]!">
            <Link className="pixel-brand h-[31.5px]! w-auto! items-center! gap-1.5!" href="/" aria-label="ByteSpace home">
                <Image className="h-[31.5px]! w-[28.88px]! object-contain!" src="/assets/logo.png" alt="ByteSpace" width={29} height={32} priority />
                <p className="m-0! font-sans! text-[15px]! font-bold leading-none">ByteSpace</p>
            </Link>
            <nav className={`${menuOpen ? "is-open" : ""} main-nav pixel-nav gap-4.75! text-[15px]! md:flex!`} aria-label="Main navigation">
                <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link href="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
                <Link href="/creators" onClick={() => setMenuOpen(false)}>Creators</Link>
            </nav>
            <div className="header-actions pixel-actions gap-3.25! text-[15px]! max-md:hidden!">
                <Link className="login-link" href="/login">Sign In</Link>
                <Link className="pixel-signup" href="/signup">Join Us</Link>
                <Link className="bag-link" href="/courses" aria-label="Course bag"><Image src="/assets/shopping-bag.png" alt="" width={13} height={13} /></Link>
            </div>
            <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        </header>
    );
}