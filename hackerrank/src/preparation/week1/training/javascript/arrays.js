let array = ["Maciek", "Ela", "Jacek"];

for (let index = 0; index < array.length; index++) {
    console.log(`${index}: ${array[index]}`);
}

let index = 0;
for (let element of array) {
    console.log(`${index}: ${element}`);
    index++;
}

console.log("Before adding new item: " + array);
console.log(`Before adding new item: ${array}`);
array.push("Roman");
console.log(array);
console.log(`array.at(0): ${array.at(0)}`);
console.log(`array.at(3): ${array.at(3)}`);
console.log(`array.at(4): ${array.at(4)}`);

array.forEach(i => {
    console.log(i);
})

console.log(`Array before using pop() method: ${array}`);
console.log(`array.pop(): ${array.pop()}`);
console.log(`Array after using pop() method: ${array}`);

let numbers = [];
console.log(`Numbers array: ${numbers}`);
numbers = [];
console.log(`Numbers array: ${numbers}`);
numbers.push(5);
numbers.push(15);
numbers.push(30);
console.log(`Numbers array: ${numbers}`);

console.log(`\nArray literals`)
let arrayMisc = ["string", 3, true, ];
console.log(`An array with 3 elements of various types +  trailing comma: `);
console.log(arrayMisc);
console.log(`arrayMisc.length: ${arrayMisc.length}`)
console.log(`arrayMisc.toString(): ${arrayMisc.toString()}`);
let message = arrayMisc;
console.log(message);

console.log("\nSpread operator");
let original = [1, 2, 3, 4];
console.log(`Original array: ${original}`);
let copy = [...original];
console.log(`Copy array: ${copy}}`);

console.log(`Turn string into an array of single-character strings:`)
let digits = [..."1234567890"];
console.log(digits);

console.log("\nArray constructor");
let a = new Array(4);
console.log(a);

console.log("Array.of(1, 2, 3, 4)");
console.log(Array.of(1, 2, 3));
let original1 = Array.of(1, 2, 3);
console.log("let original1: number[] = Array.of(1, 2, 3);")
console.log(`original1: ${original1}`);
console.log("let copy1: number[] = Array.from(original1);");
let copy1 = Array.from(original1);
console.log(`copy1: ${copy1}`);

console.log(`\nlet o: Object = {};`)
let o = {};
console.log(`o: `);
console.log(o);
console.log(`o.toString(): `);
console.log(o.toString());
console.log(`o.toLocaleString(): `);
console.log(o.toLocaleString());
console.log(`o.valueOf(): `);
console.log(o.valueOf);

console.log(`\no[1] = "test";`);
o[1] = "test";
console.log(`o: `);
console.log(o);
console.log(`o.toString(): `);
console.log(o.toString());
console.log(`o.toLocaleString(): `);
console.log(o.toLocaleString());
console.log(`o.valueOf(): `);
console.log(o.valueOf);

console.log(`\no[1] = "test1";`);
o[1] = "test1";
console.log(`o: `);
console.log(o);
console.log(`o.toString(): `);
console.log(o.toString());
console.log(`o.toLocaleString(): `);
console.log(o.toLocaleString());
console.log(`o.valueOf(): `);
console.log(o.valueOf());

console.log(`\no["1]: ${o["1"]}`);

console.log(`\nArray methods:`)
let data = [1, 2, 3, 4, 5], sum = 0;
console.log(`array data:`);
console.log(data);
console.log("\nforEach()");
data.forEach(value => {
    sum += value;
})
console.log(`Sum: ${sum}`);

console.log("\nforEach() 2nd option");
console.log(`array data before incrementation:`);
console.log(data);
data.forEach(function(v, i, a) {
    a[i] = v + 1;
})
console.log(`array data after incrementation:`);
console.log(data);

console.log(`\nmap()`);
console.log(`array data before map() usage:`);
console.log(data);
data = data.map(x => x * x);
console.log(`data.map(x => x * x): `);
console.log(`array data after map() usage:`);
console.log(data);

console.log(`\nfilter()`);
let b = [1, 2, 3, 4, 5];
console.log(`Array before filtering`)
console.log(b);
console.log(`b.filter((x, i) => i%2 === 0):`)
console.log(b.filter((x, i) => i%2 === 0));
b = b.filter(x => x > 3);
console.log(`Array after filtering b.filter(x => x > 3):`)
console.log(b);

console.log(`\nfind() and findIndex()`);
let c = [1, 2, , 3, 4, 5];
console.log(`Array before finding`)
console.log(c);
console.log(`Array length: ${c.length}`);
console.log(`c.findIndex(x => x ===3): ${c.findIndex(x => x ===3)}`);
console.log(`c.findIndex(x => x < 0): ${c.findIndex(x => x < 0)}`);

console.log(`\nevery() and some()`);
let d = [1, 2, , 3, 4, 5];
console.log(`Array before finding`)
console.log(d);
console.log(`d.every(v => v < 10): ${d.every(v => v < 10)}`);  // true, all values are < 10
console.log(`d.some(v => v % 2 === 0): ${d.some(v => v % 2 === 0)}`); // true, d has some even numbers
console.log(`d.some(isNaN): ${d.some(isNaN)}`); // false, d has no non-numbers

console.log(`\nreduce()`);
let e = [1,2,3,4,5];
console.log(`Array before reducing`)
console.log(`e.reduce((x,y) => x+y, 0)): ${e.reduce((x,y) => x+y, 0)}`);  //First element is reduction function (produce single value), second argument is an initial value

console.log(`\nFlattening arrays with flat() and flatMap()`);
let f = [1, 2, 3, [4]];
console.log(`Array before flatting flat():`);
console.log(f);
console.log(`Array after flatting:`);
console.log(f.flat());

console.log(`\nArray before flatting flatMap():`);
let g = ["hello world", "the definitive guide"];
console.log(g);
console.log(`Array after flatting flatMap():`);
console.log(g.flatMap(phrase => phrase.split(" ")));

console.log("\nAdding arrays with concat()");
let h = [1, 2, 3];
let i = [4, 5];
console.log(`Array h:`);
console.log(h);
console.log(`Array i:`);
console.log(i);
console.log(`h.concat(i): ${h.concat(i)}`);
console.log();
