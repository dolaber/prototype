// List of all the people
var people = [
  {
    id: 0,
    firstName: "Mccormick",
    lastName: "Downs",
    sport: "basketball",
    position: "guard"
  },
  {
    id: 1,
    firstName: "Myrna",
    lastName: "Rosa",
    sport: "baseball",
    position: "catcher"
  },
  {
    id: 2,
    firstName: "Joyce",
    lastName: "Moon",
    sport: "baseball",
    position: "first base"
  },
  {
    id: 3,
    firstName: "Church",
    lastName: "Hahn",
    sport: "baseball",
    position: "right fielder"
  },
  {
    id: 4,
    firstName: "Dyer",
    lastName: "Boyle",
    sport: "basketball",
    position: "center"
  },
  {
    id: 5,
    firstName: "Jody",
    lastName: "Rivers",
    sport: "basketball",
    position: "guard"
  },
  {
    id: 6,
    firstName: "Cruz",
    lastName: "Nieves",
    sport: "basketball",
    position: "center"
  },
  {
    id: 7,
    firstName: "Drake",
    lastName: "Branch",
    sport: "basketball",
    position: "center"
  },
  {
    id: 8,
    firstName: "Ratliff",
    lastName: "Harmon",
    sport: "basketball",
    position: "forward"
  },
  {
    id: 9,
    firstName: "Huff",
    lastName: "Aguirre",
    sport: "basketball",
    position: "forward"
  },
  {
    id: 10,
    firstName: "Knapp",
    lastName: "Ramos",
    sport: "baseball",
    position: "left fielder"
  },
  {
    id: 11,
    firstName: "Jaclyn",
    lastName: "Riley",
    sport: "baseball",
    position: "center fielder"
  },
  {
    id: 12,
    firstName: "Patty",
    lastName: "Hubbard",
    sport: "basketball",
    position: "center"
  },
  {
    id: 13,
    firstName: "Krista",
    lastName: "Finley",
    sport: "basketball",
    position: "guard"
  },
  {
    id: 14,
    firstName: "Norman",
    lastName: "Parrish",
    sport: "baseball",
    position: "catcher"
  },
  {
    id: 15,
    firstName: "Barbra",
    lastName: "Crosby",
    sport: "basketball",
    position: "forward"
  },
  {
    id: 16,
    firstName: "Tisha",
    lastName: "Gordon",
    sport: "basketball",
    position: "guard"
  },
  {
    id: 17,
    firstName: "Beatrice",
    lastName: "Vang",
    sport: "basketball",
    position: "forward"
  },
  {
    id: 18,
    firstName: "Lloyd",
    lastName: "Head",
    sport: "baseball",
    position: "first base"
  },
  {
    id: 19,
    firstName: "Lillian",
    lastName: "Dejesus",
    sport: "baseball",
    position: "right fielder"
  },
  {
    id: 20,
    firstName: "Bonner",
    lastName: "Suarez",
    sport: "baseball",
    position: "first base"
  },
  {
    id: 21,
    firstName: "Dejesus",
    lastName: "Clements",
    sport: "basketball",
    position: "center"
  },
  {
    id: 22,
    firstName: "Rosa",
    lastName: "Rosales",
    sport: "basketball",
    position: "forward"
  },
  {
    id: 23,
    firstName: "Hess",
    lastName: "Carter",
    sport: "basketball",
    position: "center"
  },
  {
    id: 24,
    firstName: "Benson",
    lastName: "Richardson",
    sport: "basketball",
    position: "guard"
  },
  {
    id: 25,
    firstName: "Fry",
    lastName: "Graham",
    sport: "basketball",
    position: "guard"
  },
  {
    id: 26,
    firstName: "Pitts",
    lastName: "Hanson",
    sport: "baseball",
    position: "right fielder"
  },
  {
    id: 27,
    firstName: "Muriel",
    lastName: "Lindsey",
    sport: "baseball",
    position: "pitcher"
  },
  {
    id: 28,
    firstName: "Mara",
    lastName: "Armstrong",
    sport: "baseball",
    position: "pitcher"
  },
  {
    id: 29,
    firstName: "Cecile",
    lastName: "Greene",
    sport: "basketball",
    position: "center"
  },
  {
    id: 30,
    firstName: "Lauri",
    lastName: "Knapp",
    sport: "basketball",
    position: "center"
  },
  {
    id: 31,
    firstName: "Jeanne",
    lastName: "Riddle",
    sport: "basketball",
    position: "guard"
  },
  {
    id: 32,
    firstName: "Ericka",
    lastName: "Rice",
    sport: "basketball",
    position: "center"
  },
  {
    id: 33,
    firstName: "Verna",
    lastName: "Mclean",
    sport: "basketball",
    position: "forward"
  },
  {
    id: 34,
    firstName: "Howard",
    lastName: "Gutierrez",
    sport: "baseball",
    position: "catcher"
  },
  {
    id: 35,
    firstName: "Sarah",
    lastName: "Holden",
    sport: "basketball",
    position: "center"
  },
  {
    id: 36,
    firstName: "Suarez",
    lastName: "Levy",
    sport: "basketball",
    position: "center"
  },
  {
    id: 37,
    firstName: "Kate",
    lastName: "Blanchard",
    sport: "baseball",
    position: "right fielder"
  },
  {
    id: 38,
    firstName: "Taylor",
    lastName: "Franco",
    sport: "baseball",
    position: "third base"
  },
  {
    id: 39,
    firstName: "Charmaine",
    lastName: "Stein",
    sport: "baseball",
    position: "center fielder"
  },
  {
    id: 40,
    firstName: "Liliana",
    lastName: "Joyce",
    sport: "baseball",
    position: "first base"
  },
  {
    id: 41,
    firstName: "Bush",
    lastName: "Harrington",
    sport: "basketball",
    position: "center"
  },
  {
    id: 42,
    firstName: "Nelda",
    lastName: "Page",
    sport: "baseball",
    position: "pitcher"
  },
  {
    id: 43,
    firstName: "Gayle",
    lastName: "Mcguire",
    sport: "basketball",
    position: "forward"
  },
  {
    id: 44,
    firstName: "Morgan",
    lastName: "Battle",
    sport: "baseball",
    position: "first base"
  },
  {
    id: 45,
    firstName: "Danielle",
    lastName: "Vasquez",
    sport: "basketball",
    position: "forward"
  },
  {
    id: 46,
    firstName: "Patrick",
    lastName: "Mercer",
    sport: "baseball",
    position: "second base"
  },
  {
    id: 47,
    firstName: "Barton",
    lastName: "Winters",
    sport: "baseball",
    position: "catcher"
  },
  {
    id: 48,
    firstName: "Stein",
    lastName: "Gardner",
    sport: "baseball",
    position: "second base"
  },
  {
    id: 49,
    firstName: "Rowena",
    lastName: "Fletcher",
    sport: "baseball",
    position: "left fielder"
  }
];
