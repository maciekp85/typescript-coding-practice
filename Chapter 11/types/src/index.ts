class Person {
    constructor(public id: string, public name: string, public city: string) {

    }
}

class Employee extends Person {

    constructor(public readonly id: string, public name: string, private dept: string, city: string) {
        super(id, name, city);
        this.city = city;
    }

    writeDept(): void {
        console.log(`${this.name} works in ${this.dept}`);
    }
}

class Customer extends Person {

    constructor(public readonly id: string, public name: string, public city: string, public creditLimit: number) {
        super(id, name, city);
    }
}

class Supplier extends Person {

    constructor(public readonly id: string, public name: string, public city: string, public companyName: string) {
        super(id, name, city);
    }
}


let data = [new Employee("fvega", "Fidel Vega", "Sales", "Paris"), new Customer("ajones", "Alice Jones", "London", 500)];

data.push(new Supplier("dpeters", "Dora Peters", "New York", "Acme"));

data.forEach(item => {
    console.log(`Person: ${item.name}, ${item.city}`);
    if (item instanceof Employee) {
        item.writeDept();
    } else if (item instanceof Customer) {
        console.log(`Customer ${item.name} has ${item.creditLimit} limit`);
    } else if (item instanceof Supplier) {
        console.log(`Customer ${item.name} works for ${item.companyName}`);
    }
})