import { TodoItem } from "./todoItem.js";
import { TodoCollection } from "./todoCollection.js";

let todos : TodoItem[] = [
    new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)];

let collection : TodoCollection = new TodoCollection("Maciek", todos);

console.clear();
// console.log(`${collection.userName}'s Todo List`);
console.log(`${collection.userName}' Todo List ` + ` (${collection.getItemCounts().incomplete } items to do)`);

// let newId : number = collection.addTodo("Go for run");
// let todoItem : TodoItem = collection.getTodoById(newId);
// todoItem.printDetails();
// collection.addTodo(todoItem);   // Argument of type 'TodoItem' is not assignable to parameter of type 'string'.ts(2345)
// collection.removeComplete();
collection.getTodoItems(true).forEach(item => item.printDetails());