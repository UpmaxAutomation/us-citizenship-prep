export interface VocabWord {
  word: string;
  category:
    | "people"
    | "civics"
    | "places"
    | "holidays"
    | "question-words"
    | "verbs"
    | "function-words"
    | "content-words"
    | "months";
}

export interface VocabSentence {
  text: string;
  type: "reading" | "writing";
}

// ==========================================================================
// READING VOCABULARY (58 words)
// ==========================================================================

export const readingVocabulary: VocabWord[] = [
  // ---------- People ----------
  { word: "Abraham Lincoln", category: "people" },
  { word: "George Washington", category: "people" },

  // ---------- Civics ----------
  { word: "American flag", category: "civics" },
  { word: "Bill of Rights", category: "civics" },
  { word: "capital", category: "civics" },
  { word: "citizen", category: "civics" },
  { word: "city", category: "civics" },
  { word: "Congress", category: "civics" },
  { word: "country", category: "civics" },
  { word: "Father of Our Country", category: "civics" },
  { word: "government", category: "civics" },
  { word: "President", category: "civics" },
  { word: "right", category: "civics" },
  { word: "Senators", category: "civics" },
  { word: "state/states", category: "civics" },
  { word: "White House", category: "civics" },

  // ---------- Places ----------
  { word: "America", category: "places" },
  { word: "United States", category: "places" },
  { word: "U.S.", category: "places" },

  // ---------- Holidays ----------
  { word: "Presidents' Day", category: "holidays" },
  { word: "Memorial Day", category: "holidays" },
  { word: "Flag Day", category: "holidays" },
  { word: "Independence Day", category: "holidays" },
  { word: "Labor Day", category: "holidays" },
  { word: "Columbus Day", category: "holidays" },
  { word: "Thanksgiving", category: "holidays" },

  // ---------- Question Words ----------
  { word: "How", category: "question-words" },
  { word: "What", category: "question-words" },
  { word: "When", category: "question-words" },
  { word: "Where", category: "question-words" },
  { word: "Who", category: "question-words" },
  { word: "Why", category: "question-words" },

  // ---------- Verbs ----------
  { word: "can", category: "verbs" },
  { word: "come", category: "verbs" },
  { word: "do/does", category: "verbs" },
  { word: "elects", category: "verbs" },
  { word: "have/has", category: "verbs" },
  { word: "is/are/was/be", category: "verbs" },
  { word: "lives/lived", category: "verbs" },
  { word: "meet", category: "verbs" },
  { word: "pay", category: "verbs" },
  { word: "vote", category: "verbs" },
  { word: "want", category: "verbs" },

  // ---------- Function Words ----------
  { word: "a", category: "function-words" },
  { word: "for", category: "function-words" },
  { word: "here", category: "function-words" },
  { word: "in", category: "function-words" },
  { word: "of", category: "function-words" },
  { word: "on", category: "function-words" },
  { word: "the", category: "function-words" },
  { word: "to", category: "function-words" },
  { word: "we", category: "function-words" },

  // ---------- Content Words ----------
  { word: "colors", category: "content-words" },
  { word: "dollar bill", category: "content-words" },
  { word: "first", category: "content-words" },
  { word: "largest", category: "content-words" },
  { word: "many", category: "content-words" },
  { word: "most", category: "content-words" },
  { word: "name", category: "content-words" },
  { word: "north", category: "content-words" },
  { word: "one", category: "content-words" },
  { word: "people", category: "content-words" },
  { word: "second", category: "content-words" },
  { word: "south", category: "content-words" },
];

// ==========================================================================
// WRITING VOCABULARY (75 words)
// ==========================================================================

export const writingVocabulary: VocabWord[] = [
  // ---------- People ----------
  { word: "Adams", category: "people" },
  { word: "Lincoln", category: "people" },
  { word: "Washington", category: "people" },

  // ---------- Civics ----------
  { word: "American Indians", category: "civics" },
  { word: "capital", category: "civics" },
  { word: "citizens", category: "civics" },
  { word: "Civil War", category: "civics" },
  { word: "Congress", category: "civics" },
  { word: "Father of Our Country", category: "civics" },
  { word: "flag", category: "civics" },
  { word: "free", category: "civics" },
  { word: "freedom of speech", category: "civics" },
  { word: "President", category: "civics" },
  { word: "right", category: "civics" },
  { word: "Senators", category: "civics" },
  { word: "state/states", category: "civics" },
  { word: "White House", category: "civics" },

  // ---------- Places ----------
  { word: "Alaska", category: "places" },
  { word: "California", category: "places" },
  { word: "Canada", category: "places" },
  { word: "Delaware", category: "places" },
  { word: "Mexico", category: "places" },
  { word: "New York City", category: "places" },
  { word: "United States", category: "places" },
  { word: "Washington", category: "places" },
  { word: "Washington, D.C.", category: "places" },

  // ---------- Months ----------
  { word: "February", category: "months" },
  { word: "May", category: "months" },
  { word: "June", category: "months" },
  { word: "July", category: "months" },
  { word: "September", category: "months" },
  { word: "October", category: "months" },
  { word: "November", category: "months" },

  // ---------- Holidays ----------
  { word: "Presidents' Day", category: "holidays" },
  { word: "Memorial Day", category: "holidays" },
  { word: "Flag Day", category: "holidays" },
  { word: "Independence Day", category: "holidays" },
  { word: "Labor Day", category: "holidays" },
  { word: "Columbus Day", category: "holidays" },
  { word: "Thanksgiving", category: "holidays" },

  // ---------- Verbs ----------
  { word: "can", category: "verbs" },
  { word: "come", category: "verbs" },
  { word: "elect", category: "verbs" },
  { word: "have/has", category: "verbs" },
  { word: "is/was/be", category: "verbs" },
  { word: "lives/lived", category: "verbs" },
  { word: "meets", category: "verbs" },
  { word: "pay", category: "verbs" },
  { word: "vote", category: "verbs" },

  // ---------- Function Words ----------
  { word: "and", category: "function-words" },
  { word: "during", category: "function-words" },
  { word: "for", category: "function-words" },
  { word: "here", category: "function-words" },
  { word: "in", category: "function-words" },
  { word: "of", category: "function-words" },
  { word: "on", category: "function-words" },
  { word: "the", category: "function-words" },
  { word: "to", category: "function-words" },
  { word: "we", category: "function-words" },

  // ---------- Content Words ----------
  { word: "blue", category: "content-words" },
  { word: "dollar bill", category: "content-words" },
  { word: "fifty/50", category: "content-words" },
  { word: "first", category: "content-words" },
  { word: "largest", category: "content-words" },
  { word: "most", category: "content-words" },
  { word: "north", category: "content-words" },
  { word: "one", category: "content-words" },
  { word: "one hundred/100", category: "content-words" },
  { word: "people", category: "content-words" },
  { word: "red", category: "content-words" },
  { word: "second", category: "content-words" },
  { word: "south", category: "content-words" },
  { word: "taxes", category: "content-words" },
  { word: "white", category: "content-words" },
];

// ==========================================================================
// SAMPLE READING SENTENCES (11)
// ==========================================================================

export const readingSentences: VocabSentence[] = [
  { text: "Abraham Lincoln was the most famous President.", type: "reading" },
  { text: "George Washington is the Father of Our Country.", type: "reading" },
  { text: "What is the capital of the United States?", type: "reading" },
  { text: "Where does the President live?", type: "reading" },
  { text: "The President lives in the White House.", type: "reading" },
  { text: "Who elects Congress?", type: "reading" },
  { text: "When is Independence Day?", type: "reading" },
  { text: "Why do we have the Bill of Rights?", type: "reading" },
  { text: "How many Senators does Congress have?", type: "reading" },
  { text: "We vote for the President in November.", type: "reading" },
  {
    text: "The American flag has red, white, and blue colors.",
    type: "reading",
  },
];

// ==========================================================================
// SAMPLE WRITING SENTENCES (11)
// ==========================================================================

export const writingSentences: VocabSentence[] = [
  { text: "Adams was the second President.", type: "writing" },
  { text: "Lincoln was President during the Civil War.", type: "writing" },
  { text: "Washington is on the dollar bill.", type: "writing" },
  {
    text: "The United States flag is red, white, and blue.",
    type: "writing",
  },
  { text: "Citizens have the right to vote.", type: "writing" },
  { text: "Congress meets in Washington, D.C.", type: "writing" },
  { text: "Alaska is the largest state.", type: "writing" },
  { text: "Delaware was the first state.", type: "writing" },
  { text: "Independence Day is in July.", type: "writing" },
  { text: "Presidents' Day is in February.", type: "writing" },
  { text: "We pay taxes to the government.", type: "writing" },
];
