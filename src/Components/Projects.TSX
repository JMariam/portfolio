import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";

interface ProjectsProps {
  img: string;
  text: string;
}

export default function Projects({ img, text }: ProjectsProps) {
  return (
    <div className="grid gap-4">
      <div className="relative">
        <img src={img} alt="" className="w-[40rem] h-[20rem]" />
        <div className="w-[40rem] h-[20rem] top-0 left-0 absolute bg-primary gap-6 p-8 flex justify-center text-center flex-col opacity-0 hover:opacity-100 transition-all">
          <p className="lg:text-center text-[13px]">
            {text}
          </p>
          <Link
            href=""
            className="py-2 px-4 text-[12px] bg-accent rounded-full w-fit flex items-center gap-2"
          >
            <p className="text-[17px] text-white"> View Website</p>

            <FaAngleRight className="text-background" />
          </Link>
        </div>
      </div>
    </div>
  );
}
