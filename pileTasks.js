function pileTasks() {
    const   prompt = require("prompt-sync")();
    let     pile = [];
    let     NbTasks = parseInt(prompt("How many tasks ? "));

    if (isNaN(NbTasks))
        return("Invalid input");
    while (NbTasks > 0) {
        pile.push(prompt("Enter a task "))
        NbTasks--;
    }
    console.log("\nToday's tasks: "+pile+"\nHandling tasks...");
    while (pile[0] !== null &&  pile[0] !== undefined ) {
        console.log(pile[pile.length-1]+" has been handeled !");
        pile.pop();
    }
}

pileTasks();