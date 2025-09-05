import InfoSection from "@/components/AboutScreen/InfoSection";
import PageHeader from "@/components/common/PageHeader";

const About = () => {
  return (
    <div className="container pb-24">
      <PageHeader
        subTitle="RESUME"
        mainTitle={{ normal: "ABOUT", strong: "ME" }}
      />

      <InfoSection />
    </div>
  );
};

export default About;
