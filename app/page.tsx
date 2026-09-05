import { AboutSection } from "@/components/portfolio/about-section";
import { CapabilitiesSection } from "@/components/portfolio/capabilities-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { HeroSection } from "@/components/portfolio/hero-section";
import { ProjectSection } from "@/components/portfolio/project-section";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SiteHeader } from "@/components/portfolio/site-header";
import { WorkIntro } from "@/components/portfolio/work-intro";
import { aboutValues, capabilities, projects } from "@/data/portfolio";

// Hostinger can retain Next.js' static HTML cache across deployments, leaving
// the page pointing at CSS chunks that no longer exist in the new build.
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <WorkIntro projects={projects} />
      {projects.map((project, index) => (
        <ProjectSection project={project} tone={index} key={project.id} />
      ))}
      <AboutSection values={aboutValues} />
      <CapabilitiesSection capabilities={capabilities} />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
