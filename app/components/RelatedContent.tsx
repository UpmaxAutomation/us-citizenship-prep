import Link from "next/link";

interface RelatedPage {
  href: string;
  title: string;
  description: string;
}

export default function RelatedContent({ pages }: { pages: RelatedPage[] }) {
  return (
    <section className="mt-12">
      <h2 className="text-lg font-semibold text-white mb-4">Related Resources</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group block rounded-xl bg-slate-900/50 border border-slate-800/50 p-4 hover:border-blue-500/30 hover:bg-slate-800/30 transition-colors"
          >
            <p className="font-medium text-slate-200 group-hover:text-white transition-colors text-sm">
              {page.title}
            </p>
            <p className="text-xs text-slate-500 mt-1 line-clamp-2">
              {page.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
