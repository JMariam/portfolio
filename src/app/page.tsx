import Layout from "@/Components/Layout";
import Projects from "@/Components/Projects";

export default function Home() {
  return (
    <Layout>
      <div className=" w-[80%] mr-auto">
        <section id="about" className="pt-28 mb-40">
          <p className="text-[14px] leading-[24px] ">
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
        <section id="project" className="">
          <div className="mb-8 lg:mb-12">
            <p className="text-[18px] leading-[40px] font-bold">PORTFOLIO</p>
            <p className="text-[12px] lg:w-[55%]">
              Some handpicked projects i have worked on over the years.
            </p>
          </div>
          <div className="grid gap-12">
            <Projects
              img="/pro1.png"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porriste obcaecati fugiat voluptates repudiandae sapiente voluptatummaxime alias expedita!"
              site=""
            />
            <Projects
              img="/pro2.png"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porriste obcaecati fugiat voluptates repudiandae sapiente voluptatummaxime alias expedita!"
              site=""
            />

            <Projects
              img="/pro3.png"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porriste obcaecati fugiat voluptates repudiandae sapiente voluptatummaxime alias expedita!"
              site=""
            />

            <Projects
              img="/pro4.png"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porriste obcaecati fugiat voluptates repudiandae sapiente voluptatummaxime alias expedita!"
              site=""
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}
