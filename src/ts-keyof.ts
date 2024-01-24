const obj = { a: 1, b: 2, c: 3, d: 4 };
function getValue<T, K extends keyof T>(obj: T, key: K) {
    console.log(obj[key]);
}


getValue(obj, "a"); //ok
getValue(obj, "n"); //Argument of type '"n"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'