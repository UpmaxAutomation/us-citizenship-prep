export interface AffiliateProduct {
  title: string;
  description: string;
  asin: string;
  imageAlt: string;
  category: "study-aids" | "test-prep" | "english-learning" | "interview-prep";
}

export const affiliateProducts: AffiliateProduct[] = [
  {
    title: "US Citizenship Test Study Guide 2024-2025",
    description:
      "Complete study guide with all 128 civics questions, English reading and writing practice, and full-length practice tests.",
    asin: "B0CQ5KBFWJ",
    imageAlt: "US Citizenship Test Study Guide book cover",
    category: "test-prep",
  },
  {
    title: "USCIS Civics Flash Cards for the Naturalization Test",
    description:
      "Official USCIS flash cards with all 128 civics questions. Portable format perfect for studying on the go.",
    asin: "B0BTPXBPLF",
    imageAlt: "USCIS Civics Flash Cards box",
    category: "study-aids",
  },
  {
    title: "US Citizenship Test Practice Questions",
    description:
      "Over 500 practice questions organized by category with detailed answer explanations.",
    asin: "B0CPFTNGJL",
    imageAlt: "US Citizenship Practice Questions book cover",
    category: "test-prep",
  },
  {
    title: "English for Everyone: Level 1 Beginner Course Book",
    description:
      "Visual English learning guide perfect for citizenship test English preparation. Clear illustrations and practice exercises.",
    asin: "1465447628",
    imageAlt: "English for Everyone Level 1 book cover",
    category: "english-learning",
  },
  {
    title: "Easy American English: Basic ESL for Citizenship",
    description:
      "ESL workbook focused on the English skills needed for the citizenship interview — reading, writing, and speaking.",
    asin: "1957149140",
    imageAlt: "Easy American English ESL book cover",
    category: "english-learning",
  },
  {
    title: "US Citizenship Interview Guide",
    description:
      "Step-by-step guide to the naturalization interview process with sample questions, tips, and what to expect.",
    asin: "B0CPDLZQNX",
    imageAlt: "US Citizenship Interview Guide book cover",
    category: "interview-prep",
  },
  {
    title: "Barron's US Citizenship Test",
    description:
      "Comprehensive test prep from Barron's with practice tests, flashcards, and audio for the English portion.",
    asin: "1506281451",
    imageAlt: "Barron's US Citizenship Test book cover",
    category: "test-prep",
  },
  {
    title: "USCIS Naturalization Test Flash Cards",
    description:
      "Compact flash card set with all 128 questions on one side and answers on the other. Great for daily review.",
    asin: "B0CJ4BKX8D",
    imageAlt: "Naturalization Test Flash Cards",
    category: "study-aids",
  },
  {
    title: "American English File: Beginner Student Book",
    description:
      "Popular ESL textbook with integrated skills practice for reading, writing, listening, and speaking English.",
    asin: "0194906264",
    imageAlt: "American English File Beginner book cover",
    category: "english-learning",
  },
  {
    title: "Civics Questions & Answers for the Naturalization Test",
    description:
      "Pocket-sized reference with all official USCIS civics questions. Ideal for quick review before your interview.",
    asin: "B0C8YKVXQT",
    imageAlt: "Civics Questions pocket book cover",
    category: "study-aids",
  },
  {
    title: "How to Prepare for the US Citizenship Interview",
    description:
      "Detailed interview preparation guide covering N-400 review, English test tips, and common interview scenarios.",
    asin: "B0D3Q7DJPT",
    imageAlt: "US Citizenship Interview Preparation book cover",
    category: "interview-prep",
  },
  {
    title: "Pass the US Citizenship Exam Workbook",
    description:
      "Hands-on workbook with fill-in exercises, vocabulary building, and practice tests for all portions of the exam.",
    asin: "B0CXNPLWHN",
    imageAlt: "Pass the US Citizenship Exam Workbook cover",
    category: "test-prep",
  },
];
