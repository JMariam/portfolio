import React from "react";
import MouseEffect from "./MouseEffect";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMailOpen } from "react-icons/io5";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <MouseEffect />
      <div className="h-screen flex">
        {/* Sidebar */}
        <aside className="w-1/2 h-full p-6 sticky top-0">
          <div className="h-full flex flex-col justify-between w-[80%] m-auto py-24">
            {/* Personal Info */}
            <div>
              <h1 className="text-2xl font-bold">JUBRIL MARIAM</h1>
              <h3 className="text-lg">FRONTEND DEVELOPER</h3>
              <p className=" mt-4 lg:w-[70%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, unde.
              </p>
            </div>
            {/* Navigation Links */}
            <nav className="space-y-4 mt-8 relative pl-[4rem]">
              <a href="#about" className="line block hover ">
                About
              </a>
              <a href="#" className="line block hover">
                Projects
              </a>
              <a href="#contact" className="line block hover">
                Contact
              </a>
            </nav>
            {/* Social Links */}
            <div className="flex gap-6 mt-8">
              <Link
                href="https://github.com/JMariam?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-[32px] cursor-pointer" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mariam-jubril/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-[32px] cursor-pointer" />
              </Link>
              <Link
                href="https://x.com/MariamJubril7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareXTwitter className="text-[32px] cursor-pointer" />
              </Link>
              <Link href="mailto:mariamjubril29@gmail.com">
                <IoMailOpen className="text-[32px] cursor-pointer" />
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-1/2 w-1/2 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
