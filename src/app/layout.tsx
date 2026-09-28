import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ByteSpace | Make room for what's next",
  description: "A clear home for ambitious teams to think, plan, and build together.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
