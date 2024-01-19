let human = {
    name: "Jean Bon",
    age: 45,
    occupation: "Comique"
}

function inspectHuman(target) {
    for (let key in target) {
        if (target.hasOwnProperty(key)) {
            console.log(`${key}: ${target[key]}`);
        }
    }
}

inspectHuman(human);