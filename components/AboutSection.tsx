import React from "react";
import Image from "next/image";

const skills = [
  { skill: "JavaScript" },
  { skill: "ReactJS" },
  { skill: "Node JS" },
  { skill: "Express JS" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "SCSS" },
  { skill: "Tailwind CSS" },
  { skill: "Bootstrap CSS" },
  { skill: "Material UI" },
  { skill: "Ant Design" },
  { skill: "MongoDB" },
  { skill: "MySQL" },
  { skill: "Python" },
  { skill: "Git" },
  { skill: "GitHub" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:mt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p className="font-bold text-2xl mb-4">
              Hello, I'm <span className="text-teal-600">Shruti Sharma</span>
            </p>
            <p className="mb-4 text-justify text-sm">
              <span>
                A dynamic{" "}
                <span className="font-semibold text-teal-600">
                  Frontend Heavy Software Developer
                </span>{" "}
                from <span className="font-semibold">Greater Noida, India</span>
                .{" "}
              </span>
              <span>
                I earned my Engineering degree from AKTU in{" "}
                <span className="text-teal-600 font-semibold">
                  Information Technology
                </span>{" "}
                and currently work as an{" "}
                <span className="font-semibold">
                  Associate Software Engineer
                </span>{" "}
                at <span className="font-semibold">Accenture</span>.{" "}
              </span>
              <span>
                My journey includes a fulfilling{" "}
                <span className="font-semibold">
                  Software Engineer Internship
                </span>{" "}
                at <span className="font-semibold">Cognizant</span>, enriching
                my skill set.{" "}
              </span>
            </p>

            <p className="mb-4 text-justify text-sm">
              <span>
                Specialized in{" "}
                <span className="font-bold text-teal-600">
                  JavaScript and ReactJs
                </span>{" "}
                with a continuous dedication to mastering{" "}
                <span className="font-bold text-teal-600">Nextjs</span>, I bring
                both skill and a passion for innovation to my projects.{" "}
              </span>
              <span>
                Beyond my professional roles, I've freelanced as a{" "}
                <span className="font-bold">Frontend Developer</span> for over a
                year, demonstrating my adaptability in addressing various
                challenges.{" "}
              </span>
              <span>
                As a co-founder of the{" "}
                <span className="font-bold text-teal-600">
                  Elixir Tech Community
                </span>
                , a vibrant community of over 2000 programmers, I am committed
                to nurturing a collaborative and knowledge-sharing space.{" "}
              </span>
            </p>

            <p className="mb-4 text-justify text-sm">
              Beyond the coding realm, my interests include immersing myself in
              the world of{" "}
              <span className="font-semibold text-teal-600">Music</span> and
              expressing my creativity through{" "}
              <span className="font-semibold text-teal-600">Painting</span>.
            </p>
            <p className="mb-4 text-justify text-sm">
              Currently seeking new opportunities in{" "}
              <span className="font-semibold text-teal-600">
                Frontend/FullStack Development
              </span>
              , I am eager to leverage my skills and passion for technology in
              exciting ventures that allow me to make a meaningful impact.
            </p>

            <p className="mb-4 text-justify text-sm">
              Let's connect and explore the possibilities of working together to
              create innovative solutions! 🌟
            </p>
          </div>
          <div className="text-center justify-between flex flex-col md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row  z-10">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/coderGirl.svg"
              alt=""
              width={280}
              height={280}
              className="hidden md:block md:relative md:bottom-4 md:z-0 md:mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
