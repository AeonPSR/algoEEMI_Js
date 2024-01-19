function replaceFront(tab) {
    tab.pop();
    tab.push("One");
    tab2 =[tab[0], tab[1]];
    return (tab2);
}

console.log(replaceFront(["Heya", "Plop", "Bleh"]));