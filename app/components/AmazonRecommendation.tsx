import {
  affiliateProducts,
  type AffiliateProduct,
} from "@/app/data/affiliate-products";

interface AmazonRecommendationProps {
  category: AffiliateProduct["category"];
  maxProducts?: number;
}

const AFFILIATE_TAG = "uscitprep-20";

export default function AmazonRecommendation({
  category,
  maxProducts = 3,
}: AmazonRecommendationProps) {
  const products = affiliateProducts
    .filter((p) => p.category === category)
    .slice(0, maxProducts);

  if (products.length === 0) return null;

  return (
    <section className="my-12">
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-semibold text-white mb-1">
          Recommended Study Materials
        </h3>
        <p className="text-slate-500 text-xs mb-6">
          As an Amazon Associate, we earn from qualifying purchases. These
          recommendations help support free study tools.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <a
              key={product.asin}
              href={`https://www.amazon.com/dp/${product.asin}?tag=${AFFILIATE_TAG}`}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="group block rounded-xl bg-slate-800/50 border border-slate-700/50 p-4 hover:border-blue-500/40 hover:bg-slate-800/80 transition-all"
            >
              <h4 className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors line-clamp-2">
                {product.title}
              </h4>
              <p className="mt-2 text-xs text-slate-400 line-clamp-3">
                {product.description}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs text-blue-400 font-medium">
                View on Amazon
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
