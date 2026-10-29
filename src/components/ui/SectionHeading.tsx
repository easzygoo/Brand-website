import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** Heading level; sections default to h2. */
  as?: "h1" | "h2";
  id?: string;
  tone?: "default" | "dark";
};

export function Eyebrow({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "dark" }) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase ${
        tone === "dark" ? "text-brand-yellow" : "text-brand-green"
      }`}
    >
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${tone === "dark" ? "bg-brand-yellow" : "bg-brand-green"}`} />
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, description, align = "left", as = "h2", id, tone = "default" }: Props) {
  const Tag = as;
  const centered = align === "center";
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <Tag
        id={id}
        className={`mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${
          tone === "dark" ? "text-white" : "text-brand-navy"
        }`}
      >
        {title}
      </Tag>
      {description ? (
        <p className={`mt-4 text-base leading-relaxed text-pretty sm:text-lg ${tone === "dark" ? "text-white/75" : "text-muted"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
