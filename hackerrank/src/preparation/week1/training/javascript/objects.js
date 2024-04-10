console.log(`Object literals:`);
let empty = {};
console.log(`Empty: ${empty}`);
console.log(empty);
let point = {x: 0, y: 0};
console.log(`Point:`);
console.log(point);
let p2 = {x: point.x, y: point.y};
console.log("P2:");
console.log(p2);

let book = {
    "main-title": "JavaScript",
    "sub-title": "The Definitive Guide",
    for: "all audiences",
    author: {
        firstName: "David",
        surname: "Flanagan"
    }
};
console.log("Book: ");
console.log(book);

for(let element in book) {
    console.log(element);
}

console.log(`\nCreating Objects with new`);
let obj = new Object();   // Create new object, same as {}
let a = new Array();    // Create new array, same as []
let d = new Date();     // Create a Date object representing current time
let r = new Map();      // Create a Map object for key/value mapping

console.log(`\nObject.create()`);
let o1 = Object.create({x: 1, y: 2});   //o1 inherits properties x and y
console.log("o1: ");
console.log(o1);
console.log(o1.x + o1.y);
let o2 = Object.create(null);   // o2 inherits no props or methods
console.log("o2: ");
console.log(o2);
let o3 = Object.create(Object.prototype);   // o3 is like {} or new Object()
console.log("o3: ");
console.log(o3); 

console.log(`\nQuerying and setting properties`);
let author = book.author;
console.log(`Author: ${author}`);
console.log(`Author firstname: ${author.firstName}`);
console.log(`Author surname: ${author["surname"]}`);
console.log(author);
console.log(author.surname);
let title = book["main-title"];
console.log(`Main title: ${book["main-title"]}`);

// book.edition = 7;    // it is working only for javascript, show error for typescript
book["edition"] = 7;
book["main-title"] = "ECMAScript";
console.log(book);

let shoppingList = {
    "title": "Shopping List",
    "first thing": "Sugar",
    "second thing": "Salad",
    spices: {
        "pepper": "false",
        "cynamon": "yes"
    }
}

console.log(shoppingList["spices"]["cynamon"]);
console.log(shoppingList["spices"].cynamon);

shoppingList["spices"]["pepper"] = "red";
console.log(shoppingList);

console.log(`\nInheritance`);
let o = {};    // o inherits object methods form Object.prototype
o.x = 1;       // and it now has an own property x
let p = Object.create(o);  // p inherits properties from o and Object.prototype
p.y = 2;        // and has an own property y
let q = Object.create(p);   // q inherits properties from p, o, and Object.prototype
q.z = 3;        // and has an own property z
let f = q.toString();   // toString() is inherited from Object.prototype
q.x + q.y       // => 3; x and y are inherited from o and p


let unitCircle = { r: 1 };
let c = Object.create(unitCircle);
c.x = 1, c.y = 2;
c.r = 2;
console.log("UnitCircle:")
console.log(unitCircle);
console.log("C:");
console.log(c);

console.log("UnitCircle.r: " + unitCircle.r);
console.log("C.r: " + c.r);

console.log(`\nDeleting properties`);

let myBook = {
    "title": "Main book",
    "subtitle": "Preface",
    chapters: {
        "chapter1": "Intro",
        "chapter2": "New quality"
    },
    price: 120,
    isAvailable: true
}

console.log(`My Book:`);
console.log(myBook);

delete myBook.isAvailable;

console.log(`My Book after deleting isAvailable field:`);
console.log(myBook);

console.log(`Testing properties`);

