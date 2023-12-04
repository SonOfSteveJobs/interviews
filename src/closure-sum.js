// написать функцию sum
// Тест кейсы:
// console.log(sum()) //0
// console.log(sum(1)()) //1
// console.log(sum(2)(2)()) //4

function sum(num) {
    let result = 0;

    function inner(nextNum) {
        if (!nextNum) return result;
        result += nextNum;
        return inner;
    }

    return inner(num);
}