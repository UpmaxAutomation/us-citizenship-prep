"use client";

import { subcategories } from "@/app/data/questions";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  selectedSubcategory: string | null;
  onSelect: (category: string | null) => void;
  onSelectSubcategory: (subcategory: string | null) => void;
  questionCounts: Record<string, number>;
  subcategoryCounts: Record<string, number>;
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

const subcategoryGradients: Record<string, string> = {
  "American Government": "border-blue-500/20 text-blue-400",
  "American History": "border-red-500/20 text-red-400",
  "Symbols and Holidays": "border-emerald-500/20 text-emerald-400",
};

export default function CategoryFilter({
  categories,
  selectedCategory,
  selectedSubcategory,
  onSelect,
  onSelectSubcategory,
  questionCounts,
  subcategoryCounts,
}: CategoryFilterProps) {
  const activeSubs = selectedCategory ? subcategories[selectedCategory] || [] : [];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-2">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => { onSelect(null); onSelectSubcategory(null); }}
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
            onClick={() => {
              if (cat === selectedCategory) {
                onSelect(null);
                onSelectSubcategory(null);
              } else {
                onSelect(cat);
                onSelectSubcategory(null);
              }
            }}
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

      {/* Subcategory pills */}
      {selectedCategory && activeSubs.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pl-1">
          <button
            onClick={() => onSelectSubcategory(null)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
              selectedSubcategory === null
                ? `bg-white/5 ${subcategoryGradients[selectedCategory]}`
                : "border-slate-800 text-slate-500 hover:text-slate-300"
            }`}
          >
            All {selectedCategory.split(" ").pop()}
          </button>
          {activeSubs.map((sub) => (
            <button
              key={sub}
              onClick={() => onSelectSubcategory(sub === selectedSubcategory ? null : sub)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                selectedSubcategory === sub
                  ? `bg-white/5 ${subcategoryGradients[selectedCategory]}`
                  : "border-slate-800 text-slate-500 hover:text-slate-300"
              }`}
            >
              {sub} ({subcategoryCounts[sub] || 0})
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
