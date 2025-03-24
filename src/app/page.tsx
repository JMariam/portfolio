import Layout from "@/components/Layout";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import { FaArrowDown } from "react-icons/fa";

export default function Home() {
  const projects = [
    {
      id: 1,
      img: "/pro1-.webp",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porriste obcaecati fugiat voluptates repudiandae sapiente voluptatummaxime alias expedita!",
      site: "https://multi-step-form-bice-seven.vercel.app/",
    },
    {
      id: 2,
      img: "/pro2-.webp",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porriste obcaecati fugiat voluptates repudiandae sapiente voluptatummaxime alias expedita!",
      site: "https://countries-iota-eight.vercel.app/",
    },
    {
      id: 3,
      img: "/pro3-.webp",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porriste obcaecati fugiat voluptates repudiandae sapiente voluptatummaxime alias expedita!",
      site: "https://tcw-gilt.vercel.app/",
    },
    {
      id: 4,
      img: "/pro4-.webp",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porriste obcaecati fugiat voluptates repudiandae sapiente voluptatummaxime alias expedita!",
      site: "https://jmariam.github.io/diamondluxury/",
    },
  ];
  return (
    <div className="">
      <Layout>
        <div className=" w-[80%] mr-auto">
          <section id="about" className="pt-28">
            <p className="text-[14px] leading-[28px] ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
              neque? Nemo, eius! Repellendus quidem eveniet, quo iure laudantium
              labore soluta distinctio modi non est corrupti aspernatur
              molestiae quia perferendis minus libero aut totam, animi doloribus{" "}
              <br /> <br />
              exercitationem dicta excepturi! Quos quas blanditiis veniam,
              assumenda quod perferendis, vitae dicta ab laudantium, beatae enim
              possimus. Delectus debitis modi nostrum, quod voluptas at deleniti
              iste libero explicabo nisi harum consectetur obcaecati! Fuga
              assumenda animi nam, qui iusto magni quae atque consequuntur
              repellendus possimus, debitis a, quidem dicta placeat eveniet
              sequi? Sint ipsum, nam minima quidem veniam corporis impedit
              accusamus deserunt maxime rerum voluptates <br /> <br />
              laboriosam ad qui nulla laudantium totam asperiores mollitia
              placeat voluptatibus facilis! Assumenda qui fuga dolorem atque
              optio eligendi quasi. Placeat ex, quidem est facere nisi suscipit
              earum odio aut alias iusto, qui fugit totam repellendus
              praesentium at tempore unde harum et fugiat dolore. Obcaecati
              commodi harum totam quaerat?
            </p>
          </section>
          <section id="project" className="pt-28">
            <div className="mb-8 lg:mb-12">
              <p className="text-[18px] leading-[40px] font-bold text-text2">
                Projects
              </p>
              <p className="text-[13px] leading-[24px] lg:w-[55%]">
                Some handpicked Projects I have worked on over the years.
              </p>
            </div>
            <div className="cards">
              {projects.map((project) => (
                <Portfolio
                  key={project.id}
                  img={project.img}
                  text={project.text}
                  site={project.site}
                />
              ))}
            </div>
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
          <section id="experience" className="py-10">
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
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
        nulla inventore pariatur ab, molestiae fugit eaque cupiditate minus.
        Odit, ab!"
              />
              <Experience
                date="2023 - 2024"
                title="Frontend Developer • ODExhange"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
        nulla inventore pariatur ab, molestiae fugit eaque cupiditate minus.
        Odit, ab!"
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
