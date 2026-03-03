"use client";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelect: (category: string | null) => void;
  questionCounts: Record<string, number>;
}

const categoryIcons: Record<string, string> = {
  "American Government": "\u{1F3DB}\uFE0F",
  "American History": "\u{1F4DC}",
  "Symbols and Holidays": "\u{1F5FD}",
};

const categoryGradients: Record<string, string> = {
  "American Government": "from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-300",
  "American History": "from-red-500/20 to-orange-500/20 border-red-500/30 text-red-300",
  "Symbols and Holidays": "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300",
};

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelect,
  questionCounts,
}: CategoryFilterProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelect(null)}
          className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
            selectedCategory === null
              ? "bg-white/10 border border-white/20 text-white"
              : "bg-slate-900/30 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/50"
          }`}
        >
          All ({Object.values(questionCounts).reduce((a, b) => a + b, 0)})
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat === selectedCategory ? null : cat)}
            className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${
              selectedCategory === cat
                ? `bg-gradient-to-r ${categoryGradients[cat]}`
                : "bg-slate-900/30 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}
          >
            {categoryIcons[cat]} {cat} ({questionCounts[cat] || 0})
          </button>
        ))}
      </div>
    </div>
  );
}
