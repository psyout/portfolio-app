import { SectionLabel } from "./section-label";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[calc(100svh-88px)] overflow-hidden px-[4vw] pb-[42px] pt-[clamp(50px,7vw,105px)] min-[761px]:min-h-[calc(88svh-88px)] min-[761px]:pt-[clamp(52px,5vw,78px)] max-[760px]:min-h-[calc(100svh-72px)]"
      id="top"
    >
      <SectionLabel>Full-stack developer · Design background</SectionLabel>
      <h1 className="relative z-[1] my-[4vh] mb-[11vh] max-w-[1050px] text-[clamp(66px,10.4vw,160px)] font-medium leading-[.82] tracking-[-.072em] min-[761px]:my-[3vh] min-[761px]:mb-[7vh] min-[761px]:max-w-[980px] min-[761px]:text-[clamp(58px,7.2vw,112px)] min-[761px]:leading-[.88] min-[761px]:tracking-[-.065em] max-[760px]:mt-[8vh]">
        Code that works.<br />Design that connects.
      </h1>
      <div className="relative z-[1] flex items-end justify-end gap-[9vw] max-[760px]:justify-between">
        <p className="m-0 max-w-[460px] text-[clamp(17px,1.5vw,22px)] leading-[1.45]">
          I&apos;m Felipe, a Vancouver-based developer who turns complex ideas
          into clear, accessible digital products.
        </p>
        <a className="grid size-[66px] shrink-0 place-items-center rounded-full border border-portfolio-ink text-[25px] no-underline" href="#work" aria-label="Explore selected work">↓</a>
      </div>
      <div className="blueprint-lines absolute right-[-5vw] top-[13%] aspect-square w-[46vw] rotate-[14deg] border border-[rgb(49_89_238_/_18%)] max-[760px]:right-[-30vw] max-[760px]:top-[30%] max-[760px]:w-[80vw]" aria-hidden="true" />
    </section>
  );
}
