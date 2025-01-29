/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";

interface ProjectsProps {
  img: string;
  text: string;
  site: string;
}

export default function Projects({ img, text, site }: ProjectsProps) {
  return (
    <div className="relative w-[80%] mx-auto">
      <img src={img} alt="" className="h-[15 rem] w-full rounded-xl transition-all" />
      <div className="w-[100%] h-[100%] top-0 left-0 absolute bg-background gap-6 p-8 flex justify-center flex-col opacity-0 hover:opacity-95 transition-all rounded-xl border border-primary">
        <p className="text-[12px]">{text}</p>
        <Link
          href={site}
          className="py-2 px-4 text-[12px] bg-accent rounded-full w-fit flex items-center gap-2"
        >
          <p className="text-[12px] text-white">View Website</p>

          <FaAngleRight className="text-background" />
        </Link>
      </div>
    </div>
  );
}
