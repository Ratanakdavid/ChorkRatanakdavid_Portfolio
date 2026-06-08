import Header from "@/components/general/Header";
import ResumeCard from "./ResumeCard";
import { LuGraduationCap, LuPackage, LuServer } from "react-icons/lu";

import { RiNextjsFill } from "react-icons/ri";

export default function ResumeSection() {
  return (
    <section id="resume" className="my-12">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* education section */}
        <div>
          <Header title="My Education" as="h2" />
          <div className="space-y-6">
            <ResumeCard
              icon={LuGraduationCap}
              role="Computer Science Degree"
              description="Bachelor of Science in Computer Science."
              date="2018 - 2022"
            />
            <ResumeCard
              icon={LuGraduationCap}
              role="Computer Science Degree"
              description="Bachelor of Science in Computer Science."
              date="2018 - 2022"
            />
            <ResumeCard
              icon={LuGraduationCap}
              role="Computer Science Degree"
              description="Bachelor of Science in Computer Science."
              date="2018 - 2022"
            />
            <ResumeCard
              icon={LuGraduationCap}
              role="Computer Science Degree"
              description="Bachelor of Science in Computer Science."
              date="2018 - 2022"
            />
          </div>
        </div>
        {/* work experience section */}
        <div>
          <Header title="My Work Experience" as="h2"/>
          <div className="space-y-6">

            <ResumeCard
              icon={RiNextjsFill}
              role="Computer Science Degree"
              description="Bachelor of Science in Computer Science."
              date="2018 - 2022"
            />

            <ResumeCard
              icon={LuPackage}
              role="Computer Science Degree"
              description="Bachelor of Science in Computer Science."
              date="2018 - 2022"
            />

            <ResumeCard
              icon={LuServer}
              role="Computer Science Degree"
              description="Bachelor of Science in Computer Science."
              date="2018 - 2022"
            />

            <ResumeCard
              icon={RiNextjsFill}
              role="Computer Science Degree"
              description="Bachelor of Science in Computer Science."
              date="2018 - 2022"
            />


          </div>
        </div>
      </div>
    </section>
  );
}
