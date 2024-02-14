interface Person {
    name: string;
    getDetails(): string;
}

interface Product {
    name: string;
    price: number;
}

class SportsProduct implements Product {
    constructor(public name: string, public category: string, public price: number) {
        // no statements required
    }
}
class ProductGroup {
    constructor(...initialProducts: [string, Product][]) {
        initialProducts.forEach(p => this[p[0]] == p[1]);
    }

    [propertyName: string]: Product;
}

let group = new ProductGroup(["shoes", new SportsProduct("Shoes", "Running", 90.50)]);
group.hat = new SportsProduct("Hat", "Skiing", 20);
Object.keys(group).forEach(k => console.log(`Property Name: ${k} `));

if (group.hat && group.boots) {
    let total = group.hat.price + group.boots.price;
    console.log(`Total: ${total}`);
}
