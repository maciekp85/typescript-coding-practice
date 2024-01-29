function printMessage(msg: string): void {
    console.log(`Message: ${msg}`);
}

printMessage("Hello, TypeScript");
// printMessage(100);   // creating a type mismatch
printMessage("It is sunny today");