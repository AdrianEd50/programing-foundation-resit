/*Practical*/

/*Task 1*/
var firstNmae = "Adrian";
var surName = "Lafjell Ed";

var fullName = firstNmae + " " + surName;
console.log(fullName);

/*Task 2*/
const house = {
  type: "apartment",

  rooms: "3",

  material: "wood",

  occupied: true,
};

console.log([house.type, house.rooms, house.material, house.occupied]);

/*Task 3*/
var books = [
  {
    name: "rich dad poor dad",
  },
  {
    name: "Lord of the rings, the wo towers",
  },
  {
    name: "Harry potter and the sorcery stone",
  },
];

const book = books;

function bookName(book) {
  for (var i = 0; i < book.length; i++) {
    console.log("I like" + " " + book[i].name);
  }
}

bookName(book);
