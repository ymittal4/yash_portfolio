export interface CaseStudyCardProps {
  company?: string;
  year?: string;
  href?: string;
  project?: string;
  bgColor?: string;
  videoSrc?: string;
  videoPoster?: string;
}

export function CaseStudyCard({
  company = "Project",
  year = "2025",
  href,
  project = "Preview",
  bgColor,
  videoSrc,
  videoPoster,
}: CaseStudyCardProps) {
  const content = (
    <article 
        className={`p-40 sm:p-24`}
        style={{ backgroundColor: bgColor }}
    >
      <div
        className={`relative w-full bg-white overflow-hidden rounded-lg h-[680px]`}
      >
        {videoSrc ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={videoPoster}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="w-full h-full grid place-items-center text-zinc-300">
            <span className="text-xs select-none">Placeholder</span>
          </div>
        )}
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
