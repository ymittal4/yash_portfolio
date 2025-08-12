import { CaseStudyCard } from "@/components/CaseStudyCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto px-4 sm:px-6">
        <header className="flex items-center justify-between max-w-5xl mx-auto py-40">
          <div className="space-y-1">
            <h1 className="text-md font-medium text-zinc-900">Yash Mittal</h1>
            <p className="text-sm text-zinc-600">Founding designer at Windsurf</p>
            <p className="text-sm text-zinc-500">Based in sunny San Francisco</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://x.com/Yash_471" target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 text-zinc-600 hover:bg-zinc-50" aria-label="Twitter">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="mailto:yash082002@gmail.com?subject=Hello from your portfolio" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 text-zinc-600 hover:bg-zinc-50" aria-label="Email">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
        </header>

        <section className="space-y-7">
          <CaseStudyCard 
            project="Windsurf Onboarding" 
            company="Shorter, more effective in-product education to increase user activation" 
            year="2024" 
            bgColor="#F1F2F5"
            videoSrc="/videos/windsurf-onboarding.mp4"
            videoPoster="/videos/windsurf-onboarding-poster.jpg"
          />
          <CaseStudyCard 
            project="Code diff review" 
            company="Code diff review" 
            year="2025" 
            bgColor="#F1F2F5"
            videoSrc="/videos/code-diff-review.mp4"
            videoPoster="/videos/code-diff-review-poster.jpg"
          />
        </section>
      </main>
    </div>
  );
}
