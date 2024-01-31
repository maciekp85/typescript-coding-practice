function calculateTax(amount: number): number;
function calculateTax(amount: null): null;

function calculateTax(amount: number | null): number | null {
    if (amount != null) {
        return (amount * 1.2);
    }
    return null;
}

function writeValues(label: string, value: number): void {
    console.log(`${label}: ${value}`);
}

let taxAmount: number | null = calculateTax(100);
// if (typeof taxAmount === "number") {
    writeValues("Tax value", taxAmount);
// }