class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

class TaxedProduct extends Product {
    constructor(name, price, taxRate = 1.2) {
        super(name, price);
        this.taxRate = taxRate;
    }

    getPriceIncTax() {
        return Number(this.price) * this.taxRate;
    }

    toString() {
        let chainResult = super.toString();
        return `${chainResult}, Tax: ${this.#getDetail()}`;
    }
    
    static process(...products) {
        products.forEach(p => console.log(p.toString()));
    }

    #getDetail() {
        return `Tax: ${this.getPriceIncTax()}`;
    }
}

TaxedProduct.process(new TaxedProduct("Hat", 100), new TaxedProduct("Boots", 100));