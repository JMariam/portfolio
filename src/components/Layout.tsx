"use client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState, useRef, useEffect } from "react";
import MouseEffect from "./MouseEffect";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMailOpen } from "react-icons/io5";
import Link from "next/link";

import { useActiveSection } from "./UseActive";
import Footer from "./Footer";

const navLinks = [
  { href: "#about", id: "about", label: "About" },
  { href: "#project", id: "project", label: "Project" },
  { href: "#experience", id: "experience", label: "Experience" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const activeSection = useActiveSection(navLinks.map((link) => link.id));

  const mainRef = useRef<HTMLDivElement>(null); // Fixed ref declaration
  // const [showFooter, setShowFooter] = useState(false);

  // useEffect(() => {
  //   const mainElement = mainRef.current;

  //   const handleScroll = () => {
  //     if (mainElement) {
  //       const isAtBottom =
  //         mainElement.scrollHeight - mainElement.scrollTop <=
  //         mainElement.clientHeight + 5;
  //       setShowFooter(isAtBottom);
  //     }
  //   };

  //   mainElement?.addEventListener("scroll", handleScroll);
  //   return () => mainElement?.removeEventListener("scroll", handleScroll);
  // }, []); // Keep empty dependency array

  return (
    <div className="">
      <MouseEffect />
      <div ref={mainRef} className="flex flex-col lg:flex-row relative">
        {/* Sidebar */}
        <aside className="lg:w-1/2 lg:h-screen lg:sticky top-0 overflow-hidden">
          <div className="h-full flex flex-col gap-8 lg:justify-between w-[90%] py-12 lg:w-[60%] m-auto lg:py-28">
            {/* Personal Info */}
            <div>
              <h1 className="text-[32px] lg:text-[44px] leading-[32px] lg:leading-[44px] font-bold text-text2">
                JUBRIL MARIAM
              </h1>
              <h3 className="text-[16px] lg:text-[25px] mt-1 mb-8 lg:mb-5">FRONTEND DEVELOPER</h3>
              <p className="text-[16px] leading-[26px]">
                {/* I am passionate about building functional, responsive and
                scalable websites. */}
                Transforming ideas into sleek, responsive, and scalable web
                applications that prioritize performance and accessibility.
              </p>
            </div>
            {/* Navigation Links */}
            <nav className="hidden lg:flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <Link
                    href={link.href}
                    key={link.href}
                    className={`group line ${isActive ? "active" : ""}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            {/* Social Links */}
            <div className="flex gap-6 ">
              <Link
                href="https://github.com/JMariam?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-[36px] cursor-pointer text-accent" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mariam-jubril/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-[36px] cursor-pointer text-accent" />
              </Link>
              <Link
                href="https://x.com/MariamJubril7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareXTwitter className="text-[36px] cursor-pointer text-accent" />
              </Link>
              <Link href="mailto:mariamjubril29@gmail.com">
                <IoMailOpen className="text-[36px] cursor-pointer text-accent" />
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:w-1/2 relative">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
