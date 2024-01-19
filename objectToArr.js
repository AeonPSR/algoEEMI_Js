let book = {
    name: "Tobie Lolness",
    author: "Timothée de Fombelle",
    release: 2006
}

function getArrayed(object) {
    let arr = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            arr.push([key, object[key]]);
        }
    }
  return arr;
}

const arr = getArrayed(book);
arr.forEach(data => {
    console.log(`${data[0]}: ${data[1]}`);
  });