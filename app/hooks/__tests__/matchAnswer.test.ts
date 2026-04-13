import { describe, it, expect } from "vitest";
import { matchAnswer } from "../useVoiceRecognition";

describe("matchAnswer", () => {
  const answers = ["the Constitution", "the supreme law of the land"];

  it("returns exact match with confidence 1", () => {
    const result = matchAnswer("the Constitution", answers);
    expect(result.matched).toBe(true);
    expect(result.bestMatch).toBe("the Constitution");
    expect(result.confidence).toBe(1);
  });

  it("matches case-insensitively", () => {
    const result = matchAnswer("THE CONSTITUTION", answers);
    expect(result.matched).toBe(true);
    expect(result.confidence).toBe(1);
  });

  it("strips stop words before comparing", () => {
    // "the" is stripped from both sides, leaving "constitution" = "constitution"
    const result = matchAnswer("constitution", answers);
    expect(result.matched).toBe(true);
  });

  it("matches when spoken contains the answer", () => {
    const result = matchAnswer(
      "I think it is the Constitution of the United States",
      answers
    );
    expect(result.matched).toBe(true);
  });

  it("returns no match for empty input", () => {
    const result = matchAnswer("", answers);
    expect(result.matched).toBe(false);
    expect(result.bestMatch).toBeNull();
    expect(result.confidence).toBe(0);
  });

  it("returns no match for whitespace-only input", () => {
    const result = matchAnswer("   ", answers);
    expect(result.matched).toBe(false);
  });

  it("handles multi-alternative input (array of strings)", () => {
    // First alternative is wrong, second is correct
    const result = matchAnswer(
      ["something random", "the Constitution"],
      answers
    );
    expect(result.matched).toBe(true);
    expect(result.bestMatch).toBe("the Constitution");
    expect(result.confidence).toBe(1);
  });

  it("scores below threshold for unrelated answers", () => {
    const result = matchAnswer("pizza and hamburgers", answers);
    expect(result.matched).toBe(false);
    expect(result.confidence).toBeLessThan(0.6);
  });

  it("does partial word matching for long words", () => {
    // "constitutional" should partially match "constitution"
    const result = matchAnswer("constitutional", answers);
    expect(result.matched).toBe(true);
  });

  it("handles multi-word correct answers with word overlap", () => {
    const multiAnswers = ["freedom of speech", "freedom of religion", "freedom of the press"];
    const result = matchAnswer("freedom of speech", multiAnswers);
    expect(result.matched).toBe(true);
    expect(result.bestMatch).toBe("freedom of speech");
  });

  it("picks best match across multiple correct answers", () => {
    const result = matchAnswer("supreme law of the land", answers);
    expect(result.matched).toBe(true);
    expect(result.bestMatch).toBe("the supreme law of the land");
  });
});
