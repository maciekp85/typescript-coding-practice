type Person = {
    id: string,
    name: string,
    city: string
};

class Employee {

    private city: string;

    constructor(public readonly id: string, public name: string, private dept: string, city: string) {
        // no statements required
        this.city = city;
    }

    writeDept(): void {
        console.log(`${this.name} works in ${this.dept}`);
    }

    get location() {
        return this.city;
    }

    set location(newCity) {
        this.city = newCity;
    }
}

let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
salesEmployee.writeDept();
console.log(`Location: ${salesEmployee.location}`);
salesEmployee.location = "London";
console.log(`Location: ${salesEmployee.location}`);