import { AboutSection } from "@/components/portfolio/about-section";
import { CapabilitiesSection } from "@/components/portfolio/capabilities-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { HeroSection } from "@/components/portfolio/hero-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { ProjectSection } from "@/components/portfolio/project-section";
import { SiteHeader } from "@/components/portfolio/site-header";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { WorkIntro } from "@/components/portfolio/work-intro";
import MotionReveal from '@/components/ui/motion-reveal';
import { projects } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <div className="work-field">
          <ExperienceSection />
          <div className="pb-[clamp(72px,9vw,112px)]">
            <MotionReveal>
              <WorkIntro />
            </MotionReveal>
            {projects.map((project, index) => (
				<ProjectSection defaultOpen={index === 0} key={project.id} project={project} tone={index} />
            ))}
          </div>
        </div>
        <CapabilitiesSection />
        <ContactSection />
        <SiteFooter />
      </main>
    </>
  );
}
