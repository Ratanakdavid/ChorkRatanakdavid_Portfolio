import Header from "@/components/general/Header";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "ScentHaven — Perfume E-Commerce",
    imagePath: "/image/perfume.jpg",
    description:
      "A full-featured perfume e-commerce platform with product listings, shopping cart, and order management.",
    tags: ["School Project", "Web Development"],
    githubUrl: "https://github.com/Perfume-E-commer",
    techs: [
      { name: "Vue.js" },
      { name: "Spring Boot" },
      { name: "MongoDB" },
      { name: "Maven" },
    ],
  },
  {
    title: "Enrollment & Classroom Scheduling System",
    imagePath: "/image/image.png",
    description:
      "A system to manage student enrollments, course assignments, and classroom scheduling for faculty and administrators.",
    tags: ["School Project", "Software Engineering"],
    githubUrl: "https://github.com/Ratanakdavid/Enrollment-scheduling-system.git",
    techs: [
      { name: "Spring Boot" },
      { name: "MySQL" },
      { name: "Maven" },
      { name: "Java" },
    ],
  },
  {
    title: "David Portfolio",
    imagePath: "/image/davidd.png",
    description:
      "My personal developer portfolio showcasing my projects, skills, and experience as a full-stack developer.",
    tags: ["Personal Project", "Frontend"],
    githubUrl: "https://github.com/Ratanakdavid/ChorkRatanakdavid_Portfolio",
    techs: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
  },
];

export default function ProjectSection() {
  return (
    <section id="projects">
      <Header title="Recent Projects" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={index * 100}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}