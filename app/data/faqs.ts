export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const faqCategories = [
  "About the Test",
  "Eligibility",
  "Study Tips",
  "Interview Day",
  "Fees & Filing",
  "After Naturalization",
] as const;

export const allFaqs: FAQ[] = [
  // ============================================================
  // About the Test
  // ============================================================
  {
    question: "How many questions are on the 2025 US citizenship test?",
    answer:
      "The 2025 USCIS civics test draws from a pool of 128 questions. During your interview, a USCIS officer will ask up to 20 questions selected randomly from this pool. You need to answer at least 12 correctly (60%) to pass the civics portion.",
    category: "About the Test",
  },
  {
    question: "What is the passing score for the citizenship test?",
    answer:
      "You need to answer 12 out of 20 questions correctly, which is a 60% passing rate. The officer stops asking questions once you reach 12 correct answers. You can browse all 128 questions on our questions page to see exactly what you need to learn.",
    category: "About the Test",
  },
  {
    question: "Is the citizenship test oral or written?",
    answer:
      "The civics portion is entirely oral. The USCIS officer asks each question verbally and you respond out loud. There are no multiple-choice options or written answers for the civics test. However, there is a separate English reading and writing component.",
    category: "About the Test",
  },
  {
    question: "What topics does the citizenship test cover?",
    answer:
      "The test covers three main categories: American Government (questions about the Constitution, branches of government, and rights), American History (colonial period through modern era), and Symbols and Holidays (national symbols, geography, and federal holidays). See our study guide for a full breakdown.",
    category: "About the Test",
  },
  {
    question: "How long does the citizenship test take?",
    answer:
      "The entire naturalization interview typically lasts 20 to 45 minutes. This includes the civics test, the English reading and writing test, and a review of your N-400 application. The civics portion itself usually takes 5 to 10 minutes depending on how quickly you answer.",
    category: "About the Test",
  },
  {
    question: "Can I ask the officer to repeat a question during the test?",
    answer:
      "Yes, you may ask the USCIS officer to repeat any question. The officer can say the question again but cannot rephrase it or give you hints. There is no penalty for asking a question to be repeated, so do not hesitate if you need to hear it again.",
    category: "About the Test",
  },
  {
    question: "Is the citizenship test multiple choice?",
    answer:
      "No. The civics test is open-ended and oral. The officer asks questions verbally and you must answer from memory. Many questions have multiple acceptable answers, but you only need to provide one correct answer. Use our practice test to experience the format.",
    category: "About the Test",
  },
  {
    question: "Has the citizenship test been updated for 2025?",
    answer:
      "Yes. In October 2025, USCIS introduced a significantly updated test. The question pool expanded from 100 to 128, the number of questions asked doubled from 10 to 20, and new topics were added including geography and recent American history. The passing threshold remains at 60%.",
    category: "About the Test",
  },

  // ============================================================
  // Eligibility
  // ============================================================
  {
    question: "What is the minimum age to apply for US citizenship?",
    answer:
      "You must be at least 18 years old at the time you file Form N-400. Children under 18 may automatically acquire citizenship through their parents in certain situations, but they cannot independently apply for naturalization.",
    category: "Eligibility",
  },
  {
    question:
      "How many years do I need a green card before applying for citizenship?",
    answer:
      "Most applicants must have been a lawful permanent resident (green card holder) for at least 5 years. If you are married to a US citizen and living together, the requirement is reduced to 3 years. You can file your application up to 90 days before meeting the requirement.",
    category: "Eligibility",
  },
  {
    question:
      "Can I apply for citizenship if I am married to a US citizen?",
    answer:
      "Yes, and you may qualify for a shorter residency requirement. If you have been married to and living with a US citizen for at least 3 years, and you have had your green card for at least 3 years, you can apply under the 3-year rule instead of the standard 5 years.",
    category: "Eligibility",
  },
  {
    question:
      "Will a criminal record prevent me from becoming a US citizen?",
    answer:
      "It depends on the type of offense. Minor traffic violations generally will not affect your application. However, certain crimes can make you permanently ineligible, and others may require you to wait longer. You must disclose all arrests and convictions on your N-400. Consult an immigration attorney if you have any criminal history.",
    category: "Eligibility",
  },
  {
    question: "Is dual citizenship allowed in the United States?",
    answer:
      "The United States does permit dual citizenship, meaning you can become a US citizen while retaining your original nationality (if your home country also allows it). However, the Oath of Allegiance requires you to renounce allegiance to foreign states. The US government does not enforce this renunciation against other countries.",
    category: "Eligibility",
  },
  {
    question: "What is the continuous residence requirement?",
    answer:
      "You must have lived continuously in the United States for the required period (5 years or 3 years if married to a US citizen). Trips outside the US of less than 6 months generally do not break continuity. Trips of 6 to 12 months may break continuity, and trips over 12 months almost always do.",
    category: "Eligibility",
  },
  {
    question: "Do I need to speak English to become a citizen?",
    answer:
      "Yes, most applicants must demonstrate basic English proficiency in reading, writing, and speaking. Your speaking ability is assessed throughout the interview. However, applicants who are 50+ with 20+ years of permanent residency, or 55+ with 15+ years, may be exempt from the English requirement.",
    category: "Eligibility",
  },
  {
    question: "What is the 65/20 exemption for the citizenship test?",
    answer:
      "If you are 65 years or older and have been a permanent resident for at least 20 years, you qualify for a reduced civics test of only 20 designated questions (instead of 128). You may also take the test in your native language with an interpreter. Visit our senior exemption page for the full list of designated questions.",
    category: "Eligibility",
  },

  // ============================================================
  // Study Tips
  // ============================================================
  {
    question: "How long should I study for the citizenship test?",
    answer:
      "Most applicants need 4 to 8 weeks of consistent study to feel prepared. We recommend 30 to 60 minutes of daily practice using a combination of flashcards and practice tests. If English is not your first language, you may want to allow extra time for the reading and writing portions.",
    category: "Study Tips",
  },
  {
    question: "What is the best way to study for the citizenship test?",
    answer:
      "The most effective method combines spaced repetition flashcards with regular practice tests. Start by learning questions by category, then take full-length practice tests to simulate the real experience. Our free study tool uses spaced repetition to automatically focus on the questions you find most difficult.",
    category: "Study Tips",
  },
  {
    question: "Can I study for the citizenship test in my native language?",
    answer:
      "You can use study materials in your native language to understand the content, but remember that the test itself must be taken in English (unless you qualify for the 65/20 exemption). Practice answering questions in English to build confidence for the actual interview.",
    category: "Study Tips",
  },
  {
    question:
      "Are flashcards or reading guides more effective for studying?",
    answer:
      "Flashcards with spaced repetition are generally more effective because they actively test your recall, which is exactly what the oral exam requires. Reading guides are helpful for context and understanding, but active recall through flashcards builds stronger memory. Use our flashcard study tool for the best results.",
    category: "Study Tips",
  },
  {
    question: "Do practice tests actually help with the real exam?",
    answer:
      "Absolutely. Practice tests are one of the most effective preparation methods because they simulate the real interview format. They help you get comfortable with the oral question-and-answer style, identify weak areas, and build confidence. We recommend taking at least 2 to 3 practice tests per week during your study period.",
    category: "Study Tips",
  },
  {
    question: "What are the hardest questions on the citizenship test?",
    answer:
      "Applicants most commonly struggle with questions about constitutional amendments, the number of US representatives, Supreme Court justices, and questions requiring state-specific answers (your governor, senators, and state capital). Focus extra study time on the American Government category, which has the most questions.",
    category: "Study Tips",
  },
  {
    question: "Should I study all 128 questions or just the most common ones?",
    answer:
      "You should study all 128 questions. The USCIS officer selects 20 questions randomly from the full pool, so any question could appear on your test. There is no way to predict which ones will be asked. Our printable study guide covers every question organized by category for efficient review.",
    category: "Study Tips",
  },
  {
    question: "How do I remember state-specific answers for the test?",
    answer:
      "Several questions require answers specific to your state, including your governor, US senators, and state capital. Write these down and review them daily. You can look up your state-specific answers on our state information page. Make sure the information is current, as officials can change between elections.",
    category: "Study Tips",
  },

  // ============================================================
  // Interview Day
  // ============================================================
  {
    question: "What documents should I bring to my citizenship interview?",
    answer:
      "Bring your appointment notice (Form I-797C), your green card, a valid photo ID (passport or state ID), your passport and any travel documents, and two passport-style photos. Also bring tax returns for the last 5 years, Selective Service registration (if applicable), and any court records if relevant. Check our interview checklist for a complete list.",
    category: "Interview Day",
  },
  {
    question: "What should I wear to my citizenship interview?",
    answer:
      "There is no official dress code, but business casual attire is recommended. Dressing professionally shows respect for the process and can help you feel more confident. Avoid overly casual clothing like shorts, flip-flops, or clothing with offensive messages.",
    category: "Interview Day",
  },
  {
    question: "How long does the citizenship interview take?",
    answer:
      "The entire interview typically lasts 20 to 45 minutes. This includes the civics test (5 to 10 minutes), the English reading and writing test (a few minutes), and a review of your N-400 application and supporting documents. Wait times at the USCIS office may add additional time before your interview begins.",
    category: "Interview Day",
  },
  {
    question: "Can I bring a lawyer to my citizenship interview?",
    answer:
      "Yes, you have the right to bring an attorney or accredited representative to your naturalization interview. They can observe the process and advise you, but they cannot answer questions on your behalf. If you qualify for the language exemption, you may also bring an interpreter.",
    category: "Interview Day",
  },
  {
    question: "What if I am too nervous during the interview?",
    answer:
      "It is completely normal to feel nervous. Take deep breaths, speak slowly, and remember that you can ask the officer to repeat any question. The USCIS officer understands that applicants are often anxious. If you have studied well, your preparation will carry you through. Taking practice tests beforehand helps reduce interview anxiety.",
    category: "Interview Day",
  },
  {
    question: "What happens after the citizenship interview?",
    answer:
      "You will receive one of three outcomes: approved (you will be scheduled for an oath ceremony), continued (the officer needs more information or documentation), or denied (you did not meet the requirements). Most well-prepared applicants are approved on the same day and receive an oath ceremony date.",
    category: "Interview Day",
  },
  {
    question: "What happens if I fail the citizenship test?",
    answer:
      "If you fail the civics or English portion, you will be scheduled for a retest within 60 to 90 days. You only retake the part you failed. If you fail the retest as well, your application is denied, but you may reapply by filing a new N-400 and paying the fee again.",
    category: "Interview Day",
  },
  {
    question: "Can I reschedule my citizenship interview?",
    answer:
      "Yes, you can request to reschedule by responding to your appointment notice before the interview date. However, rescheduling may significantly delay your application. If you miss your interview without rescheduling, USCIS may deny your application. It is best to attend your scheduled appointment if at all possible.",
    category: "Interview Day",
  },

  // ============================================================
  // Fees & Filing
  // ============================================================
  {
    question: "How much does it cost to apply for US citizenship?",
    answer:
      "The total filing fee for Form N-400 is $760, which includes a $710 application fee and a $85 biometrics fee. This fee is non-refundable regardless of the outcome. Fee waivers are available for applicants who demonstrate financial hardship.",
    category: "Fees & Filing",
  },
  {
    question: "Can I get a fee waiver for the citizenship application?",
    answer:
      "Yes. You may qualify for a fee waiver by filing Form I-912 if you receive a means-tested government benefit, if your household income is at or below 150% of the federal poverty guidelines, or if you are experiencing financial hardship. You must provide supporting documentation with your waiver request.",
    category: "Fees & Filing",
  },
  {
    question: "How do I pay the citizenship application fee?",
    answer:
      "You can pay by personal check, cashier's check, money order, or credit card (using Form G-1450). If filing online through your USCIS account, you can pay by credit card, debit card, or bank transfer. Do not send cash. Make checks payable to the U.S. Department of Homeland Security.",
    category: "Fees & Filing",
  },
  {
    question: "How long does the citizenship application process take?",
    answer:
      "Processing times vary by USCIS office, but most applications take 8 to 14 months from filing to oath ceremony. This includes time for biometrics (1 to 2 months after filing), the interview (4 to 10 months after filing), and the oath ceremony (usually within a few weeks of approval).",
    category: "Fees & Filing",
  },
  {
    question: "Can I expedite my citizenship application?",
    answer:
      "USCIS does not offer a general expedite option for N-400 applications. However, you may request expedited processing in certain circumstances such as severe financial loss, urgent humanitarian reasons, or if you are an active-duty military member. These requests are evaluated on a case-by-case basis.",
    category: "Fees & Filing",
  },
  {
    question: "What is the biometrics appointment and how much does it cost?",
    answer:
      "The biometrics appointment is when USCIS collects your fingerprints, photograph, and signature for background checks. The $85 biometrics fee is included in the total N-400 filing fee. You will receive a notice with the date, time, and location of your appointment, usually 2 to 4 weeks after filing.",
    category: "Fees & Filing",
  },

  // ============================================================
  // After Naturalization
  // ============================================================
  {
    question: "When can I apply for a US passport after becoming a citizen?",
    answer:
      "You can apply for a US passport immediately after your oath ceremony. Many applicants apply on the same day. You will need your Certificate of Naturalization, a passport photo, and Form DS-11. Processing takes 6 to 8 weeks for standard service or 2 to 3 weeks for expedited service.",
    category: "After Naturalization",
  },
  {
    question: "Can I vote immediately after becoming a US citizen?",
    answer:
      "Yes, you are eligible to vote as soon as you take the Oath of Allegiance. However, you must register to vote in your state before you can cast a ballot. Registration requirements and deadlines vary by state. You can typically register on the same day you receive your naturalization certificate.",
    category: "After Naturalization",
  },
  {
    question: "Can I keep dual citizenship after becoming a US citizen?",
    answer:
      "The United States allows dual citizenship, so you can retain your original nationality if your home country permits it. The Oath of Allegiance includes a renunciation of foreign allegiance, but the US government does not enforce this against other countries. Check your home country's laws regarding dual nationality.",
    category: "After Naturalization",
  },
  {
    question: "What happens at the oath ceremony?",
    answer:
      "At the oath ceremony, you will return your green card, take the Oath of Allegiance along with other new citizens, and receive your Certificate of Naturalization. Ceremonies may be held at USCIS offices, courthouses, or special locations. Family members are usually welcome to attend. Read our oath of allegiance page for the full text and what to expect.",
    category: "After Naturalization",
  },
  {
    question: "What is the Certificate of Naturalization?",
    answer:
      "The Certificate of Naturalization (Form N-550) is the official document proving you are a US citizen. You receive it at your oath ceremony. Keep it in a safe place as it is needed to apply for a US passport and may be required for other legal purposes. If lost, you can request a replacement by filing Form N-565.",
    category: "After Naturalization",
  },
  {
    question: "Can I travel internationally right after the oath ceremony?",
    answer:
      "You can travel, but you will need a valid passport. If you do not already have a US passport, you should apply for one before booking international travel. Your green card is surrendered at the oath ceremony, so you cannot use it for re-entry. If urgent travel is needed, visit a passport agency for same-day or next-day service.",
    category: "After Naturalization",
  },
  {
    question:
      "Can I sponsor family members for immigration after becoming a citizen?",
    answer:
      "Yes. As a US citizen, you can petition to bring immediate relatives (spouse, unmarried children under 21, and parents) with no annual visa limit. You can also sponsor married children, siblings, and adult children, though these categories have longer wait times. File Form I-130 for each family member you wish to sponsor.",
    category: "After Naturalization",
  },
  {
    question:
      "What responsibilities come with US citizenship?",
    answer:
      "US citizens are expected to obey all federal, state, and local laws, pay taxes, serve on a jury when called, and register with the Selective Service (males ages 18 to 25). You also have the right and responsibility to vote in elections. Citizenship is permanent and cannot be revoked except in cases of fraud.",
    category: "After Naturalization",
  },
];
