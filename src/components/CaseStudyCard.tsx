export interface CaseStudyCardProps {
  company?: string;
  year?: string;
  href?: string;
  project?: string;
  bgColor?: string;
}

export function CaseStudyCard({
  company = "Project",
  year = "2025",
  href,
  project = "Preview",
  bgColor,
}: CaseStudyCardProps) {
  const content = (
    <article 
        className={`p-40 sm:p-24`}
        style={{ backgroundColor: bgColor }}
    >
      <div
        className={`relative w-full bg-white grid place-items-center text-zinc-300 h-[680px]`}
      >
        <span className="text-xs select-none">Placeholder</span>
      </div>
      <div className="mt-2 text-[14px] pt-12 font-medium text-violet-600 text-center">{project}</div>
      <div className="mt-2 text-center text-[12px] text-zinc-500">
        {company} • {year}
      </div>
    </article>
  );

  return href ? (
    <a href={href} className="block hover:opacity-95 transition-opacity">
      {content}
    </a>
  ) : (
    content
  );
}
