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

let firstCity;
let secondCity = firstCity || "London";
console.log(`City: ${secondCity}`);

let taxRate;    // no tax rate has been defined
console.log(`Tax rate: ${taxRate ?? 10}%`);
taxRate = 0;
console.log(`Tax rate: ${taxRate ?? 20}%`);
taxRate = "";
console.log(`Tax rate: ${taxRate ?? 30}%`);
taxRate = NaN;
console.log(`Tax rate: ${taxRate ?? 40}%`);
taxRate = undefined;
console.log(`Tax rate: ${taxRate ?? 50}%`);
taxRate = null;
console.log(`Tax rate: ${taxRate ?? 60}%`);