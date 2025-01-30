"use client";

import React from "react";
import MouseEffect from "./MouseEffect";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMailOpen } from "react-icons/io5";
import Link from "next/link";
import { useActiveSection } from "./UseActive";

const navLinks = [
  { href: "#about", id: "about", label: "About" },
  { href: "#project", id: "project", label: "Project" },
  { href: "#contact", id: "contact", label: "Contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const activeSection = useActiveSection(navLinks.map((link) => link.id));

  return (
    <div className="">
      <MouseEffect />
      <div className="h-screen flex">
        {/* Sidebar */}
        <aside className="w-1/2 h-full sticky top-0">
          <div className="h-full flex flex-col justify-between w-[60%] m-auto py-28">
            {/* Personal Info */}
            <div>
              <h1 className="text-[40px] font-bold text-text2">JUBRIL MARIAM</h1>
              <h3 className="text-[21px] mt-1 mb-5">FRONTEND DEVELOPER</h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, unde.
              </p>
            </div>
            {/* Navigation Links */}
            <nav className="flex flex-col space-y-4">
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
                <FaGithub className="text-[32px] cursor-pointer text-accent" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mariam-jubril/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-[32px] cursor-pointer text-accent" />
              </Link>
              <Link
                href="https://x.com/MariamJubril7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareXTwitter className="text-[32px] cursor-pointer text-accent" />
              </Link>
              <Link href="mailto:mariamjubril29@gmail.com">
                <IoMailOpen className="text-[32px] cursor-pointer text-accent" /> 
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-1/2 w-1/2 overflow-y-auto ">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
