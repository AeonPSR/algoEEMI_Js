function listWaiting() {
    class list {
        constructor() {
            this.array = []
        }
    
        enqueue(element) {
            this.array.push(element);
        }
    
        dequeue () {
            if (this.array.length === 0)
                console.log("La liste d'attente est vide.");
            return this.array.shift();
        }
    }

    const   prompt = require("prompt-sync")();
    let     listPark = new list();
    let     option = "";
    
    while (!option.includes("3")) {
        option = prompt("'1' pour ajouter quelqu'un sur la liste d'attente\n'2' pour faire rentrer quelqu'un dans le parc\n'3' pour fermer l'application\nOption: ");
        if (option.includes("1"))
            listPark.enqueue(prompt("Entrez le nom de la personne : "));
        else if (option.includes("2"))
            listPark.dequeue();
        else if (option.includes("3"))
            return ;
    }
    return ;
}

listWaiting();