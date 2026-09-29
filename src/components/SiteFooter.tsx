import Image from "next/image";

const linkGroups = [
  {
    links: ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  },
  {
    links: ["Development", "Marketing", "Photography", "Finance", "Sport"],
  },
  {
    links: ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-white px-6 pt-11 font-sans text-[#272a30] sm:px-10 sm:pt-14 lg:px-16" aria-label="Site footer">
      <div className="mx-auto max-w-232.5">
        <div className="grid gap-10 md:grid-cols-[1.25fr_1fr] md:gap-16 lg:gap-24">
          <div className="max-w-80">
            <a className="flex w-fit items-center gap-1.5" href="#top" aria-label="ByteSpace home">
              <Image className="h-4.5 w-4.5 object-contain" src="/assets/logo.png" alt="" width={29} height={32} />
              <span className="text-[14px] font-bold tracking-[-.5px]">ByteSpace</span>
            </a>
            <p className="mt-3 max-w-70 text-[8px] leading-[1.45] text-[#44484f]">Stay Up to date with our latest features and releases by joining our newsletter.</p>
            <form className="mt-6 flex max-w-65 gap-3" onSubmit={(event) => event.preventDefault()}>
              <label className="flex h-6.5 min-w-0 flex-1 items-center rounded-full border border-[#d9dce1] px-3 text-[8px] text-[#777b82]">
                <span className="sr-only">Email address</span>
                <input className="w-full border-0 bg-transparent text-[8px] text-[#222] outline-none placeholder:text-[#777b82]" type="email" placeholder="Enter your email" required />
              </label>
              <button className="h-6.5 rounded-full bg-[#baff00] px-4 text-[8px] text-[#172400] transition-transform hover:-translate-y-0.5" type="submit">Search</button>
            </form>
            <p className="mt-4 max-w-70 text-[6px] leading-normal text-[#777b82]">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
          </div>

          <nav className="grid grid-cols-3 gap-5 text-[8px] text-[#34383e]" aria-label="Footer navigation">
            {linkGroups.map((group) => (
              <ul className="space-y-4" key={group.links[0]}>
                {group.links.map((link) => <li key={link}><a className="transition-colors hover:text-[#1556e8]" href="#top">{link}</a></li>)}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[#dfe1e5] py-4 text-[6px] text-[#555a62] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <nav className="flex gap-5" aria-label="Legal navigation">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookies Settings</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}