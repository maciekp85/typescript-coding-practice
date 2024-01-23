let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`);

if (hatPrice === bootsPrice) {
    console.log("Prices are the same");
} else {
    console.log("Prices are different");
}

let totalPrice = Number(hatPrice) + Number(bootsPrice);
console.log(`Total Price: ${totalPrice}`);

let myVariable = "Adam";
console.log(`Type: ${typeof myVariable}`);

myVariable = 100;
console.log(`Type: ${typeof myVariable}`);

/*
When the typeof keyword is used on null values, the result is object.
This is a long-standing behavior that dates back to the earliest days of JavaScript and that hasn’t
been changed because so much code has been written that expects this behavior.
*/
console.log(`Type of null: ${typeof null}`);