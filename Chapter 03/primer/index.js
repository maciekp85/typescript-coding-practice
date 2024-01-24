let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`);

function sumPricess(...numbers) {
    return numbers.reduce(function(total, val) {
        return total + val;
    }, 0);
}

let totalPrice = sumPricess(hatPrice, bootsPrice);
console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);

totalPrice = sumPricess(100, 200, 300);
console.log(`Total price: ${totalPrice} ${typeof totalPrice}`);

totalPrice = sumPricess(100, 200);
console.log(`Total price: ${totalPrice} ${typeof totalPrice}`);