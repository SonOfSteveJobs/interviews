const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                { value: 4 },
                { value: 5 },
            ]
        },
        {
            value: 3,
            children: [
                { value: 6 },
                { value: 7 },
            ]
        }
    ]
};

function sumTreeValues(tree) {
    // Инициализируем стек с корневым узлом дерева
    let stack = [tree];
    let sum = 0;

    // Пока стек не пуст, продолжаем обход
    while (stack.length > 0) {
        // Извлекаем узел из стека
        const node = stack.pop();
        // Добавляем значение узла к сумме
        sum += node.value;

        // Если у узла есть дети, добавляем их в стек
        if (node.children) {
            stack.push(...node.children);
        }
    }

    return sum;
}

console.log(sumTreeValues(tree)); // Вывод: 28