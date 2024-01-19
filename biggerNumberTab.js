const   arr = [66, 333, 1, 42]; 
let     i = 1;
let     bigger = arr[0];

while (arr[i] != null) {
    if (arr[i] > bigger)
        bigger = arr[i];
    i++;
}
console.log(bigger);