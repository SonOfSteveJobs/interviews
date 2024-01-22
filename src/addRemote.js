// 1. Реализовать удаленный вызов функции

// const addRemote = async (a, b) =>
//   new Promise((resolve) => {
//     setTimeout(() => resolve(a + b), 1000);
//   });

// Напиши функцию-обертку `add` над `addRemote`, таким образом, что: (плюс нельзя использовать)

// add(1, 2).then((sum) => console.log(sum)); // 3
// add(1, 2, 3).then((sum) => console.log(sum)); // 6
// add(1, 2, 3, 4, 5, 6).then((sum) => console.log(sum)); // 21
// add(1).then((sum) => console.log(sum)); // 1

const addRemote = async (a, b) => new Promise((resolve) => {
    setTimeout(() => resolve(a + b), 1000);
});

const add = (...args) => {
    // Функция для рекурсивного суммирования
    const sumRecursive = async (nums) => {
        // Если в массиве только одно число, возвращаем его
        if (nums.length === 1) return nums[0];

        // Массив для хранения результатов суммирования
        const sums = [];

        // Суммируем числа попарно
        for (let i = 0; i < nums.length; i += 2) {
            if (i + 1 < nums.length) {
                // Если есть пара чисел, суммируем их с помощью addRemote
                sums.push(addRemote(nums[i], nums[i + 1]));
            } else {
                // Если осталось одно число, просто добавляем его в массив
                sums.push(nums[i]);
            }
        }

        // Ожидаем решения всех обещаний
        const results = await Promise.all(sums);

        // Рекурсивно вызываем функцию с новым массивом результатов
        return sumRecursive(results);
    };

    // Запускаем рекурсивное суммирование
    return sumRecursive(args);
};

// Тесты
add(1, 2).then((sum) => console.log(sum)); // 3
add(1, 2, 3).then((sum) => console.log(sum)); // 6
add(1, 2, 3, 4, 5, 6).then((sum) => console.log(sum)); // 21
add(1).then((sum) => console.log(sum)); // 1
