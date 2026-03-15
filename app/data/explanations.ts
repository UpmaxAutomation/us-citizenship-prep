export interface QuestionExplanation {
  explanation: string;
  relatedQuestionIds: number[];
  keyTerms: string[];
}

export const explanations: Record<number, QuestionExplanation> = {
  1: {
    explanation:
      "The United States is a constitutional republic, also described as a representative democracy. Citizens elect representatives to make laws on their behalf rather than voting directly on every issue. The Constitution establishes the framework and limits of government power, ensuring that elected officials serve the people while operating within defined legal boundaries. This system blends democratic principles with constitutional protections for individual rights.",
    relatedQuestionIds: [2, 3, 4, 15],
    keyTerms: ["republic", "representative democracy", "federal", "constitutional"],
  },
  2: {
    explanation:
      "The U.S. Constitution is the supreme law of the land, meaning no other law, whether federal, state, or local, can contradict it. Ratified in 1788, it established the structure of the federal government and enshrined fundamental rights. Any law or government action that conflicts with the Constitution can be struck down by the courts through the process of judicial review.",
    relatedQuestionIds: [1, 3, 5, 7],
    keyTerms: ["Constitution", "supreme law", "judicial review", "ratification"],
  },
  3: {
    explanation:
      "The U.S. Constitution serves several essential functions: it creates the structure of the federal government by establishing the three branches, defines and limits the powers of each branch, and protects the fundamental rights of the people through the Bill of Rights and subsequent amendments. It is a living document that has been amended 27 times to address changing needs while preserving core principles of liberty and governance.",
    relatedQuestionIds: [1, 2, 5, 6, 7],
    keyTerms: ["government structure", "powers", "rights", "amendments"],
  },
  4: {
    explanation:
      "The phrase 'We the People' in the Constitution's preamble establishes that the government's authority comes from the people themselves, not from a king or ruling class. This concept of popular sovereignty means citizens consent to be governed and have the ultimate power. It reflects the social contract theory that influenced the Founders, where people agree to form a government to protect their natural rights.",
    relatedQuestionIds: [1, 3, 10, 13],
    keyTerms: ["popular sovereignty", "self-government", "consent of the governed", "social contract"],
  },
  5: {
    explanation:
      "The Constitution is changed through the amendment process, which is deliberately difficult to ensure stability while allowing adaptation. An amendment can be proposed by a two-thirds vote in both the House and Senate, or by a constitutional convention called by two-thirds of state legislatures. Ratification requires approval by three-fourths of state legislatures or ratifying conventions. This high threshold ensures broad consensus for constitutional changes.",
    relatedQuestionIds: [3, 6, 7, 97],
    keyTerms: ["amendment", "ratification", "two-thirds", "three-fourths"],
  },
  6: {
    explanation:
      "The Bill of Rights consists of the first ten amendments to the Constitution, ratified in 1791. It protects the basic rights of Americans and people living in the United States, including freedom of speech, religion, press, assembly, and the right to bear arms. It also guarantees protections in criminal proceedings, such as the right to a fair trial and protection against unreasonable searches. These amendments were added because many states refused to ratify the Constitution without explicit protections for individual liberties.",
    relatedQuestionIds: [5, 7, 65, 14],
    keyTerms: ["Bill of Rights", "individual rights", "civil liberties", "first ten amendments"],
  },
  7: {
    explanation:
      "The U.S. Constitution has twenty-seven amendments. The first ten, known as the Bill of Rights, were ratified in 1791. Subsequent amendments have addressed issues such as abolishing slavery (13th), granting citizenship rights (14th), extending voting rights (15th, 19th, 26th), and establishing presidential term limits (22nd). The most recent amendment, the 27th, was ratified in 1992 and deals with congressional pay.",
    relatedQuestionIds: [5, 6, 97, 98],
    keyTerms: ["twenty-seven amendments", "Bill of Rights", "constitutional change"],
  },
  8: {
    explanation:
      "The Declaration of Independence, adopted on July 4, 1776, is important because it formally announced the American colonies' separation from British rule. It declared that all people are created equal and possess inherent rights, including life, liberty, and the pursuit of happiness. Written primarily by Thomas Jefferson, it established the philosophical foundation for American democracy by asserting that governments derive their just powers from the consent of the governed.",
    relatedQuestionIds: [9, 10, 11, 78, 79],
    keyTerms: ["Declaration of Independence", "equality", "inherent rights", "individual freedoms"],
  },
  9: {
    explanation:
      "The Declaration of Independence is the founding document that formally stated the American colonies were free from British control. Adopted by the Continental Congress on July 4, 1776, it was primarily authored by Thomas Jefferson and represented the collective decision of the thirteen colonies to become independent states. The document not only declared independence but also laid out the philosophical justification for revolution based on natural rights.",
    relatedQuestionIds: [8, 10, 11, 78, 79],
    keyTerms: ["Declaration of Independence", "independence", "founding document", "Continental Congress"],
  },
  10: {
    explanation:
      "The Declaration of Independence and the U.S. Constitution contain several foundational ideas that shape American government: equality (all people are created equal), liberty (freedom from oppressive government), social contract (government by consent), natural rights (inherent rights that cannot be taken away), limited government (restrictions on governmental power), and self-government (the people's right to govern themselves). These principles continue to guide American democracy today.",
    relatedQuestionIds: [4, 8, 11, 13, 14],
    keyTerms: ["equality", "liberty", "natural rights", "limited government", "self-government"],
  },
  11: {
    explanation:
      "The famous phrase 'Life, Liberty, and the pursuit of Happiness' appears in the Declaration of Independence. These words, penned by Thomas Jefferson in 1776, express the fundamental natural rights that the Founders believed all people possess. This phrase drew on Enlightenment philosophy, particularly John Locke's concept of 'life, liberty, and property,' and established the moral foundation for the new nation's commitment to individual freedom and human dignity.",
    relatedQuestionIds: [8, 9, 10, 78],
    keyTerms: ["Declaration of Independence", "natural rights", "Thomas Jefferson", "Enlightenment"],
  },
  12: {
    explanation:
      "The United States operates under a capitalist or free market economy, where private individuals and businesses make most economic decisions rather than the government. In this system, prices are determined by supply and demand, people are free to start businesses, and competition drives innovation. While the government does regulate certain aspects of the economy to protect consumers and workers, the fundamental economic model relies on private enterprise and market forces.",
    relatedQuestionIds: [1, 10, 59],
    keyTerms: ["capitalism", "free market economy", "supply and demand", "private enterprise"],
  },
  13: {
    explanation:
      "The rule of law is a fundamental principle meaning that everyone, including government leaders and officials, must follow the law. No person, regardless of position or power, is above the law. This concept ensures that laws are applied fairly and consistently to all people and prevents arbitrary use of government power. It is a cornerstone of American democracy that distinguishes it from authoritarian systems where rulers can act outside the law.",
    relatedQuestionIds: [1, 4, 10, 15],
    keyTerms: ["rule of law", "equality before the law", "accountability", "governance"],
  },
  14: {
    explanation:
      "Several important documents influenced the creation of the U.S. Constitution. The Declaration of Independence established the philosophical basis for the new nation. The Articles of Confederation served as the first governing document but proved too weak. The Federalist Papers argued for ratification. Other influences include the Virginia Declaration of Rights, the Mayflower Compact, the Fundamental Orders of Connecticut, and the Iroquois Great Law of Peace, which demonstrated confederate governance among Native peoples.",
    relatedQuestionIds: [8, 9, 83, 84],
    keyTerms: ["Articles of Confederation", "Federalist Papers", "Mayflower Compact", "founding documents"],
  },
  15: {
    explanation:
      "The government is divided into three branches, legislative, executive, and judicial, to prevent any single branch from becoming too powerful. This system of separation of powers, combined with checks and balances, ensures that each branch can limit the actions of the others. For example, the president can veto laws passed by Congress, Congress can override vetoes, and the courts can declare laws unconstitutional. This design was influenced by Enlightenment thinker Montesquieu.",
    relatedQuestionIds: [16, 17, 18, 50, 51],
    keyTerms: ["separation of powers", "checks and balances", "three branches"],
  },
  16: {
    explanation:
      "The three branches of government are the legislative (Congress, which makes laws), the executive (the President, who enforces laws), and the judicial (the courts, which interpret laws). This structure was established by the Constitution to distribute governmental power and prevent tyranny. Each branch has distinct responsibilities and the ability to check the powers of the other two branches.",
    relatedQuestionIds: [15, 17, 18, 50],
    keyTerms: ["legislative", "executive", "judicial", "separation of powers"],
  },
  17: {
    explanation:
      "The President of the United States heads the executive branch, which is responsible for enforcing and carrying out the laws passed by Congress. As the chief executive, the President also serves as Commander in Chief of the military, conducts foreign policy, appoints federal judges and Cabinet members, and can sign or veto legislation. The executive branch includes the Vice President, Cabinet departments, and numerous federal agencies.",
    relatedQuestionIds: [16, 38, 41, 46],
    keyTerms: ["executive branch", "President", "enforce laws", "chief executive"],
  },
  18: {
    explanation:
      "The U.S. Congress, which is the national legislature and the legislative branch of government, has the power to write and pass federal laws. Congress is a bicameral body consisting of the Senate and the House of Representatives. Bills must pass both chambers before being sent to the President for signature. Congress also has the power to declare war, control federal spending, and oversee the executive branch.",
    relatedQuestionIds: [16, 19, 20, 21, 24],
    keyTerms: ["Congress", "legislature", "legislative branch", "lawmaking"],
  },
  19: {
    explanation:
      "The U.S. Congress is divided into two chambers: the Senate and the House of Representatives. This bicameral structure was created through the Great Compromise at the Constitutional Convention of 1787. The Senate provides equal representation with two senators per state, while the House provides proportional representation based on state population. Both chambers must agree on legislation before it can become law.",
    relatedQuestionIds: [18, 21, 24, 27, 28],
    keyTerms: ["Senate", "House of Representatives", "bicameral", "Great Compromise"],
  },
  20: {
    explanation:
      "Congress holds several important powers granted by the Constitution. These include writing and passing laws, declaring war, and making the federal budget. Additionally, Congress can levy taxes, regulate commerce, confirm presidential appointments (Senate), impeach federal officials, and ratify treaties (Senate). The power of the purse, which means controlling government spending, is one of Congress's most significant tools for influencing policy.",
    relatedQuestionIds: [18, 19, 21, 24],
    keyTerms: ["legislative power", "declare war", "federal budget", "power of the purse"],
  },
  21: {
    explanation:
      "There are one hundred U.S. senators, with each of the 50 states represented by exactly two senators. This equal representation in the Senate was part of the Great Compromise (also called the Connecticut Compromise) at the Constitutional Convention, which balanced the interests of large and small states. The Senate was designed to be a more deliberative body, with longer terms and originally appointed by state legislatures rather than directly elected.",
    relatedQuestionIds: [22, 23, 27, 28],
    keyTerms: ["one hundred senators", "equal representation", "Senate"],
  },
  22: {
    explanation:
      "A U.S. senator serves a six-year term, which is three times longer than a House member's two-year term. The longer term was designed to insulate senators from short-term political pressures and allow them to take a longer-term view on legislation. Senate elections are staggered so that approximately one-third of the Senate is up for election every two years, ensuring continuity in the legislative body.",
    relatedQuestionIds: [21, 25, 26, 27],
    keyTerms: ["six-year term", "Senate term", "staggered elections"],
  },
  23: {
    explanation:
      "Each state has two U.S. senators who represent the entire state. Senators are elected by the citizens of their state in statewide elections. Since the 17th Amendment was ratified in 1913, senators have been directly elected by voters rather than appointed by state legislatures. Your specific senators depend on which state you live in, and you should know the names of your state's current senators for the citizenship test.",
    relatedQuestionIds: [21, 27, 31, 32],
    keyTerms: ["state senators", "direct election", "17th Amendment", "representation"],
  },
  24: {
    explanation:
      "The House of Representatives has 435 voting members, a number fixed by Congress in 1911. Each member represents a congressional district, and the number of districts per state is determined by the state's population as measured by the census conducted every ten years. Additionally, there are non-voting delegates from Washington D.C., Puerto Rico, and other U.S. territories. The House was designed to be the chamber closest to the people.",
    relatedQuestionIds: [19, 25, 33, 35],
    keyTerms: ["435 members", "House of Representatives", "congressional districts", "proportional representation"],
  },
  25: {
    explanation:
      "Members of the House of Representatives serve two-year terms, the shortest term of any federal elected official. This brief term was intentionally designed by the Framers to keep representatives closely accountable to their constituents. With elections every two years, representatives must stay connected to the needs and opinions of the people in their districts. This makes the House the most responsive branch to current public sentiment.",
    relatedQuestionIds: [22, 24, 26, 34],
    keyTerms: ["two-year term", "House term", "accountability", "frequent elections"],
  },
  26: {
    explanation:
      "U.S. representatives serve shorter two-year terms compared to senators' six-year terms so they more closely follow public opinion. The Founders wanted the House of Representatives to be the chamber most responsive to the will of the people. By facing reelection every two years, representatives must stay attuned to the changing concerns and priorities of their constituents, making them directly accountable to voters on a more frequent basis.",
    relatedQuestionIds: [22, 25, 33, 34],
    keyTerms: ["public opinion", "accountability", "responsiveness", "shorter terms"],
  },
  27: {
    explanation:
      "Each state has exactly two senators, regardless of its population size. This means Wyoming (with under 600,000 people) has the same number of senators as California (with nearly 40 million). This system of equal representation was a key part of the Great Compromise at the Constitutional Convention, designed to protect the interests of smaller states. The Senate balances the House, where representation is based on population.",
    relatedQuestionIds: [21, 28, 35, 19],
    keyTerms: ["two senators", "equal representation", "state representation"],
  },
  28: {
    explanation:
      "Each state has two senators to ensure equal representation regardless of population. This arrangement resulted from the Great Compromise (also called the Connecticut Compromise) at the 1787 Constitutional Convention. Smaller states feared being dominated by larger states in a purely population-based system. The compromise created a bicameral Congress: the House with proportional representation and the Senate with equal representation, satisfying both large and small states.",
    relatedQuestionIds: [19, 21, 27, 35],
    keyTerms: ["equal representation", "Great Compromise", "Connecticut Compromise", "small states"],
  },
  29: {
    explanation:
      "Each citizen has a U.S. representative based on the congressional district where they live. Representatives are elected by the voters in their specific district and are expected to advocate for their constituents' interests in Congress. The answer to this question varies depending on your address, as congressional districts are redrawn every ten years following the census. You should know your representative's name for the citizenship test.",
    relatedQuestionIds: [24, 33, 34, 35],
    keyTerms: ["U.S. representative", "congressional district", "local representation"],
  },
  30: {
    explanation:
      "The Speaker of the House is the presiding officer of the House of Representatives and is second in the presidential line of succession after the Vice President. The Speaker is elected by the members of the House, typically the leader of the majority party. As of the current test period, the Speaker is Mike Johnson. The Speaker sets the legislative agenda, controls floor proceedings, and plays a crucial role in the legislative process.",
    relatedQuestionIds: [18, 19, 24, 40],
    keyTerms: ["Speaker of the House", "presiding officer", "line of succession", "majority party"],
  },
  31: {
    explanation:
      "A U.S. senator represents all the citizens and people of their entire state, unlike House members who represent specific congressional districts. Because senators serve the whole state, they often deal with broader policy issues and must balance the interests of diverse communities within their state. Each state has two senators, giving every state equal voice in the Senate regardless of population size.",
    relatedQuestionIds: [21, 23, 27, 32],
    keyTerms: ["state representation", "senator", "statewide constituency"],
  },
  32: {
    explanation:
      "U.S. senators are elected directly by the citizens of their state through statewide popular elections. This has been the case since the 17th Amendment was ratified in 1913. Before that amendment, senators were chosen by state legislatures. The shift to direct election was part of the Progressive Era's push for more democratic participation and was driven by concerns about corruption and unresponsive state legislatures.",
    relatedQuestionIds: [23, 27, 31, 34],
    keyTerms: ["direct election", "17th Amendment", "statewide election", "popular vote"],
  },
  33: {
    explanation:
      "A member of the House of Representatives represents the citizens living in their specific congressional district. Unlike senators who represent an entire state, House members focus on the needs of a smaller, more localized constituency. Congressional districts are drawn based on population data from the decennial census, with each district containing roughly the same number of people to ensure equal representation.",
    relatedQuestionIds: [24, 29, 34, 35],
    keyTerms: ["congressional district", "local representation", "district-based", "census"],
  },
  34: {
    explanation:
      "Members of the House of Representatives are elected by the citizens living in their congressional district. Voters cast ballots for candidates running in their specific district, and the candidate who wins the most votes becomes the representative. House elections occur every two years, and all 435 seats are contested simultaneously. This district-based system ensures that each community has a voice in Congress.",
    relatedQuestionIds: [25, 29, 33, 35],
    keyTerms: ["district election", "House election", "voter representation", "congressional district"],
  },
  35: {
    explanation:
      "Some states have more representatives in the House than others because representation is based on the state's population. States with more people get more congressional districts and therefore more representatives. This is determined by the census, which is conducted every ten years. After each census, the 435 House seats are reapportioned among the states. California, the most populous state, has the most representatives, while several small states have only one.",
    relatedQuestionIds: [24, 27, 33, 34],
    keyTerms: ["population", "apportionment", "census", "proportional representation"],
  },
  36: {
    explanation:
      "The President of the United States is elected for a four-year term. Presidential elections are held every four years on the first Tuesday after the first Monday in November. The President can serve a maximum of two terms (eight years total), a limit established by the 22nd Amendment ratified in 1951 after Franklin Roosevelt served four terms. The four-year term provides enough time to implement policy while maintaining regular accountability to voters.",
    relatedQuestionIds: [37, 38, 49, 17],
    keyTerms: ["four-year term", "presidential term", "election cycle"],
  },
  37: {
    explanation:
      "The President is limited to two terms because of the 22nd Amendment, ratified in 1951. This amendment was passed in response to Franklin D. Roosevelt being elected to four terms. Before Roosevelt, presidents had voluntarily followed a two-term tradition started by George Washington. The term limit prevents any single individual from holding presidential power for too long and helps ensure a peaceful transfer of power through regular elections.",
    relatedQuestionIds: [36, 38, 86, 105],
    keyTerms: ["22nd Amendment", "term limits", "two terms", "presidential power"],
  },
  38: {
    explanation:
      "The current President of the United States is Donald Trump, who took office on January 20, 2025. The President serves as the head of state and head of government, leading the executive branch. This question requires knowing the current officeholder at the time of your naturalization interview. The President is elected through the Electoral College system and serves as Commander in Chief of the armed forces.",
    relatedQuestionIds: [17, 36, 39, 41],
    keyTerms: ["current President", "Donald Trump", "head of state", "chief executive"],
  },
  39: {
    explanation:
      "The current Vice President of the United States is JD Vance. The Vice President serves as the second-highest executive official and is first in the presidential line of succession. The Vice President also serves as President of the Senate and can cast a tie-breaking vote. The Vice President is elected on the same ticket as the President and must meet the same eligibility requirements: being a natural-born citizen, at least 35 years old, and a U.S. resident for at least 14 years.",
    relatedQuestionIds: [38, 40, 30, 17],
    keyTerms: ["Vice President", "JD Vance", "line of succession", "President of the Senate"],
  },
  40: {
    explanation:
      "If the President can no longer serve due to death, resignation, removal from office, or incapacity, the Vice President becomes President. This succession process is established by the 25th Amendment to the Constitution, ratified in 1967. The presidential line of succession continues beyond the Vice President to the Speaker of the House, then the President pro tempore of the Senate, followed by Cabinet members in a specific order.",
    relatedQuestionIds: [38, 39, 30, 17],
    keyTerms: ["presidential succession", "Vice President", "25th Amendment", "line of succession"],
  },
  41: {
    explanation:
      "The President holds numerous powers defined by the Constitution and federal law. These include signing bills into law, vetoing legislation, enforcing federal laws, serving as Commander in Chief of the military, conducting diplomacy as chief diplomat, and appointing federal judges including Supreme Court justices. The President also issues executive orders, grants pardons, and negotiates treaties (subject to Senate approval). These powers are balanced by congressional and judicial checks.",
    relatedQuestionIds: [17, 42, 43, 44, 45],
    keyTerms: ["presidential powers", "veto", "Commander in Chief", "executive authority"],
  },
  42: {
    explanation:
      "The President of the United States serves as Commander in Chief of the U.S. military, as established in Article II of the Constitution. This means the President has supreme command over all branches of the armed forces: the Army, Navy, Air Force, Marine Corps, Space Force, and Coast Guard. While the President directs military operations, only Congress has the power to formally declare war, creating an important check on military power.",
    relatedQuestionIds: [17, 41, 58, 15],
    keyTerms: ["Commander in Chief", "military command", "civilian control", "armed forces"],
  },
  43: {
    explanation:
      "The President of the United States has the constitutional power to sign bills into law. After both chambers of Congress pass a bill, it is sent to the President, who can either sign it (making it law) or veto it (sending it back to Congress). If the President takes no action for ten days while Congress is in session, the bill automatically becomes law. This power is a key part of the legislative process and the system of checks and balances.",
    relatedQuestionIds: [18, 41, 44, 15],
    keyTerms: ["sign bills", "legislation", "lawmaking process", "checks and balances"],
  },
  44: {
    explanation:
      "The President has the power to veto (reject) bills passed by Congress. When the President vetoes a bill, it is returned to Congress with the President's objections. Congress can override a presidential veto with a two-thirds vote in both the House and Senate, but this is relatively rare. The veto power is an important check that the executive branch has on the legislative branch, ensuring the President has a voice in the lawmaking process.",
    relatedQuestionIds: [41, 43, 15, 18],
    keyTerms: ["veto", "override", "checks and balances", "executive power"],
  },
  45: {
    explanation:
      "The President appoints federal judges, including justices of the Supreme Court, with the advice and consent of the Senate. This means the President nominates candidates, but the Senate must confirm them through a vote. This process is another example of checks and balances, as it prevents the President from unilaterally controlling the judiciary. Federal judges, once confirmed, serve lifetime appointments to maintain judicial independence from political pressure.",
    relatedQuestionIds: [41, 50, 52, 55],
    keyTerms: ["judicial appointments", "Senate confirmation", "federal judges", "advice and consent"],
  },
  46: {
    explanation:
      "The executive branch is large and complex, consisting of many parts beyond just the President. It includes the Vice President, the Cabinet (heads of executive departments), and numerous federal departments and agencies such as the Department of Defense, the Department of State, the FBI, the CIA, and the EPA. These entities carry out the day-to-day work of enforcing laws, implementing policy, and managing federal programs that affect millions of Americans.",
    relatedQuestionIds: [17, 47, 48, 41],
    keyTerms: ["executive branch", "federal departments", "agencies", "Cabinet"],
  },
  47: {
    explanation:
      "The President's Cabinet is a group of senior advisors, typically the heads of the executive departments, who advise the President on matters related to their areas of responsibility. Cabinet members are appointed by the President and confirmed by the Senate. They help the President make informed decisions on policies ranging from national defense to education to the economy. The Cabinet meets regularly to discuss major issues facing the nation.",
    relatedQuestionIds: [46, 48, 17, 41],
    keyTerms: ["Cabinet", "presidential advisors", "executive departments", "policy advice"],
  },
  48: {
    explanation:
      "The President's Cabinet includes numerous high-ranking positions, including the Attorney General and the secretaries of various executive departments such as State, Defense, Treasury, Education, and more. Cabinet-level positions also include the Vice President and heads of certain agencies like the EPA Administrator and the CIA Director. These officials oversee vast federal bureaucracies and play crucial roles in shaping and implementing national policy.",
    relatedQuestionIds: [46, 47, 17, 41],
    keyTerms: ["Cabinet positions", "Secretary of State", "Attorney General", "executive departments"],
  },
  49: {
    explanation:
      "The Electoral College is the system used to elect the President and Vice President. Rather than a direct popular vote, voters in each state choose electors who then cast the official votes for president. Each state gets a number of electors equal to its total representation in Congress (senators plus representatives). The Electoral College was a compromise between election by Congress and direct popular election, designed to balance the interests of large and small states.",
    relatedQuestionIds: [36, 38, 35, 27],
    keyTerms: ["Electoral College", "electors", "presidential election", "indirect election"],
  },
  50: {
    explanation:
      "The judicial branch consists of the Supreme Court and the lower federal courts, including courts of appeals and district courts. The federal court system was established by Article III of the Constitution and expanded by Congress over time. Federal courts hear cases involving federal law, disputes between states, and constitutional questions. The judicial branch operates independently to ensure fair and impartial interpretation of the law.",
    relatedQuestionIds: [15, 16, 51, 52],
    keyTerms: ["judicial branch", "Supreme Court", "federal courts", "Article III"],
  },
  51: {
    explanation:
      "The judicial branch reviews, explains, and interprets laws. Federal courts resolve disputes about the meaning and application of laws, and most importantly, they can decide whether a law violates the Constitution through the power of judicial review. This power, established in the landmark case Marbury v. Madison (1803), makes the judiciary the ultimate guardian of constitutional rights and a crucial check on the legislative and executive branches.",
    relatedQuestionIds: [50, 52, 15, 16],
    keyTerms: ["judicial review", "interpret laws", "constitutional review", "Marbury v. Madison"],
  },
  52: {
    explanation:
      "The Supreme Court of the United States is the highest court in the nation and the final arbiter of legal disputes. Its decisions are binding on all other courts and cannot be appealed. The Supreme Court primarily hears cases on appeal from lower federal courts and state supreme courts, focusing on cases involving significant constitutional questions or conflicts between lower courts. The Court's interpretations of the Constitution shape American law and society.",
    relatedQuestionIds: [50, 51, 53, 55],
    keyTerms: ["Supreme Court", "highest court", "final arbiter", "constitutional interpretation"],
  },
  53: {
    explanation:
      "The Supreme Court has nine seats, consisting of one Chief Justice and eight Associate Justices. This number was set by Congress through the Judiciary Act of 1869 and has remained unchanged since. The number is not specified in the Constitution, and Congress has the power to change it. Having nine justices allows for majority decisions without ties and provides a range of perspectives on complex legal questions.",
    relatedQuestionIds: [52, 54, 55, 57],
    keyTerms: ["nine justices", "Chief Justice", "Associate Justices", "Supreme Court composition"],
  },
  54: {
    explanation:
      "Five Supreme Court justices, a simple majority of the nine-member Court, are usually needed to decide a case. When the Court hears a case, each justice studies the arguments and casts a vote. The majority opinion becomes the ruling and establishes legal precedent. Justices who disagree may write dissenting opinions, and those who agree with the result but for different reasons may write concurring opinions. Some cases may be decided with fewer justices if there are recusals.",
    relatedQuestionIds: [52, 53, 55, 51],
    keyTerms: ["majority decision", "five justices", "legal precedent", "majority opinion"],
  },
  55: {
    explanation:
      "Supreme Court justices serve for life, meaning they hold their positions until they die, retire, or are removed through impeachment. This lifetime appointment was designed by the Framers to protect judicial independence by shielding justices from political pressure. Because they do not face elections or term limits, justices can make decisions based on the law and Constitution rather than popular opinion or political considerations.",
    relatedQuestionIds: [52, 53, 56, 45],
    keyTerms: ["lifetime appointment", "judicial independence", "life tenure", "no term limits"],
  },
  56: {
    explanation:
      "Supreme Court justices serve for life to maintain their independence from political influence and outside pressure. Without the need to campaign for reelection or worry about job security, justices can focus solely on interpreting the law and Constitution impartially. This insulation from politics was a deliberate design choice by the Framers, who wanted the judiciary to be a stable, non-partisan branch that could protect constitutional rights against political whims.",
    relatedQuestionIds: [52, 55, 45, 15],
    keyTerms: ["judicial independence", "political independence", "impartiality", "non-partisan"],
  },
  57: {
    explanation:
      "The current Chief Justice of the United States is John Roberts (John G. Roberts, Jr.), who was nominated by President George W. Bush and confirmed by the Senate in 2005. The Chief Justice presides over the Supreme Court, leads the federal judiciary, and has the role of presiding over presidential impeachment trials in the Senate. While the Chief Justice has only one vote like other justices, the position carries significant administrative authority and symbolic importance.",
    relatedQuestionIds: [52, 53, 45, 38],
    keyTerms: ["Chief Justice", "John Roberts", "presiding officer", "head of judiciary"],
  },
  58: {
    explanation:
      "Certain powers are reserved exclusively for the federal government under the Constitution. These include printing paper money and minting coins, declaring war, creating and maintaining an army, making treaties with foreign nations, and setting foreign policy. These powers were granted to the federal government because they require national coordination and would be impractical or dangerous if handled independently by individual states.",
    relatedQuestionIds: [59, 60, 15, 20],
    keyTerms: ["federal powers", "enumerated powers", "national defense", "monetary policy"],
  },
  59: {
    explanation:
      "Under the federal system, certain powers are reserved exclusively for state governments. These include providing education and schooling, maintaining police forces for local protection, operating fire departments for public safety, issuing driver's licenses, and approving zoning and land use regulations. The 10th Amendment reserves these and other non-federal powers to the states or the people, allowing states to address local needs and preferences.",
    relatedQuestionIds: [58, 60, 61, 62],
    keyTerms: ["state powers", "reserved powers", "10th Amendment", "federalism"],
  },
  60: {
    explanation:
      "The 10th Amendment to the Constitution states that any powers not specifically given to the federal government, nor prohibited to the states, are reserved for the states or the people. This amendment reinforces the principle of federalism, the division of power between national and state governments. It was included in the Bill of Rights to reassure states that the new federal government would not absorb all governmental authority.",
    relatedQuestionIds: [58, 59, 6, 7],
    keyTerms: ["10th Amendment", "reserved powers", "federalism", "states' rights"],
  },
  61: {
    explanation:
      "The governor is the head of each state's executive branch and is responsible for enforcing state laws, managing the state budget, and leading the state government. Governors are elected by the citizens of their state. The answer to this question varies by state, and you should know the name of your current governor for the citizenship test. Governors play a role similar to the President but at the state level.",
    relatedQuestionIds: [17, 59, 62, 38],
    keyTerms: ["governor", "state executive", "state government", "elected official"],
  },
  62: {
    explanation:
      "Each state has its own capital city, which serves as the seat of the state government where the governor's office and state legislature are located. State capitals are not always the largest city in the state. For example, California's capital is Sacramento (not Los Angeles), and New York's capital is Albany (not New York City). You should know the capital of your state for the citizenship test.",
    relatedQuestionIds: [61, 119, 59],
    keyTerms: ["state capital", "seat of government", "state legislature"],
  },
  63: {
    explanation:
      "Four constitutional amendments specifically address voting rights. The 15th Amendment (1870) prohibited denying the vote based on race. The 19th Amendment (1920) gave women the right to vote. The 24th Amendment (1964) banned poll taxes in federal elections. The 26th Amendment (1971) lowered the voting age to 18. Together, these amendments progressively expanded democracy by removing barriers that once prevented large portions of the population from voting.",
    relatedQuestionIds: [64, 98, 102, 7],
    keyTerms: ["voting amendments", "15th Amendment", "19th Amendment", "26th Amendment"],
  },
  64: {
    explanation:
      "Only U.S. citizens have the right to vote in federal elections, run for federal office, and serve on a jury. These are privileges of citizenship that come with the responsibility of participating in democratic governance. Citizenship can be obtained by birth in the United States, through naturalization, or by derivation. These civic rights distinguish citizens from permanent residents and other non-citizens living in the country.",
    relatedQuestionIds: [63, 68, 69, 70],
    keyTerms: ["citizen rights", "voting", "federal office", "jury service"],
  },
  65: {
    explanation:
      "Everyone living in the United States, regardless of citizenship status, is guaranteed certain fundamental rights by the Constitution. These include freedom of expression and speech, freedom of assembly (the right to gather peacefully), the freedom to petition the government, freedom of religion, and the right to bear arms. These rights are primarily protected by the First and Second Amendments in the Bill of Rights and apply to all persons on U.S. soil.",
    relatedQuestionIds: [6, 63, 64, 66],
    keyTerms: ["fundamental rights", "freedom of speech", "freedom of religion", "right to bear arms"],
  },
  66: {
    explanation:
      "When Americans recite the Pledge of Allegiance, they show loyalty to the United States and to the American flag, which represents the nation. The Pledge was written in 1892 by Francis Bellamy and has been modified several times, with 'under God' added in 1954 during the Cold War. The Pledge affirms the values of the republic, including liberty and justice for all, and is commonly recited at the start of the school day and at civic events.",
    relatedQuestionIds: [67, 121, 122, 123],
    keyTerms: ["Pledge of Allegiance", "loyalty", "flag", "patriotism"],
  },
  67: {
    explanation:
      "The Oath of Allegiance is taken by new citizens during the naturalization ceremony. It includes several important promises: giving up loyalty to other countries, defending the Constitution and laws of the United States, obeying U.S. laws, serving in the military if needed, and performing national service when required. By taking this oath, new citizens formally commit to their new country and accept the responsibilities that come with citizenship.",
    relatedQuestionIds: [66, 68, 70, 72],
    keyTerms: ["Oath of Allegiance", "naturalization", "citizenship promises", "loyalty"],
  },
  68: {
    explanation:
      "There are several ways to become a U.S. citizen. The most common are being born in the United States (birthright citizenship under the 14th Amendment), naturalizing through the citizenship application process, or deriving citizenship through U.S. citizen parents under conditions set by Congress. Naturalization requires meeting residency requirements, demonstrating good moral character, passing English and civics tests, and taking the Oath of Allegiance.",
    relatedQuestionIds: [64, 67, 97, 69],
    keyTerms: ["naturalization", "birthright citizenship", "14th Amendment", "derived citizenship"],
  },
  69: {
    explanation:
      "Civic participation is essential to American democracy and takes many forms. Citizens can vote in elections, run for public office, join political parties, help with political campaigns, or join civic and community groups. Other forms include contacting elected officials to share opinions, supporting or opposing policies, and writing letters to newspapers. Active civic participation helps ensure the government remains responsive to the people's needs.",
    relatedQuestionIds: [64, 70, 71, 72],
    keyTerms: ["civic participation", "voting", "community involvement", "political engagement"],
  },
  70: {
    explanation:
      "Americans can serve their country in numerous ways beyond military service. These include voting in elections, paying taxes, obeying the law, running for public office, and working for local, state, or federal government. Community service, volunteering, and civic engagement are also important forms of national service. The concept reflects the idea that citizenship comes with both rights and responsibilities toward the broader community.",
    relatedQuestionIds: [69, 71, 72, 64],
    keyTerms: ["national service", "civic duty", "community service", "citizen responsibility"],
  },
  71: {
    explanation:
      "Paying federal taxes is important because it is required by law, specifically authorized by the 16th Amendment to the Constitution, ratified in 1913. Federal taxes fund essential government services including national defense, Social Security, Medicare, infrastructure, education, and other programs. Tax payment is considered a civic duty, and the tax system is the primary way the federal government raises revenue to operate and provide services to the American people.",
    relatedQuestionIds: [70, 72, 60, 7],
    keyTerms: ["federal taxes", "16th Amendment", "civic duty", "government funding"],
  },
  72: {
    explanation:
      "All men between ages 18 and 25 who live in the United States are required by law to register with the Selective Service System. This registration ensures that if a military draft were ever needed, it could be conducted fairly and efficiently. While there has been no draft since 1973, Selective Service registration remains a legal requirement and a civic duty. Failure to register can result in penalties including ineligibility for federal financial aid and government employment.",
    relatedQuestionIds: [67, 70, 71, 42],
    keyTerms: ["Selective Service", "draft registration", "civic duty", "military service"],
  },
  73: {
    explanation:
      "European colonists came to America for a variety of reasons, including seeking freedom from political and religious persecution, pursuing economic opportunity, and establishing new lives. Some came seeking religious freedom (like the Pilgrims and Puritans), while others were motivated by the promise of land ownership and economic advancement. Political liberty and escape from oppressive governments also drove many to make the dangerous journey across the Atlantic Ocean.",
    relatedQuestionIds: [74, 75, 76, 81],
    keyTerms: ["colonists", "religious freedom", "economic opportunity", "political liberty"],
  },
  74: {
    explanation:
      "American Indians (also called Native Americans) lived in America for thousands of years before the arrival of European explorers and settlers. These indigenous peoples had diverse cultures, languages, and systems of government. They developed sophisticated societies, from the mound-building civilizations of the Southeast to the Pueblo communities of the Southwest. European colonization dramatically impacted Native American populations through disease, displacement, and conflict.",
    relatedQuestionIds: [73, 117, 75],
    keyTerms: ["American Indians", "Native Americans", "indigenous peoples", "pre-colonial America"],
  },
  75: {
    explanation:
      "Africans were forcibly taken from their homeland and sold as slaves in the Americas beginning in the early 1600s. The transatlantic slave trade was one of the most significant and tragic aspects of American history. Enslaved Africans were brought primarily to work on plantations in the Southern colonies and states. Slavery persisted in the United States until the 13th Amendment abolished it in 1865 following the Civil War.",
    relatedQuestionIds: [73, 95, 96, 97],
    keyTerms: ["slavery", "Africans", "transatlantic slave trade", "forced labor"],
  },
  76: {
    explanation:
      "The American Revolution (also called the Revolutionary War or the War for American Independence) was fought from 1775 to 1783 between the American colonies and Great Britain. The war began after years of growing tension over British taxation and control. The colonies declared independence in 1776 and, with assistance from France, ultimately defeated the British military. The Treaty of Paris in 1783 formally recognized American independence.",
    relatedQuestionIds: [77, 78, 79, 80],
    keyTerms: ["American Revolution", "Revolutionary War", "independence", "Treaty of Paris"],
  },
  77: {
    explanation:
      "The Americans declared independence from Britain for numerous reasons related to unjust governance. These included high taxes imposed without colonial representation in Parliament (taxation without representation), the quartering of British soldiers in American homes, lack of self-government, and specific grievances like the Boston Massacre, the Boston Tea Party, and oppressive acts like the Stamp Act, Sugar Act, Townshend Acts, and the Intolerable Acts.",
    relatedQuestionIds: [76, 78, 79, 8],
    keyTerms: ["taxation without representation", "Boston Tea Party", "Stamp Act", "colonial grievances"],
  },
  78: {
    explanation:
      "Thomas Jefferson, a Virginia lawyer and statesman, was the primary author of the Declaration of Independence in 1776. At just 33 years old, Jefferson was chosen by the Continental Congress to draft the document because of his reputation as an eloquent writer. Jefferson drew on Enlightenment philosophy, particularly the ideas of John Locke, to articulate the principles of natural rights and government by consent that would define the new nation.",
    relatedQuestionIds: [8, 9, 79, 87],
    keyTerms: ["Thomas Jefferson", "Declaration author", "Continental Congress", "Enlightenment"],
  },
  79: {
    explanation:
      "The Declaration of Independence was adopted on July 4, 1776, by the Second Continental Congress in Philadelphia, Pennsylvania. This date, now celebrated as Independence Day, marks the moment when the thirteen American colonies formally declared themselves free and independent states, no longer subject to British rule. The document was primarily written by Thomas Jefferson, with revisions by Benjamin Franklin, John Adams, and other members of Congress.",
    relatedQuestionIds: [8, 9, 78, 125],
    keyTerms: ["July 4, 1776", "adoption date", "Independence Day", "Continental Congress"],
  },
  80: {
    explanation:
      "The American Revolution included many pivotal events and battles. The Battle of Bunker Hill (1775) showed the colonists could stand against British regulars. The Declaration of Independence (1776) formally established the cause. Washington's crossing of the Delaware led to the surprise victory at Trenton. The Battle of Saratoga (1777) was a turning point that brought French support. Valley Forge tested the army's resilience. The British surrender at Yorktown (1781) effectively ended the war.",
    relatedQuestionIds: [76, 77, 86, 79],
    keyTerms: ["Battle of Saratoga", "Yorktown", "Valley Forge", "Bunker Hill"],
  },
  81: {
    explanation:
      "The original thirteen colonies that became the first states were: New Hampshire, Massachusetts, Rhode Island, Connecticut, New York, New Jersey, Pennsylvania, Delaware, Maryland, Virginia, North Carolina, South Carolina, and Georgia. These colonies were established by British settlers along the Atlantic coast beginning in the early 1600s. After winning independence, they ratified the Constitution and formed the foundation of the United States, which has since grown to 50 states.",
    relatedQuestionIds: [73, 76, 121, 82],
    keyTerms: ["thirteen colonies", "original states", "Atlantic coast", "colonial America"],
  },
  82: {
    explanation:
      "The U.S. Constitution was written in 1787 during the Constitutional Convention held in Philadelphia, Pennsylvania. Delegates from twelve of the thirteen states (Rhode Island did not attend) gathered to create a stronger framework of government to replace the weak Articles of Confederation. The Constitution was signed on September 17, 1787, and ratified by the required nine states by June 1788, officially establishing the new federal government.",
    relatedQuestionIds: [2, 3, 14, 83],
    keyTerms: ["1787", "Constitutional Convention", "Philadelphia", "Articles of Confederation"],
  },
  83: {
    explanation:
      "The Federalist Papers were a series of 85 essays written by James Madison, Alexander Hamilton, and John Jay under the pen name 'Publius.' Published in 1787-1788, these essays argued in favor of ratifying the new Constitution and explained how the proposed government would work. Madison wrote about the structure of government, Hamilton focused on executive power and the judiciary, and Jay addressed foreign affairs. They remain essential texts for understanding the Constitution.",
    relatedQuestionIds: [14, 84, 88, 89],
    keyTerms: ["Federalist Papers", "James Madison", "Alexander Hamilton", "John Jay", "Publius"],
  },
  84: {
    explanation:
      "The Federalist Papers were important because they helped people understand the proposed U.S. Constitution and supported its ratification. Written during a fierce debate over whether to adopt the new Constitution, these essays provided detailed explanations of how the government would function, why the structure of checks and balances was necessary, and how individual rights would be protected. They helped win over skeptical citizens and state legislators to vote for ratification.",
    relatedQuestionIds: [14, 82, 83, 88],
    keyTerms: ["ratification", "constitutional debate", "public persuasion", "government explanation"],
  },
  85: {
    explanation:
      "Benjamin Franklin was one of the most versatile and accomplished Founding Fathers. He founded the first free public libraries in America, served as the first Postmaster General, helped write the Declaration of Independence, and was a renowned inventor (bifocals, the lightning rod, the Franklin stove). He also served as a crucial diplomat, securing the French alliance during the Revolutionary War that was essential to American victory. Franklin was the oldest signer of the Constitution at age 81.",
    relatedQuestionIds: [78, 86, 87, 89],
    keyTerms: ["Benjamin Franklin", "Founding Father", "inventor", "diplomat"],
  },
  86: {
    explanation:
      "George Washington earned the title 'Father of Our Country' for his indispensable role in founding the United States. He served as General of the Continental Army during the Revolutionary War, leading the colonies to victory over Britain. He presided over the Constitutional Convention in 1787 and served as the first President of the United States from 1789 to 1797. Washington set many precedents for the presidency, including the tradition of serving only two terms.",
    relatedQuestionIds: [80, 85, 87, 37],
    keyTerms: ["George Washington", "Father of Our Country", "first President", "Continental Army"],
  },
  87: {
    explanation:
      "Thomas Jefferson had an extraordinary impact on American history. He wrote the Declaration of Independence, served as the third President of the United States (1801-1809), and doubled the nation's size through the Louisiana Purchase in 1803. He also served as the first Secretary of State, founded the University of Virginia, and authored the Virginia Statute for Religious Freedom. Jefferson was a champion of individual rights, limited government, and westward expansion.",
    relatedQuestionIds: [78, 85, 86, 90],
    keyTerms: ["Thomas Jefferson", "third President", "Louisiana Purchase", "Declaration author"],
  },
  88: {
    explanation:
      "James Madison is known as the 'Father of the Constitution' for his central role in drafting the document at the 1787 Constitutional Convention. He served as the fourth President of the United States (1809-1817) and led the nation during the War of 1812. Madison was also one of the authors of the Federalist Papers, which helped secure ratification of the Constitution. He championed the Bill of Rights and worked to add the first ten amendments.",
    relatedQuestionIds: [82, 83, 84, 91],
    keyTerms: ["James Madison", "Father of the Constitution", "fourth President", "War of 1812"],
  },
  89: {
    explanation:
      "Alexander Hamilton made numerous vital contributions to the early United States. He served as the first Secretary of the Treasury, establishing the nation's financial system including the First Bank of the United States. He was one of the primary authors of the Federalist Papers, served as an aide to General George Washington during the Revolutionary War, and was a member of the Continental Congress. Hamilton's financial policies helped establish American economic independence and credibility.",
    relatedQuestionIds: [83, 84, 85, 86],
    keyTerms: ["Alexander Hamilton", "Secretary of the Treasury", "Federalist Papers", "national bank"],
  },
  90: {
    explanation:
      "In 1803, the United States purchased the Louisiana Territory from France in what became known as the Louisiana Purchase. President Thomas Jefferson negotiated the deal with Napoleon Bonaparte for approximately $15 million, which roughly doubled the size of the United States. The territory stretched from the Mississippi River to the Rocky Mountains and from the Gulf of Mexico to the Canadian border, encompassing land that would eventually become all or part of 15 states.",
    relatedQuestionIds: [87, 91, 81, 58],
    keyTerms: ["Louisiana Purchase", "1803", "Thomas Jefferson", "Napoleon", "westward expansion"],
  },
  91: {
    explanation:
      "The United States fought several major wars during the 1800s. The War of 1812 was fought against Britain over maritime rights and territorial expansion. The Mexican-American War (1846-1848) resulted in the U.S. acquiring California and the Southwest. The Civil War (1861-1865) was fought between the Northern and Southern states over slavery and states' rights. The Spanish-American War (1898) resulted in U.S. acquisition of Puerto Rico, Guam, and the Philippines.",
    relatedQuestionIds: [92, 93, 76, 100],
    keyTerms: ["War of 1812", "Mexican-American War", "Civil War", "Spanish-American War"],
  },
  92: {
    explanation:
      "The Civil War (1861-1865) was the war between the North (Union) and the South (Confederacy). It was the bloodiest conflict in American history, claiming an estimated 620,000 to 750,000 lives. The war was primarily caused by deep divisions over slavery and its expansion into new territories, as well as broader disagreements about states' rights and the nature of the federal union. The Northern victory preserved the Union and led to the abolition of slavery.",
    relatedQuestionIds: [91, 93, 94, 95, 96],
    keyTerms: ["Civil War", "North and South", "Union", "Confederacy"],
  },
  93: {
    explanation:
      "The Civil War included many significant events. The Battle of Fort Sumter (1861) started the war. The Emancipation Proclamation (1863) declared enslaved people in Confederate states free. The Battle of Gettysburg (1863) was the war's turning point. The Battle of Vicksburg gave the Union control of the Mississippi River. Sherman's March devastated the Southern infrastructure. The war ended with the Confederate surrender at Appomattox Court House in 1865.",
    relatedQuestionIds: [92, 94, 95, 96],
    keyTerms: ["Fort Sumter", "Gettysburg", "Emancipation Proclamation", "Appomattox"],
  },
  94: {
    explanation:
      "Abraham Lincoln, the 16th President of the United States, is one of the most revered leaders in American history. He led the nation through the Civil War, preserving the Union during its greatest crisis. Lincoln issued the Emancipation Proclamation in 1863, which declared enslaved people in Confederate states free. He delivered the Gettysburg Address, one of the most famous speeches in American history, and was assassinated by John Wilkes Booth in April 1865, just days after the war ended.",
    relatedQuestionIds: [92, 93, 95, 96],
    keyTerms: ["Abraham Lincoln", "16th President", "Emancipation Proclamation", "Gettysburg Address"],
  },
  95: {
    explanation:
      "The Emancipation Proclamation was an executive order issued by President Abraham Lincoln on January 1, 1863, during the Civil War. It declared that all enslaved people in the Confederate states were to be free. While it did not immediately free all enslaved people (it did not apply to border states or Union-controlled areas in the South), it transformed the war into a fight for freedom and allowed African Americans to enlist in the Union military. Full abolition came with the 13th Amendment in 1865.",
    relatedQuestionIds: [94, 96, 93, 75],
    keyTerms: ["Emancipation Proclamation", "Lincoln", "free the slaves", "executive order"],
  },
  96: {
    explanation:
      "The Civil War (1861-1865) ultimately ended slavery in the United States. While the Emancipation Proclamation of 1863 declared enslaved people in Confederate states free, it was the Union's military victory and the subsequent ratification of the 13th Amendment in December 1865 that formally abolished slavery throughout the entire nation. The end of slavery was followed by Reconstruction, a period of rebuilding that sought to integrate formerly enslaved people into American society.",
    relatedQuestionIds: [92, 94, 95, 97],
    keyTerms: ["Civil War", "end of slavery", "13th Amendment", "abolition"],
  },
  97: {
    explanation:
      "The 14th Amendment, ratified in 1868 during the Reconstruction era, establishes that all persons born or naturalized in the United States are citizens of both the nation and their state of residence. This amendment was crucial in extending citizenship to formerly enslaved people after the Civil War. It also includes the Equal Protection Clause, which requires states to provide equal protection under the law to all people, and the Due Process Clause, which protects individual rights from state government actions.",
    relatedQuestionIds: [68, 96, 98, 7],
    keyTerms: ["14th Amendment", "birthright citizenship", "equal protection", "due process"],
  },
  98: {
    explanation:
      "All men gained the right to vote after the Civil War through the 15th Amendment, ratified in 1870 during the Reconstruction period. This amendment prohibited the federal and state governments from denying a citizen's right to vote based on race, color, or previous condition of servitude. Despite this constitutional guarantee, many states used tactics like poll taxes, literacy tests, and intimidation to prevent African American men from voting until the Voting Rights Act of 1965.",
    relatedQuestionIds: [63, 97, 99, 102],
    keyTerms: ["15th Amendment", "voting rights", "1870", "Reconstruction"],
  },
  99: {
    explanation:
      "The women's rights movement in the 1800s fought for legal and social equality, with the right to vote as a central goal. Key leaders included Susan B. Anthony, who tirelessly campaigned for women's suffrage; Elizabeth Cady Stanton, who organized the Seneca Falls Convention in 1848; Sojourner Truth, who advocated for both women's rights and the abolition of slavery; Harriet Tubman, who led enslaved people to freedom; and Lucretia Mott and Lucy Stone, who were pioneering advocates for equality.",
    relatedQuestionIds: [98, 102, 63, 112],
    keyTerms: ["women's rights", "Susan B. Anthony", "suffrage", "Seneca Falls Convention"],
  },
  100: {
    explanation:
      "The United States fought several major wars during the 1900s. World War I (1914-1918) saw the U.S. enter in 1917. World War II (1939-1945) involved the U.S. from 1941. The Korean War (1950-1953) was fought to contain communism in Asia. The Vietnam War (1955-1975) was another Cold War conflict. The Persian Gulf War (1990-1991) expelled Iraqi forces from Kuwait. These conflicts shaped America's role as a global superpower throughout the century.",
    relatedQuestionIds: [91, 101, 106, 110, 111],
    keyTerms: ["World War I", "World War II", "Korean War", "Vietnam War"],
  },
  101: {
    explanation:
      "The United States entered World War I in 1917 for several reasons. Germany's policy of unrestricted submarine warfare resulted in attacks on American civilian ships, including the sinking of the Lusitania in 1915. The Zimmermann Telegram, in which Germany proposed a military alliance with Mexico against the U.S., further inflamed American public opinion. The U.S. joined the Allied Powers (England, France, Italy, and Russia) to oppose the Central Powers (Germany, Austria-Hungary, the Ottoman Empire, and Bulgaria).",
    relatedQuestionIds: [100, 102, 106],
    keyTerms: ["World War I", "submarine warfare", "Allied Powers", "Central Powers"],
  },
  102: {
    explanation:
      "All women gained the right to vote in 1920 with the ratification of the 19th Amendment, after decades of campaigning by the women's suffrage movement. This historic achievement came after World War I, during which women had demonstrated their vital contributions to the war effort through factory work, nursing, and other essential roles. The amendment stated that the right to vote could not be denied based on sex, doubling the eligible voting population.",
    relatedQuestionIds: [63, 98, 99, 101],
    keyTerms: ["19th Amendment", "women's suffrage", "1920", "voting rights"],
  },
  103: {
    explanation:
      "The Great Depression was the longest and most severe economic recession in modern history, lasting roughly from 1929 to the late 1930s. It was characterized by massive unemployment (reaching 25%), widespread poverty, bank failures, and a dramatic decline in industrial production and international trade. The economic crisis affected virtually every country in the world and led to significant changes in economic policy, including the New Deal programs introduced by President Franklin Roosevelt.",
    relatedQuestionIds: [104, 105, 100],
    keyTerms: ["Great Depression", "economic recession", "unemployment", "economic crisis"],
  },
  104: {
    explanation:
      "The Great Depression began with the Great Crash, the stock market crash of 1929, when stock prices plummeted dramatically in October of that year (particularly on 'Black Tuesday,' October 29). While the crash itself did not cause the Depression, it exposed underlying economic weaknesses and triggered a chain reaction of bank failures, reduced consumer spending, and business closures. The economic downturn deepened throughout the early 1930s before recovery began under the New Deal.",
    relatedQuestionIds: [103, 105, 100],
    keyTerms: ["stock market crash", "1929", "Great Crash", "Black Tuesday"],
  },
  105: {
    explanation:
      "Franklin D. Roosevelt (FDR) served as President during both the Great Depression and World War II, holding office from 1933 until his death in 1945. He was elected to an unprecedented four terms. Roosevelt introduced the New Deal, a series of programs and reforms designed to provide relief, recovery, and reform during the Depression. He also led the nation through World War II, building the military alliance that defeated the Axis Powers. His leadership during these crises made him one of the most consequential presidents in history.",
    relatedQuestionIds: [103, 104, 106, 37],
    keyTerms: ["Franklin Roosevelt", "FDR", "New Deal", "wartime President"],
  },
  106: {
    explanation:
      "The United States entered World War II after the Japanese attack on Pearl Harbor, Hawaii, on December 7, 1941, which President Roosevelt called 'a date which will live in infamy.' The surprise military strike killed over 2,400 Americans and damaged much of the Pacific Fleet. Congress declared war on Japan the next day, and Germany and Italy declared war on the U.S. shortly after. The U.S. joined the Allied Powers (England, France, and Russia) to fight the Axis Powers (Germany, Italy, and Japan).",
    relatedQuestionIds: [100, 105, 107, 101],
    keyTerms: ["Pearl Harbor", "World War II", "Allied Powers", "Axis Powers"],
  },
  107: {
    explanation:
      "Dwight D. Eisenhower was a pivotal figure in both military and political history. As a five-star general during World War II, he served as Supreme Commander of Allied Forces in Europe and planned the D-Day invasion of Normandy. He later served as the 34th President of the United States (1953-1961), during which he ended the Korean War and signed the Federal-Aid Highway Act of 1956, creating the Interstate Highway System that transformed American transportation and commerce.",
    relatedQuestionIds: [100, 106, 108, 110],
    keyTerms: ["Dwight Eisenhower", "34th President", "D-Day", "Interstate Highway System"],
  },
  108: {
    explanation:
      "During the Cold War (roughly 1947-1991), the United States' main rival was the Soviet Union (USSR/Russia). The Cold War was a geopolitical struggle between the democratic, capitalist United States and the communist Soviet Union for global influence. Though the two superpowers never fought directly, they competed through proxy wars, nuclear arms races, space exploration, and ideological battles. The Cold War ended with the dissolution of the Soviet Union in 1991.",
    relatedQuestionIds: [109, 110, 111, 107],
    keyTerms: ["Cold War", "Soviet Union", "USSR", "superpower rivalry"],
  },
  109: {
    explanation:
      "During the Cold War, the United States was primarily concerned about the spread of communism and the threat of nuclear war. The fear of communism influenced both foreign and domestic policy, leading to the Korean and Vietnam Wars as well as domestic investigations into communist infiltration. The nuclear arms race between the U.S. and Soviet Union created the constant threat of mutually assured destruction, with both nations stockpiling thousands of nuclear weapons.",
    relatedQuestionIds: [108, 110, 111, 112],
    keyTerms: ["communism", "nuclear war", "arms race", "containment"],
  },
  110: {
    explanation:
      "The United States entered the Korean War (1950-1953) to stop the spread of communism. When communist North Korea invaded democratic South Korea in June 1950, the U.S. led a United Nations coalition to defend South Korea. The war was part of the broader Cold War strategy of containment, which sought to prevent the expansion of communist influence worldwide. The war ended in an armistice in 1953, with Korea remaining divided along roughly the same border that exists today.",
    relatedQuestionIds: [108, 109, 111, 107],
    keyTerms: ["Korean War", "containment", "communism", "United Nations"],
  },
  111: {
    explanation:
      "The United States entered the Vietnam War to stop the spread of communism in Southeast Asia, following the domino theory that if one country fell to communism, neighboring countries would follow. American involvement escalated from military advisors in the late 1950s to full combat operations by the mid-1960s. The war was deeply controversial domestically and ended with the fall of Saigon in 1975. It resulted in over 58,000 American deaths and profoundly shaped American foreign policy and society.",
    relatedQuestionIds: [108, 109, 110, 100],
    keyTerms: ["Vietnam War", "communism", "domino theory", "containment"],
  },
  112: {
    explanation:
      "The civil rights movement, primarily active from the 1950s through the 1960s, fought to end racial discrimination and achieve equal rights for African Americans and other minorities. The movement used nonviolent protest, civil disobedience, legal challenges, and political activism to challenge segregation and discrimination. Major achievements included the Civil Rights Act of 1964, which outlawed discrimination, and the Voting Rights Act of 1965, which protected voting rights for minorities.",
    relatedQuestionIds: [113, 98, 99, 63],
    keyTerms: ["civil rights movement", "racial discrimination", "equality", "desegregation"],
  },
  113: {
    explanation:
      "Martin Luther King, Jr. was the most prominent leader of the civil rights movement. He fought for civil rights and worked for equality for all Americans through nonviolent protest and civil disobedience, inspired by Mahatma Gandhi. King led the Montgomery Bus Boycott, organized the March on Washington in 1963 where he delivered his famous 'I Have a Dream' speech, and received the Nobel Peace Prize in 1964. He was assassinated on April 4, 1968, but his legacy continues to inspire movements for justice worldwide.",
    relatedQuestionIds: [112, 98, 99, 126],
    keyTerms: ["Martin Luther King Jr.", "civil rights", "nonviolent protest", "I Have a Dream"],
  },
  114: {
    explanation:
      "The United States entered the Persian Gulf War (1990-1991) to force the Iraqi military out of Kuwait after Iraq, under Saddam Hussein, invaded and occupied the small oil-rich nation in August 1990. The U.S. led a broad international coalition authorized by the United Nations to liberate Kuwait. Operation Desert Storm, the military campaign, successfully expelled Iraqi forces from Kuwait in about six weeks of combat operations beginning in January 1991.",
    relatedQuestionIds: [100, 116, 42, 58],
    keyTerms: ["Persian Gulf War", "Kuwait", "Saddam Hussein", "Operation Desert Storm"],
  },
  115: {
    explanation:
      "On September 11, 2001, terrorists attacked the United States in the deadliest terrorist incident in American history. Nineteen hijackers associated with al-Qaeda took over four commercial airplanes. Two planes were crashed into the World Trade Center towers in New York City, causing both towers to collapse. A third plane hit the Pentagon in Arlington, Virginia. The fourth plane, originally aimed at Washington, D.C., crashed in a field in Shanksville, Pennsylvania, after passengers attempted to retake the aircraft. Nearly 3,000 people were killed.",
    relatedQuestionIds: [116, 100, 114],
    keyTerms: ["September 11", "9/11", "terrorist attacks", "World Trade Center"],
  },
  116: {
    explanation:
      "After the September 11, 2001 terrorist attacks, the United States engaged in several military conflicts. The Global War on Terror became the overarching framework for U.S. military and intelligence operations against terrorist organizations. The War in Afghanistan (2001-2021) targeted al-Qaeda and the Taliban regime that harbored them, becoming the longest war in American history. The War in Iraq (2003-2011) led to the overthrow of Saddam Hussein. These conflicts reshaped U.S. foreign policy and military strategy.",
    relatedQuestionIds: [115, 100, 114, 42],
    keyTerms: ["War on Terror", "Afghanistan", "Iraq", "military conflict"],
  },
  117: {
    explanation:
      "The United States is home to hundreds of American Indian (Native American) tribes, each with distinct cultures, languages, and traditions. Some of the many tribes include the Apache, Blackfeet, Cherokee, Cheyenne, Chippewa, Choctaw, Creek, Crow, Hopi, Lakota, Mohawk, Navajo, Oneida, Pueblo, Seminole, Seneca, Shawnee, and Sioux. These tribes have inhabited North America for thousands of years and continue to maintain their cultural identities today as sovereign nations within the United States.",
    relatedQuestionIds: [74, 73, 14],
    keyTerms: ["American Indian tribes", "Native Americans", "sovereign nations", "indigenous peoples"],
  },
  118: {
    explanation:
      "American innovation has produced numerous inventions that changed the world. Thomas Edison invented the practical light bulb. Henry Ford popularized the automobile and the assembly line manufacturing process. The Wright Brothers achieved powered flight with the airplane. American engineers pioneered skyscraper construction. NASA's Apollo program achieved the first moon landing in 1969. American inventors also developed the integrated circuit (microchip), which formed the foundation of the modern digital revolution.",
    relatedQuestionIds: [85, 87, 100],
    keyTerms: ["American innovation", "invention", "light bulb", "airplane", "moon landing"],
  },
  119: {
    explanation:
      "Washington, D.C. (District of Columbia) is the capital of the United States. It was established as the nation's capital in 1790 as part of a compromise between Alexander Hamilton and Thomas Jefferson. The city was designed by Pierre Charles L'Enfant and named after George Washington. Unlike the 50 states, D.C. is a federal district under the direct authority of Congress, though it has its own mayor and city council. It is home to the White House, Capitol Building, Supreme Court, and many national monuments.",
    relatedQuestionIds: [62, 120, 86, 89],
    keyTerms: ["Washington D.C.", "national capital", "federal district", "District of Columbia"],
  },
  120: {
    explanation:
      "The Statue of Liberty is located in New York Harbor on Liberty Island (with parts of the base technically in New Jersey). The statue was a gift from France in 1886 to celebrate the friendship between the two nations and America's commitment to freedom and democracy. Designed by French sculptor Frederic Auguste Bartholdi, the statue depicts the Roman goddess Libertas holding a torch and a tablet inscribed with the date of the Declaration of Independence. It has welcomed millions of immigrants arriving by ship.",
    relatedQuestionIds: [119, 121, 125, 81],
    keyTerms: ["Statue of Liberty", "New York Harbor", "Liberty Island", "gift from France"],
  },
  121: {
    explanation:
      "The American flag has 13 stripes (seven red and six white) to represent the 13 original colonies that declared independence from Britain and became the first states. The stripes have remained at 13 since the flag's original design, serving as a permanent reminder of the nation's origins. While the number of stars has changed as new states joined the Union, the 13 stripes honor the colonies that founded the nation: New Hampshire, Massachusetts, Rhode Island, Connecticut, New York, New Jersey, Pennsylvania, Delaware, Maryland, Virginia, North Carolina, South Carolina, and Georgia.",
    relatedQuestionIds: [81, 122, 123, 76],
    keyTerms: ["13 stripes", "original colonies", "American flag", "national symbol"],
  },
  122: {
    explanation:
      "The American flag has 50 stars because each star represents one of the 50 states in the Union. The current 50-star flag has been in use since July 4, 1960, when Hawaii became the 50th state. The flag's design has changed 27 times throughout history as new states were admitted to the Union. The first flag had 13 stars in a circle, representing the original 13 colonies. Each time a new state joins, a star is added on the following July 4th.",
    relatedQuestionIds: [121, 81, 123, 119],
    keyTerms: ["50 stars", "50 states", "American flag", "national symbol"],
  },
  123: {
    explanation:
      "The national anthem of the United States is 'The Star-Spangled Banner.' It was written by Francis Scott Key in 1814 after he witnessed the British bombardment of Fort McHenry in Baltimore during the War of 1812. Key was inspired when he saw the American flag still flying over the fort at dawn, indicating the fort had not surrendered. The poem was set to music and officially became the national anthem by an act of Congress in 1931.",
    relatedQuestionIds: [121, 122, 66, 91],
    keyTerms: ["Star-Spangled Banner", "Francis Scott Key", "national anthem", "Fort McHenry"],
  },
  124: {
    explanation:
      "The nation's first motto, 'E Pluribus Unum,' is a Latin phrase meaning 'Out of many, one.' It reflects the founding principle that many states (and many peoples) came together to form one unified nation. The phrase appeared on the Great Seal of the United States adopted in 1782 and has been featured on U.S. coins since 1795. While 'In God We Trust' became the official motto in 1956, 'E Pluribus Unum' remains an important national symbol of unity in diversity.",
    relatedQuestionIds: [121, 122, 81, 10],
    keyTerms: ["E Pluribus Unum", "Out of many one", "national motto", "Great Seal"],
  },
  125: {
    explanation:
      "Independence Day, celebrated on July 4th, is the holiday that commemorates the adoption of the Declaration of Independence on July 4, 1776, when the American colonies declared their freedom from British rule. Often called 'the country's birthday,' it is one of the most important national holidays. Americans celebrate with fireworks, parades, barbecues, and patriotic displays. The holiday represents the founding principles of liberty, equality, and self-governance that define the American identity.",
    relatedQuestionIds: [79, 8, 126, 76],
    keyTerms: ["Independence Day", "July 4th", "national holiday", "Declaration of Independence"],
  },
  126: {
    explanation:
      "The United States has numerous national holidays that honor important events, people, and values. These include New Year's Day, Martin Luther King Jr. Day, Presidents Day, Memorial Day, Juneteenth (celebrating the end of slavery), Independence Day, Labor Day, Columbus Day, Veterans Day, Thanksgiving Day, and Christmas Day. Each holiday carries historical significance: Memorial Day honors fallen soldiers, Veterans Day honors all who served, and Thanksgiving celebrates the harvest tradition dating back to the colonial era.",
    relatedQuestionIds: [125, 127, 128, 113],
    keyTerms: ["national holidays", "federal holidays", "Thanksgiving", "Juneteenth"],
  },
  127: {
    explanation:
      "Memorial Day is a federal holiday observed on the last Monday of May each year. It honors the men and women who died while serving in the United States military. Originally known as Decoration Day, it originated after the Civil War to commemorate fallen Union soldiers. Over time, it expanded to honor all American military personnel who made the ultimate sacrifice. Many Americans visit cemeteries and memorials, and flags are flown at half-staff until noon on Memorial Day.",
    relatedQuestionIds: [126, 128, 70, 72],
    keyTerms: ["Memorial Day", "fallen soldiers", "military sacrifice", "Decoration Day"],
  },
  128: {
    explanation:
      "Veterans Day is a federal holiday observed on November 11th each year. It honors all people who have served in the United States military, including those currently serving and those who have been discharged. Unlike Memorial Day, which specifically honors those who died in service, Veterans Day celebrates the contributions of all veterans. The date of November 11th was chosen because it marks the anniversary of the armistice that ended World War I in 1918 at the 11th hour of the 11th day of the 11th month.",
    relatedQuestionIds: [126, 127, 70, 100],
    keyTerms: ["Veterans Day", "military service", "November 11", "armistice"],
  },
};
