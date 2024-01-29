import { sum } from "./calc.js";

let printMessage = (msg: string): void => console.log(`Message: ${ msg }`);

let message = ("Hello, TypeScript");
printMessage(message);

debugger;

let total = sum(100, 200, 300);
printMessage(`Total: ${total}`);