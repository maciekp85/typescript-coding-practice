import { TodoItem } from "./todoItem.js";
import { TodoCollection } from "./todoCollection.js";
import inquirer from "inquirer";

let todos : TodoItem[] = [
    new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)];

let collection : TodoCollection = new TodoCollection("Maciek", todos);
let showCompleted = true;

function displayTodoList(): void {
    console.log(`${collection.userName}' Todo List ` + ` (${collection.getItemCounts().incomplete } items to do)`);
    // collection.getTodoItems(true).forEach(item => item.printDetails());
    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}

enum Commands {
    Add = "Add New Task",
    Quit = "Quit",
    Toogle = "Show/Hide Completed"
}

function promptAdd(): void {
    console.clear();
    inquirer.prompt({
        type: "input",
        name: "add",
        message: "Enter task:"
    }).then(answers => {
        if (answers["add"] !== "") {
            collection.addTodo(answers["add"]);
        }
        promptUser();
    })
}

function promptUser(): void {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands),
        // badProperty: true    // for testing declaration file
    }).then(answers => {
        switch(answers["command"]) {
            case Commands.Toogle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case Commands.Add:
                promptAdd();
                break;
        }
    })
}

promptUser();