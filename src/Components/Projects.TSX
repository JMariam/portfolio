/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";

interface ProjectsProps {
  img: string;
  text: string;
  site: string;
}

export default function Projects({ img, text, site }: ProjectsProps) {
  return (
    <div className="cards">
      <div className="w-full bg-background3 px-auto py-[5%] rounded-lg card">
        <div className="relative w-[90%] mx-auto">
          <div className="images h-[18rem] w-full rounded-xl transition-all">
            <div className="inner ">
              {" "}
              <img
                src={img}
                alt=""
                
              />
            </div>
          </div>

          <div className="w-[100%] h-[100%] top-0 left-0 absolute bg-background2 border border-primary gap-6 p-8 flex justify-center flex-col opacity-0 hover:opacity-95 transition-all rounded-xl ">
            <p className="text-[12px] leading-[22px]">{text}</p>
            <Link
              href={site}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent flex w-fit h-10 py-auto items-center gap-3 px-4 rounded-xl"
            >
              <p className="text-background3 text-[12px] leading-[12px]">
                View Website
              </p>

              <FaAngleRight className="text-background3 text-[12px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
