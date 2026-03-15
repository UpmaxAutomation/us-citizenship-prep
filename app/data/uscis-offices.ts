export interface USCISOffice {
  city: string;
  type: "Field Office" | "Application Support Center";
}

export const uscisOffices: Record<string, USCISOffice[]> = {
  "Alabama": [
    { city: "Montgomery", type: "Field Office" },
  ],
  "Alaska": [
    { city: "Anchorage", type: "Field Office" },
  ],
  "Arizona": [
    { city: "Phoenix", type: "Field Office" },
    { city: "Tucson", type: "Field Office" },
  ],
  "Arkansas": [
    { city: "Fort Smith", type: "Field Office" },
  ],
  "California": [
    { city: "Los Angeles", type: "Field Office" },
    { city: "San Francisco", type: "Field Office" },
    { city: "San Diego", type: "Field Office" },
    { city: "Sacramento", type: "Field Office" },
    { city: "San Jose", type: "Field Office" },
    { city: "San Bernardino", type: "Field Office" },
  ],
  "Colorado": [
    { city: "Denver", type: "Field Office" },
  ],
  "Connecticut": [
    { city: "Hartford", type: "Field Office" },
  ],
  "Delaware": [
    { city: "Dover", type: "Field Office" },
  ],
  "Florida": [
    { city: "Miami", type: "Field Office" },
    { city: "Orlando", type: "Field Office" },
    { city: "Jacksonville", type: "Field Office" },
    { city: "Tampa", type: "Field Office" },
    { city: "West Palm Beach", type: "Field Office" },
    { city: "Hialeah", type: "Field Office" },
  ],
  "Georgia": [
    { city: "Atlanta", type: "Field Office" },
  ],
  "Hawaii": [
    { city: "Honolulu", type: "Field Office" },
  ],
  "Idaho": [
    { city: "Boise", type: "Field Office" },
  ],
  "Illinois": [
    { city: "Chicago", type: "Field Office" },
  ],
  "Indiana": [
    { city: "Indianapolis", type: "Field Office" },
  ],
  "Iowa": [
    { city: "Des Moines", type: "Field Office" },
  ],
  "Kansas": [
    { city: "Wichita", type: "Field Office" },
  ],
  "Kentucky": [
    { city: "Louisville", type: "Field Office" },
  ],
  "Louisiana": [
    { city: "New Orleans", type: "Field Office" },
  ],
  "Maine": [
    { city: "South Portland", type: "Field Office" },
  ],
  "Maryland": [
    { city: "Baltimore", type: "Field Office" },
  ],
  "Massachusetts": [
    { city: "Boston", type: "Field Office" },
    { city: "Lawrence", type: "Field Office" },
  ],
  "Michigan": [
    { city: "Detroit", type: "Field Office" },
  ],
  "Minnesota": [
    { city: "Saint Paul", type: "Field Office" },
  ],
  "Mississippi": [
    { city: "Jackson", type: "Field Office" },
  ],
  "Missouri": [
    { city: "Kansas City", type: "Field Office" },
    { city: "Saint Louis", type: "Field Office" },
  ],
  "Montana": [
    { city: "Helena", type: "Field Office" },
  ],
  "Nebraska": [
    { city: "Omaha", type: "Field Office" },
  ],
  "Nevada": [
    { city: "Las Vegas", type: "Field Office" },
    { city: "Reno", type: "Field Office" },
  ],
  "New Hampshire": [
    { city: "Manchester", type: "Field Office" },
  ],
  "New Jersey": [
    { city: "Newark", type: "Field Office" },
    { city: "Mount Laurel", type: "Field Office" },
  ],
  "New Mexico": [
    { city: "Albuquerque", type: "Field Office" },
  ],
  "New York": [
    { city: "New York City", type: "Field Office" },
    { city: "Long Island", type: "Field Office" },
    { city: "Queens", type: "Field Office" },
    { city: "Buffalo", type: "Field Office" },
    { city: "Albany", type: "Field Office" },
  ],
  "North Carolina": [
    { city: "Charlotte", type: "Field Office" },
    { city: "Raleigh", type: "Field Office" },
  ],
  "North Dakota": [
    { city: "Fargo", type: "Field Office" },
  ],
  "Ohio": [
    { city: "Cleveland", type: "Field Office" },
    { city: "Columbus", type: "Field Office" },
    { city: "Cincinnati", type: "Field Office" },
  ],
  "Oklahoma": [
    { city: "Oklahoma City", type: "Field Office" },
  ],
  "Oregon": [
    { city: "Portland", type: "Field Office" },
  ],
  "Pennsylvania": [
    { city: "Philadelphia", type: "Field Office" },
    { city: "Pittsburgh", type: "Field Office" },
  ],
  "Rhode Island": [
    { city: "Providence", type: "Field Office" },
  ],
  "South Carolina": [
    { city: "Charleston", type: "Field Office" },
    { city: "Greer", type: "Field Office" },
  ],
  "South Dakota": [
    { city: "Sioux Falls", type: "Field Office" },
  ],
  "Tennessee": [
    { city: "Memphis", type: "Field Office" },
    { city: "Nashville", type: "Field Office" },
  ],
  "Texas": [
    { city: "Houston", type: "Field Office" },
    { city: "Dallas", type: "Field Office" },
    { city: "San Antonio", type: "Field Office" },
    { city: "El Paso", type: "Field Office" },
    { city: "Harlingen", type: "Field Office" },
  ],
  "Utah": [
    { city: "Salt Lake City", type: "Field Office" },
  ],
  "Vermont": [
    { city: "Saint Albans", type: "Field Office" },
  ],
  "Virginia": [
    { city: "Norfolk", type: "Field Office" },
    { city: "Fairfax", type: "Field Office" },
  ],
  "Washington": [
    { city: "Seattle", type: "Field Office" },
    { city: "Yakima", type: "Field Office" },
  ],
  "West Virginia": [
    { city: "Charleston", type: "Field Office" },
  ],
  "Wisconsin": [
    { city: "Milwaukee", type: "Field Office" },
  ],
  "Wyoming": [
    { city: "Casper", type: "Field Office" },
  ],
  "District of Columbia": [
    { city: "Washington", type: "Field Office" },
  ],
};
