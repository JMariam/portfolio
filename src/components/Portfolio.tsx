/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

interface ProjectsProps {
  img: string;
  text: string;
  site: string;
}

export default function Portfolio({ img, text, site }: ProjectsProps) {
  return (
    <div className="card">
      <motion.div className="w-full bg-background3 px-auto py-[5%] rounded-lg">
        <div className="relative w-[90%] mx-auto">
          <div className="images h-[18rem] relative w-full rounded-xl transition-all overflow-hidden">
            <div className="inner">
              {" "}
              <img src={img} alt="image" className="object-cover" />
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
      </motion.div>
    </div>
  );
}
