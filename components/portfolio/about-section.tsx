/* eslint-disable @next/next/no-img-element */
import { ArrowDownToLine, Code2, Languages, UsersRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { AboutValue } from "@/data/portfolio";
import { SectionLabel } from "./section-label";
import { contentHeading, darkButton, sectionSpacing } from "./styles";

type AboutSectionProps = {
  values: AboutValue[];
};

const icons: Record<AboutValue["icon"], LucideIcon> = {
  code: Code2,
  people: UsersRound,
  languages: Languages,
};

export function AboutSection({ values }: AboutSectionProps) {
  return (
    <section className={`${sectionSpacing} scroll-mt-[88px] bg-portfolio-paper text-portfolio-ink`} id="about">
      <div className="grid grid-cols-[minmax(280px,.78fr)_1.22fr] items-center gap-[clamp(60px,10vw,150px)] max-[760px]:grid-cols-1">
        <div className="relative mx-auto w-full max-w-[430px] max-[760px]:w-[88%]">
          <img
            className="aspect-square w-full rounded-full border-8 border-white object-cover shadow-[0_24px_65px_rgb(22_32_25_/_16%)]"
            src="/static/images/profile-picture.jpg"
            alt="Felipe Gonzalez, full-stack developer based in Vancouver"
          />
          <span className="absolute bottom-3 right-[-8px] rounded-full bg-white px-[17px] py-3 text-xs font-bold tracking-[.04em] text-portfolio-ink shadow-[0_8px_20px_rgb(22_32_25_/_15%)]">Vancouver, BC</span>
        </div>
        <div>
          <SectionLabel>About me</SectionLabel>
          <h2 className={`${contentHeading} mb-[38px] mt-6`}>Developer by trade.<br />Designer by experience.</h2>
          <p className="mb-6 mt-0 max-w-[720px] text-[clamp(17px,1.5vw,21px)] leading-[1.65] text-[#475149]">
            I&apos;m Felipe Gonzalez, a Full-Stack Web Developer with more than
            four years of experience building responsive web products. I work
            across React and Next.js interfaces, Node.js APIs, databases, and
            product design.
          </p>
          <p className="mb-6 mt-0 max-w-[720px] text-[clamp(17px,1.5vw,21px)] leading-[1.65] text-[#475149]">
            I started as a Web Designer, so I understand both sides of a
            digital product: how it should work and how it should feel. Today,
            development is my primary craft—and design helps me build clearer,
            more thoughtful software.
          </p>
          <a
            className={`${darkButton} mt-[18px] items-center gap-[9px]`}
            href="https://felipegonzalez.dev/felipe-gonzalez-resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download résumé <ArrowDownToLine size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="mt-[clamp(64px,8vw,110px)] grid grid-cols-3 border-y border-portfolio-line max-[760px]:grid-cols-1 [&>article+article]:border-l [&>article+article]:border-portfolio-line max-[760px]:[&>article+article]:border-l-0 max-[760px]:[&>article+article]:border-t">
        {values.map((value) => {
          const Icon = icons[value.icon];
          return (
            <article className="min-h-[190px] px-[34px] py-[30px] max-[760px]:min-h-0 max-[760px]:px-0 max-[760px]:py-7" key={value.title}>
              <Icon className="block text-portfolio-blue" size={22} strokeWidth={2} aria-hidden="true" />
              <h3 className="mb-[10px] mt-[30px] text-xl">{value.title}</h3>
              <p className="m-0 max-w-[390px] text-base leading-[1.55] text-[#475149]">{value.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
