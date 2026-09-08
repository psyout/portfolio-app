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
import { capabilities, projects } from "@/data/portfolio";

// Hostinger can retain Next.js' static HTML cache across deployments, leaving
// the page pointing at CSS chunks that no longer exist in the new build.
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <MotionReveal>
          <AboutSection />
        </MotionReveal>
        <ExperienceSection />
        <div className="project-field pb-[clamp(72px,9vw,112px)]">
          <MotionReveal>
            <WorkIntro />
          </MotionReveal>
          {projects.map((project, index) => (
            <MotionReveal delay={Math.min(index * 0.06, 0.18)} frame key={project.id}>
              <ProjectSection project={project} tone={index} />
            </MotionReveal>
          ))}
        </div>
        <MotionReveal>
          <CapabilitiesSection capabilities={capabilities} />
        </MotionReveal>
        <MotionReveal>
          <ContactSection />
        </MotionReveal>
        <SiteFooter />
      </main>
    </>
  );
}
