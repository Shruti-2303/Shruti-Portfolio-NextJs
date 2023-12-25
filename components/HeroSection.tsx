"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-44 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            className="rounded-full shadow-2xl"
            src="/shrutipfp.png"
            alt=""
            width={320}
            height={320}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-6xl">
            Hey, I&#39;m Shruti Sharma!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-xl text-justify">
            I&#39;m a {" "}
            <span className="font-semibold text-teal-600">
              Software Developer{" "}
            </span>
            with a specialization in {" "}
            <span className="font-semibold text-teal-600">
            Frontend Development
            </span>,{" "} residing in Greater Noida, India. 
            <br></br>
            My expertise lies in crafting software that provides tangible benefits, enhancing daily experiences to be more convenient and fulfilling.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
          <a
            href="https://drive.google.com/file/d/1PQ91JFT-SGoQ_SUEu463Vraf86Ljow4s/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="text-teal-600 font-semibold ml-3 px-6 py-3 border-teal-600 rounded shadow hover:bg-teal-600 hover:text-white"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
