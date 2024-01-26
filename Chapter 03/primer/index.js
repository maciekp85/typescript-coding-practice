let hat = {
    name: "Hat",
    _price: 100,
    priceIncTax: 100* 1.2,

    set price(newPrice) {
        this._price = newPrice;
        this.priceIncTax = this._price * 1.2;
    },

    get price() {
        return this._price;
    },

    writeDetails: () => 
        console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`)
};

let boots = {
    name: "Boots",
    price: "100",

    get priceIncTax() {
        return Number(this.price) * 1.2;
    }
};

hat.writeDetails();
hat.price = 120;
hat.writeDetails();

console.log(`Boots: ${boots.price}, ${boots.priceIncTax}`);
boots.price = "120";
console.log(`Boots: ${boots.price}, ${boots.priceIncTax}`);

function writeMessage(message) {
    console.log(`${this.greeting}, ${message}`);
}

greeting = "Hello";
writeMessage("It is sunny today");
writeMessage.call(global, "It is sunny today");

let myObject = {
    greeting: "Hi, there",

    writeMessage(message) {
        console.log(`${this.greeting}, ${message}`);
    }
}

greeting = "Hello";

myObject.writeMessage("It is sunny day");
myObject.writeMessage.call(myObject, "It is sunny day");

let myFunction = myObject.writeMessage;
myFunction("It is sunny day");