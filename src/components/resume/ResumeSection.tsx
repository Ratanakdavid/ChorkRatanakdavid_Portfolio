import Header from "@/components/general/Header";
import ResumeCard from "./ResumeCard";
import { LuGraduationCap, LuLanguages } from "react-icons/lu";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";

export default function ResumeSection() {
  return (
    <section id="resume">
      <Header title="Resume" />
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 pb-20">
        {/* Education */}
        <div data-aos="zoom-out">
          <Header title="My Education" as="h2" />
          <div className="space-y-6">
            <ResumeCard
              icon={LuGraduationCap}
              role="High School Diploma"
              description="Anuwat High School — completed secondary education and graduated in 2022."
            />
            <ResumeCard
              icon={LuGraduationCap}
              role="Information & Communication Engineering"
              description="Institute of Technology of Cambodia (ITC) — majoring in ICT with focus on full-stack web development."
              date="2022 - Present"
            />
            <ResumeCard
              icon={LuLanguages}
              role="Foreign Languages"
              description="Paññāsāstra Institute of Foreign Languages — studied English and French."
              date="2019 - 2021"
            />
          </div>
        </div>

        {/* Experience */}
        <div data-aos="zoom-in" data-aos-delay="200">
          <Header title="My Experience" as="h2" />
          <div className="space-y-6">
            <ResumeCard
              icon={RiNextjsFill}
              role="Full Stack Developer — Team Projects"
              description="Built multiple full-stack web apps using Vue.js, NestJS, Spring Boot, and PostgreSQL as part of university team projects at ITC."
              date="2023 - Present"
            />
            <ResumeCard
              icon={SiSpringboot}
              role="Backend Developer — Enrollment System"
              description="Designed and developed a student enrollment and classroom scheduling system using Spring Boot and MySQL."
              date="2025"
            />
            <ResumeCard
              icon={MdOutlineVolunteerActivism}
              role="Volunteer — TAG Event 2024"
              description="Participated as a volunteer at TECH ANIME GAME EXPO, supporting event operations and assisting participants."
              date="2024"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
