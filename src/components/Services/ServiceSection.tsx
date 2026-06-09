import Header from "@/components/general/Header";
import ServiceCard from "./ServiceCard";

export default function ServiceSection() {
  return (
    <section id="services">
      <Header title="What I Offer" />
      <div
        className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2
        xl:grid-cols-4 gap-20"
      >
        <div data-aos="fade-right">
          <ServiceCard
            icon="/image/s1.png"
            name="UX & UI"
            description="Designing intutive intergfaces and seamless user experriences."
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="100">
          <ServiceCard
            icon="/image/s2.png"
            name="Web & Mobile App"
            description="Building responsive web apps and cross-platform mobile solutions."
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="200">
          <ServiceCard
            icon="/image/s3.png"
            name="Designing & Creative"
            description="Creating unique brand identities and compelling visual designs."
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="300">
          <ServiceCard
            icon="/image/s4.png"
            name="Development"
            description="Full-stack development with modern frameworks and best practices."
          />
        </div>
      </div>
    </section>
  );
}
