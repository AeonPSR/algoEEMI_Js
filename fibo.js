function fibo(steps) {
    if (steps == 1)
        return (0);
    else if (steps == 2)
        return (1);
    else
        return fibo(steps-1)+fibo(steps-2);
}

console.log(fibo(10));