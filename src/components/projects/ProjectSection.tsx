import Header from "@/components/general/Header";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <section id="projects">
      <Header title="Recent Projects" />
      <div
        className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10
        overflow-hidden"
      >
        <ProjectCard
          title="Modern Dashboard UI"
          imagePath="/image/boysmos.jpg"
          description="A modern dashboard UI built with React and Tailwind CSS."
        />

        <ProjectCard
          title="Modern Dashboard UI"
          imagePath="/image/boysmos.jpg"
          description="A modern dashboard UI built with React and Tailwind CSS."
        />
        <ProjectCard
          title="Modern Dashboard UI"
          imagePath="/image/boysmos.jpg"
          description="A modern dashboard UI built with React and Tailwind CSS."
        />
        <ProjectCard
          title="Modern Dashboard UI"
          imagePath="/image/boysmos.jpg"
          description="A modern dashboard UI built with React and Tailwind CSS."
        />
      </div>
    </section>
  );
}
