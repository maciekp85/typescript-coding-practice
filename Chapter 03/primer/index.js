let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`);

function sumPricess(first, second, third) {
    return first + second + third;
}

let totalPrice = sumPricess(hatPrice, bootsPrice);
console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);

totalPrice = sumPricess(100, 200, 300);
console.log(`Total price: ${totalPrice} ${typeof totalPrice}`);

totalPrice = sumPricess(100, 200);
console.log(`Total price: ${totalPrice} ${typeof totalPrice}`);