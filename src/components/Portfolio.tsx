/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { useTransform, useScroll, motion} from "framer-motion";
import { useRef} from "react";
import Link from "next/link";
import Image from "next/image";

// interface ProjectsProps {
//   img: string;
//   text: string;
//   site: string;
//   i: number;
//   progress: MotionValue<number>;
//   range: number[];
//   targetScale: number;
// }

export default function Portfolio({ img, text, site, i, progress, range, targetScale }: any) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])

  const scale = useTransform(progress, range, [1, targetScale]);

 
  return (
    <div className="card-container" ref={container}>
      <motion.div
        className="card w-full bg-background3 py-[5%] rounded-lg"
        style={{scale, top: `calc(-5vh + ${i * 25}px)` }}
      >
        <div className="w-[90%] mx-auto">
          <div className="images h-[13rem] lg:h-[18rem] relative w-full rounded-xl overflow-hidden">
            <motion.div className="relative inner w-[100%] h-[100%]" style={{scale: imageScale}}>
              <Image fill src={img} alt="image"  />
            </motion.div>
          </div>

          <div className="w-[100%] h-[100%] top-0 left-0 absolute bg-background2 border border-primary gap-6 p-4 lg:p-8 flex justify-center flex-col opacity-0 hover:opacity-95 transition-all rounded-xl ">
            <p className="text-[13px] lg:text-[16px] leading-[20px] lg:leading-[24px]">{text}</p>
            <Link
              href={site}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent flex w-fit h-10 py-auto items-center gap-3 px-4 rounded-xl"
            >
              <p className="text-background3 text-[13px] leading-[13px] lg:text-[16px] lg:leading-[16px]">
                View Website
              </p>

              <FaAngleRight className="text-background3 text-[13px] lg:text-[16px]" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
