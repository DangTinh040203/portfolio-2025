import InfoSection from "@/components/AboutScreen/InfoSection";
import Skills from "@/components/AboutScreen/Skills";
import PageHeader from "@/components/common/PageHeader";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const About = () => {
  return (
    <div className="container pb-24">
      <ScrollProgress className="top-0" />
      <PageHeader
        subTitle="RESUME"
        mainTitle={{ normal: "ABOUT", strong: "ME" }}
      />
      <InfoSection />
      <Skills />
    </div>
  );
};

export default About;
