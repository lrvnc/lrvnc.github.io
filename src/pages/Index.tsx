import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/layout/SEO";
import LandingIntro from "@/components/sections/LandingIntro";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Publications from "@/components/sections/Publications";
import Portfolio from "@/components/sections/Portfolio";
import Skills from "@/components/sections/Skills";
import { personImg } from "@/lib/constants";

const Index = () => {
  return (
    <PageLayout>
      <SEO
        title="Leandro Risso Venâncio - Joint PhD Student in Physics and Computer Science"
        description="Leandro Venâncio personal webpage."
        imageUrl={personImg}
      />
      <LandingIntro />
      <About />
      <Education />
      <Experience />
      <Publications />
      <Portfolio />
      <Skills />
    </PageLayout>
  );
};

export default Index;
