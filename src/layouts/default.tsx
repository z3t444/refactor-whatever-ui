import { Link } from "@nextui-org/link";
import { Navbar } from "@/components/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init();

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen">
      <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1100">
        <Navbar />
      </div>
      <main className="container mx-auto max-w-5xl px-6 flex-grow pt-16">{children}</main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://nextui-docs-v2.vercel.app?utm_source=next-pages-template"
          title="nextui.org homepage">
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">WhateverUI</p>
        </Link>
      </footer>
    </div>
  );
}
