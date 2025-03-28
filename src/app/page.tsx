/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Layout from "@/components/Layout";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import { FaArrowDown } from "react-icons/fa";
import { useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // useEffect( () => {
  //   const lenis = new Lenis()

  //   function raf(time) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }

  //   requestAnimationFrame(raf)
  // })

  const projects = [
    {
      img: "/pro1-.webp",
      text: "Mlti-step Form is a dynamic multi-step form using Next.js and Zod, featuring step navigation, real-time pricing updates, and cross-step state persistence, tackling challenges in dynamic validation and state transitions to ensure a smooth user experience.",
      site: "https://multi-step-form-bice-seven.vercel.app/",
    },
    {
      img: "/pro2-.webp",
      text: "REST Countries API is a responsive country information app using Next.js and the REST Countries API, featuring dynamic search/filtering, dark mode toggle, and detailed country profiles, solving challenges in API integration and state management to deliver a fast, intuitive interface for exploring global data.",
      site: "https://countries-iota-eight.vercel.app/",
    },
    {
      img: "/pro3-.webp",
      text: "Positivus is a responsive landing page using Next.js, showcasing services, team bios, and contact forms, optimizing UI/UX for conversions and brand consistency through dynamic animations and clean code.",
      site: "https://tcw-gilt.vercel.app/",
    },
    {
      img: "/pro4-.webp",
      text: "Diamond Luxury is a responsive real estate landing page using React.js and Tailwind CSS, featuring immersive property visuals and dynamic scroll effects, optimizing performance and visual consistency for premium user engagement.",
      site: "https://diamondluxury.vercel.app/",
    },
  ];

  return (
    <div className="">
      <Layout>
        <div className="w-[90%] mx-auto lg:w-[80%] lg:mr-auto">
          <section id="about" className="pt-16 lg:pt-28">
            <p className="text-[13px] lg:text-[14px] leading-[28px] lg:w-[99%]">
              I am a dedicated frontend developer with a strong focus on
              building functional, responsive, and scalable web applications. My
              expertise lies in crafting intuitive user interfaces that
              prioritize performance, accessibility, and seamless user
              experience. With a keen eye for design and an analytical approach
              to problem-solving, I develop digital solutions that merge
              aesthetics with efficiency.
              <br /> <br />
              Currently, I am pursuing a degree in Computer Science with
              Economics, equipping me with both technical proficiency and a
              strategic understanding of technology’s role in business and
              society. This interdisciplinary background allows me to approach
              development with a broader perspective, ensuring that the
              solutions I create are not only technically sound but also
              economically viable and scalable.
              <br /> <br />
              Beyond development, I have a deep interest in languages and
              cross-cultural communication. I am currently learning Spanish,
              further expanding my ability to engage with diverse perspectives
              and global communities.
            </p>
          </section>
          <section id="project" className="pt-20 lg:pt-28">
            <div className="">
              <p className="text-[18px] leading-[40px] font-bold text-text2">
                Projects
              </p>
              <p className="text-[13px] leading-[24px] lg:w-[75%] mt-2">
                A selection of projects I&apos;ve built over the years,
                showcasing my expertise and creativity.
              </p>
            </div>
            <main ref={container} className="main relative">
              {projects.map((project, i) => {
                const targetScale = 1 - (projects.length - i) * 0.05;

                return (
                  <Portfolio
                    key={`p_${i}`}
                    i={i}
                    {...project}
                    progress={scrollYProgress}
                    range={[i * 0.25, 1]}
                    targetScale={targetScale}
                  />
                );
              })}
            </main>
            {/* <div className="main" ref={container}>
              {projects.map((project, i) => (
                const targetScale = 1 - ( (projects.length - i) * 0.05);
                <Portfolio key={`p_${i}`} {...project} i={i} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
              ))}
            </div> */}
            {/* <div className="main">
            <Portfolio
              img="/pro1-.webp"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porriste obcaecati fugiat voluptates repudiandae sapiente voluptatummaxime alias expedita!"
              site="https://multi-step-form-bice-seven.vercel.app/"
            />
            <Portfolio
              img="/pro2-.webp"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porriste obcaecati fugiat voluptates repudiandae sapiente voluptatummaxime alias expedita!"
              site="https://countries-iota-eight.vercel.app/"
            />

            <Portfolio
              img="/pro3-.webp"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porriste obcaecati fugiat voluptates repudiandae sapiente voluptatummaxime alias expedita!"
              site="https://tcw-gilt.vercel.app/"
            />

            <Portfolio
              img="/pro4-.webp"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porriste obcaecati fugiat voluptates repudiandae sapiente voluptatummaxime alias expedita!"
              site="https://jmariam.github.io/diamondluxury/"
            />
          </div> */}
          </section>
          <section id="experience" className="pb-10">
            <div className="mb-8 ">
              <p className="text-[18px] leading-[40px] font-bold text-text2">
                Experience
              </p>
              {/* <p className="text-[13px] leading-[24px] lg:w-[55%]">
                Some handpicked Projects I have worked on over the years.
              </p> */}
            </div>
            <div className="grid gap-8">
              <Experience
                date="2024 - Present"
                title="Frontend Developer • Sweep Drones LImited"
                text="Collaborated with cross-functional teams to translate UI/UX designs into
responsive, performant web applications. Focused on building intuitive
interfaces with clean, maintainable code while adhering to accessibility
standards.
"
              />
              <Experience
                date="2023 - 2024"
                title="Frontend Developer • ODExhange"
                text="Worked closely with designers and product managers to implement interactive, visually appealing user interfaces, ensuring consistency across devices and browsers while optimizing for performance and accessibility."
              />
            </div>
            <a
              href="/resume.pdf"
              download="Mariam's Resume"
              className="mt-6 flex text-[14px] font-[500] underline items-center gap-2 text-text2"
            >
              Download Resume <FaArrowDown />
            </a>
          </section>
        </div>
      </Layout>
    </div>
  );
}
