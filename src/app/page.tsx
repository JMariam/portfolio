import Layout from "@/Components/Layout";
import Projects from "@/Components/Projects";

export default function Home() {
  return (
    <Layout>
      <div className=" w-[80%] mr-auto">
        <section id="about" className="pt-28">
          <p className="text-[14px] leading-[28px] ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
            neque? Nemo, eius! Repellendus quidem eveniet, quo iure laudantium
            labore soluta distinctio modi non est corrupti aspernatur molestiae
            quia perferendis minus libero aut totam, animi doloribus <br />{" "}
            <br />
            exercitationem dicta excepturi! Quos quas blanditiis veniam,
            assumenda quod perferendis, vitae dicta ab laudantium, beatae enim
            possimus. Delectus debitis modi nostrum, quod voluptas at deleniti
            iste libero explicabo nisi harum consectetur obcaecati! Fuga
            assumenda animi nam, qui iusto magni quae atque consequuntur
            repellendus possimus, debitis a, quidem dicta placeat eveniet sequi?
            Sint ipsum, nam minima quidem veniam corporis impedit accusamus
            deserunt maxime rerum voluptates <br /> <br />
            laboriosam ad qui nulla laudantium totam asperiores mollitia placeat
            voluptatibus facilis! Assumenda qui fuga dolorem atque optio
            eligendi quasi. Placeat ex, quidem est facere nisi suscipit earum
            odio aut alias iusto, qui fugit totam repellendus praesentium at
            tempore unde harum et fugiat dolore. Obcaecati commodi harum totam
            quaerat?
          </p>
        </section>
        <section id="project" className="pt-28">
          <div className="mb-8 lg:mb-12">
            <p className="text-[18px] leading-[40px] font-bold text-text2">PROJECTS</p>
            <p className="text-[13px] leading-[24px] lg:w-[55%]">
              Some handpicked projects I have worked on over the years.
            </p>
          </div>
          <div className="main">
            <Projects
              img="/pro1-.webp"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porriste obcaecati fugiat voluptates repudiandae sapiente voluptatummaxime alias expedita!"
              site="https://multi-step-form-bice-seven.vercel.app/"
            />
            <Projects
              img="/pro2-.webp"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porriste obcaecati fugiat voluptates repudiandae sapiente voluptatummaxime alias expedita!"
              site="https://countries-iota-eight.vercel.app/"
            />

            <Projects
              img="/pro3-.webp"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porriste obcaecati fugiat voluptates repudiandae sapiente voluptatummaxime alias expedita!"
              site="https://tcw-gilt.vercel.app/"
            />

            <Projects
              img="/pro4-.webp"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porriste obcaecati fugiat voluptates repudiandae sapiente voluptatummaxime alias expedita!"
              site="https://jmariam.github.io/diamondluxury/"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}
