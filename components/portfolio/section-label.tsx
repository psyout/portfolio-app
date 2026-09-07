import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
};

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p className={`m-0 text-xs font-bold uppercase tracking-[.16em] text-portfolio-title ${className}`}>
      {children}
    </p>
  );
}
