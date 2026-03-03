export interface StateInfo {
  name: string;
  abbreviation: string;
  capital: string;
  governor: string;
  senators: [string, string];
}

// Current officeholders as of March 2026
// DC is listed with special handling: no voting senators or governor
export const states: StateInfo[] = [
  {
    name: "Alabama",
    abbreviation: "AL",
    capital: "Montgomery",
    governor: "Kay Ivey",
    senators: ["Tommy Tuberville", "Katie Britt"],
  },
  {
    name: "Alaska",
    abbreviation: "AK",
    capital: "Juneau",
    governor: "Mike Dunleavy",
    senators: ["Lisa Murkowski", "Dan Sullivan"],
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
    capital: "Phoenix",
    governor: "Katie Hobbs",
    senators: ["Kyrsten Sinema", "Ruben Gallego"],
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
    capital: "Little Rock",
    governor: "Sarah Huckabee Sanders",
    senators: ["John Boozman", "Tom Cotton"],
  },
  {
    name: "California",
    abbreviation: "CA",
    capital: "Sacramento",
    governor: "Gavin Newsom",
    senators: ["Alex Padilla", "Adam Schiff"],
  },
  {
    name: "Colorado",
    abbreviation: "CO",
    capital: "Denver",
    governor: "Jared Polis",
    senators: ["Michael Bennet", "John Hickenlooper"],
  },
  {
    name: "Connecticut",
    abbreviation: "CT",
    capital: "Hartford",
    governor: "Ned Lamont",
    senators: ["Richard Blumenthal", "Chris Murphy"],
  },
  {
    name: "Delaware",
    abbreviation: "DE",
    capital: "Dover",
    governor: "Matt Meyer",
    senators: ["Tom Carper", "Chris Coons"],
  },
  {
    name: "Florida",
    abbreviation: "FL",
    capital: "Tallahassee",
    governor: "Ron DeSantis",
    senators: ["Rick Scott", "Ashley Moody"],
  },
  {
    name: "Georgia",
    abbreviation: "GA",
    capital: "Atlanta",
    governor: "Brian Kemp",
    senators: ["Jon Ossoff", "Raphael Warnock"],
  },
  {
    name: "Hawaii",
    abbreviation: "HI",
    capital: "Honolulu",
    governor: "Josh Green",
    senators: ["Brian Schatz", "Mazie Hirono"],
  },
  {
    name: "Idaho",
    abbreviation: "ID",
    capital: "Boise",
    governor: "Brad Little",
    senators: ["Mike Crapo", "Jim Risch"],
  },
  {
    name: "Illinois",
    abbreviation: "IL",
    capital: "Springfield",
    governor: "JB Pritzker",
    senators: ["Dick Durbin", "Tammy Duckworth"],
  },
  {
    name: "Indiana",
    abbreviation: "IN",
    capital: "Indianapolis",
    governor: "Mike Braun",
    senators: ["Todd Young", "Jim Banks"],
  },
  {
    name: "Iowa",
    abbreviation: "IA",
    capital: "Des Moines",
    governor: "Kim Reynolds",
    senators: ["Chuck Grassley", "Joni Ernst"],
  },
  {
    name: "Kansas",
    abbreviation: "KS",
    capital: "Topeka",
    governor: "Laura Kelly",
    senators: ["Jerry Moran", "Roger Marshall"],
  },
  {
    name: "Kentucky",
    abbreviation: "KY",
    capital: "Frankfort",
    governor: "Andy Beshear",
    senators: ["Mitch McConnell", "Rand Paul"],
  },
  {
    name: "Louisiana",
    abbreviation: "LA",
    capital: "Baton Rouge",
    governor: "Jeff Landry",
    senators: ["Bill Cassidy", "John Kennedy"],
  },
  {
    name: "Maine",
    abbreviation: "ME",
    capital: "Augusta",
    governor: "Janet Mills",
    senators: ["Susan Collins", "Angus King"],
  },
  {
    name: "Maryland",
    abbreviation: "MD",
    capital: "Annapolis",
    governor: "Wes Moore",
    senators: ["Ben Cardin", "Angela Alsobrooks"],
  },
  {
    name: "Massachusetts",
    abbreviation: "MA",
    capital: "Boston",
    governor: "Maura Healey",
    senators: ["Elizabeth Warren", "Ed Markey"],
  },
  {
    name: "Michigan",
    abbreviation: "MI",
    capital: "Lansing",
    governor: "Gretchen Whitmer",
    senators: ["Gary Peters", "Elissa Slotkin"],
  },
  {
    name: "Minnesota",
    abbreviation: "MN",
    capital: "Saint Paul",
    governor: "Tim Walz",
    senators: ["Amy Klobuchar", "Tina Smith"],
  },
  {
    name: "Mississippi",
    abbreviation: "MS",
    capital: "Jackson",
    governor: "Tate Reeves",
    senators: ["Roger Wicker", "Cindy Hyde-Smith"],
  },
  {
    name: "Missouri",
    abbreviation: "MO",
    capital: "Jefferson City",
    governor: "Mike Kehoe",
    senators: ["Josh Hawley", "Eric Schmitt"],
  },
  {
    name: "Montana",
    abbreviation: "MT",
    capital: "Helena",
    governor: "Greg Gianforte",
    senators: ["Steve Daines", "Tim Sheehy"],
  },
  {
    name: "Nebraska",
    abbreviation: "NE",
    capital: "Lincoln",
    governor: "Jim Pillen",
    senators: ["Deb Fischer", "Pete Ricketts"],
  },
  {
    name: "Nevada",
    abbreviation: "NV",
    capital: "Carson City",
    governor: "Joe Lombardo",
    senators: ["Catherine Cortez Masto", "Jacky Rosen"],
  },
  {
    name: "New Hampshire",
    abbreviation: "NH",
    capital: "Concord",
    governor: "Kelly Ayotte",
    senators: ["Jeanne Shaheen", "Maggie Hassan"],
  },
  {
    name: "New Jersey",
    abbreviation: "NJ",
    capital: "Trenton",
    governor: "Phil Murphy",
    senators: ["Cory Booker", "Andy Kim"],
  },
  {
    name: "New Mexico",
    abbreviation: "NM",
    capital: "Santa Fe",
    governor: "Michelle Lujan Grisham",
    senators: ["Martin Heinrich", "Ben Ray Lujan"],
  },
  {
    name: "New York",
    abbreviation: "NY",
    capital: "Albany",
    governor: "Kathy Hochul",
    senators: ["Kirsten Gillibrand", "Chuck Schumer"],
  },
  {
    name: "North Carolina",
    abbreviation: "NC",
    capital: "Raleigh",
    governor: "Josh Stein",
    senators: ["Thom Tillis", "Ted Budd"],
  },
  {
    name: "North Dakota",
    abbreviation: "ND",
    capital: "Bismarck",
    governor: "Kelly Armstrong",
    senators: ["John Hoeven", "Kevin Cramer"],
  },
  {
    name: "Ohio",
    abbreviation: "OH",
    capital: "Columbus",
    governor: "Mike DeWine",
    senators: ["Sherrod Brown", "Bernie Moreno"],
  },
  {
    name: "Oklahoma",
    abbreviation: "OK",
    capital: "Oklahoma City",
    governor: "Kevin Stitt",
    senators: ["James Lankford", "Markwayne Mullin"],
  },
  {
    name: "Oregon",
    abbreviation: "OR",
    capital: "Salem",
    governor: "Tina Kotek",
    senators: ["Ron Wyden", "Jeff Merkley"],
  },
  {
    name: "Pennsylvania",
    abbreviation: "PA",
    capital: "Harrisburg",
    governor: "Josh Shapiro",
    senators: ["Bob Casey", "John Fetterman"],
  },
  {
    name: "Rhode Island",
    abbreviation: "RI",
    capital: "Providence",
    governor: "Dan McKee",
    senators: ["Jack Reed", "Sheldon Whitehouse"],
  },
  {
    name: "South Carolina",
    abbreviation: "SC",
    capital: "Columbia",
    governor: "Henry McMaster",
    senators: ["Lindsey Graham", "Tim Scott"],
  },
  {
    name: "South Dakota",
    abbreviation: "SD",
    capital: "Pierre",
    governor: "Larry Rhoden",
    senators: ["John Thune", "Mike Rounds"],
  },
  {
    name: "Tennessee",
    abbreviation: "TN",
    capital: "Nashville",
    governor: "Bill Lee",
    senators: ["Marsha Blackburn", "Bill Hagerty"],
  },
  {
    name: "Texas",
    abbreviation: "TX",
    capital: "Austin",
    governor: "Greg Abbott",
    senators: ["Ted Cruz", "John Cornyn"],
  },
  {
    name: "Utah",
    abbreviation: "UT",
    capital: "Salt Lake City",
    governor: "Spencer Cox",
    senators: ["Mike Lee", "John Curtis"],
  },
  {
    name: "Vermont",
    abbreviation: "VT",
    capital: "Montpelier",
    governor: "Phil Scott",
    senators: ["Bernie Sanders", "Peter Welch"],
  },
  {
    name: "Virginia",
    abbreviation: "VA",
    capital: "Richmond",
    governor: "Glenn Youngkin",
    senators: ["Mark Warner", "Tim Kaine"],
  },
  {
    name: "Washington",
    abbreviation: "WA",
    capital: "Olympia",
    governor: "Bob Ferguson",
    senators: ["Patty Murray", "Maria Cantwell"],
  },
  {
    name: "West Virginia",
    abbreviation: "WV",
    capital: "Charleston",
    governor: "Patrick Morrisey",
    senators: ["Shelley Moore Capito", "Jim Justice"],
  },
  {
    name: "Wisconsin",
    abbreviation: "WI",
    capital: "Madison",
    governor: "Tony Evers",
    senators: ["Tammy Baldwin", "Eric Hovde"],
  },
  {
    name: "Wyoming",
    abbreviation: "WY",
    capital: "Cheyenne",
    governor: "Mark Gordon",
    senators: ["John Barrasso", "Cynthia Lummis"],
  },
  {
    name: "District of Columbia",
    abbreviation: "DC",
    capital: "Washington, D.C.",
    governor: "N/A (DC does not have a governor; the mayor is Muriel Bowser)",
    senators: ["N/A (DC does not have voting U.S. senators)", "N/A (DC does not have voting U.S. senators)"],
  },
];

export function getStateByAbbreviation(abbreviation: string): StateInfo | undefined {
  return states.find((s) => s.abbreviation === abbreviation);
}

export function getStateByName(name: string): StateInfo | undefined {
  return states.find((s) => s.name.toLowerCase() === name.toLowerCase());
}

export function stateNameToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function getStateBySlug(slug: string): StateInfo | undefined {
  return states.find(
    (s) => s.name.toLowerCase().replace(/\s+/g, "-") === slug
  );
}

export function getAllStateSlugs(): string[] {
  return states.map((s) => stateNameToSlug(s.name));
}
