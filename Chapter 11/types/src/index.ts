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
        switch(this.city) {
            case "Paris":
                return "France";
            case "London":
                return "UK";
            default:
                return this.city;
        }
    }

    get details() {
        return `${this.name}, ${this.dept}, ${this.location}`;
    }

    accessor salary: number = 100_000;
}

let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
salesEmployee.writeDept();
console.log(`Location: ${salesEmployee.location}`);
console.log(`Details: ${salesEmployee.details}`);
console.log(`Salary: ${salesEmployee.salary}`);