import { City, Person, Product, Employee } from "./dataTypes.js";

type MakeOptional<T> = {
    [P in keyof T]? : T[P]
}

type MakeRequired<T> = {
    [P in keyof T]-? : T[P]
}

type MakeReadOnly<T> = {
    readonly [P in keyof T] : T[P]
}

type MakeReadWrite<T> = {
    -readonly [P in keyof T] : T[P]
}

type optionalType = MakeOptional<Product>;
type requiredType = MakeRequired<Product>;
type readOnlyType = MakeReadOnly<Product>;
type readWriteType = MakeReadWrite<Product>;

let p: readWriteType = { name: "Kayak", price: 275};
console.log(`Mapped type: ${p.name}, ${p.price}`);