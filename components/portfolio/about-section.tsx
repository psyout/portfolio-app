/* eslint-disable @next/next/no-img-element */
import { ArrowDownToLine, Code2, Languages, UsersRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { AboutValue } from "@/data/portfolio";

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
    <section className="about" id="about">
      <div className="about-main">
        <div className="about-photo">
          <img
            src="/static/images/profile-picture.jpg"
            alt="Felipe Gonzalez, full-stack developer based in Vancouver"
          />
          <span>Vancouver, BC</span>
        </div>
        <div className="about-copy">
          <p className="section-label">About me</p>
          <h2>Developer by trade.<br />Designer by experience.</h2>
          <p>
            I&apos;m Felipe Gonzalez, a Full-Stack Web Developer with more than
            four years of experience building responsive web products. I work
            across React and Next.js interfaces, Node.js APIs, databases, and
            product design.
          </p>
          <p>
            I started as a Web Designer, so I understand both sides of a
            digital product: how it should work and how it should feel. Today,
            development is my primary craft—and design helps me build clearer,
            more thoughtful software.
          </p>
          <a
            className="text-link"
            href="https://felipegonzalez.dev/felipe-gonzalez-resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download résumé <ArrowDownToLine size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="about-values">
        {values.map((value) => {
          const Icon = icons[value.icon];
          return (
            <article key={value.title}>
              <Icon className="value-mark" size={22} strokeWidth={2} aria-hidden="true" />
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
