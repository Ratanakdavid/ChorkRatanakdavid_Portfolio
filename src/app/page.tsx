import ContactSection from "@/components/contact/ContactSection";
import HeroSection from "@/components/home/hero/HeroSection";
import ServiceSection from "@/components/Services/ServiceSection";
import ProjectSection from "@/components/projects/ProjectSection";
import ResumeSection from "@/components/resume/ResumeSection";
import SkillSection from "@/components/skills/SkillSection";
import AboutSection from "@/components/about/AboutSection";
import AnimationLayout from "../../layouts/AnimationLayout";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <AnimationLayout>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ResumeSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
      <Toaster />
    </AnimationLayout>
  );
}