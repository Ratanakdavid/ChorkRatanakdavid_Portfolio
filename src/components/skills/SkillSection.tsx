import type { ReactNode } from "react";
import Header from "@/components/general/Header";
import {
  DiJavascript,
  DiMysql,
  DiMongodb,
  DiDocker,
  DiGit,
  DiNodejs,
  DiLaravel,
} from "react-icons/di";
import {
  SiTypescript,
  SiNestjs,
  SiSpringboot,
  SiNextdotjs,
  SiVuedotjs,
  SiPostgresql,
} from "react-icons/si";

const leftGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "Vue.js", icon: <SiVuedotjs />, color: "text-green-400" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
      { name: "JavaScript", icon: <DiJavascript />, color: "text-yellow-400" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: <DiMysql />, color: "text-blue-400" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-500" },
      { name: "MongoDB", icon: <DiMongodb />, color: "text-green-500" },
    ],
  },
];

const rightGroups = [
  {
    category: "Backend",
    skills: [
      { name: "NestJS", icon: <SiNestjs />, color: "text-red-400" },
      { name: "Node.js", icon: <DiNodejs />, color: "text-green-500" },
      { name: "Spring Boot", icon: <SiSpringboot />, color: "text-green-400" },
      { name: "Laravel", icon: <DiLaravel />, color: "text-red-500" },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", icon: <DiGit />, color: "text-orange-500" },
      { name: "Docker", icon: <DiDocker />, color: "text-blue-400" },
    ],
  },
];

function SkillGroup({ category, skills, delay = 0 }: { category: string; skills: { name: string; icon: ReactNode; color: string }[]; delay?: number }) {
  return (
    <div className="mb-10">
      <p
        className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-6 text-center"
        data-aos="fade-up"
        data-aos-delay={delay}
      >
        {category}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <div
            key={i}
            data-aos="zoom-in"
            data-aos-delay={delay + i * 100}
            className="bg-slate-900 border border-slate-800 hover:border-indigo-500/50 text-center w-32 h-36 rounded-2xl flex flex-col items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-indigo-500/20 cursor-default"
          >
            <div className={`text-4xl mb-3 ${skill.color}`}>
              {skill.icon}
            </div>
            <p className="text-gray-300 text-sm font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillSection() {
  return (
    <section id="skills">
      <Header title="My Skills" />
      <div className="w-[85%] mx-auto pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

       
          <div data-aos="fade-right">
            {leftGroups.map((group, i) => (
              <SkillGroup
                key={i}
                category={group.category}
                skills={group.skills}
                delay={i * 150}
              />
            ))}
          </div>

      
          <div data-aos="fade-left">
            {rightGroups.map((group, i) => (
              <SkillGroup
                key={i}
                category={group.category}
                skills={group.skills}
                delay={i * 150}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}