//решение не особо оптимальное, на скорую руку.

const data = {
    Москва: { count: 100 },
    Лондон: { count: 200 },
    Лисабон: { count: 300 },
    Тверь: { count: 400 },
    Магадан: { count: 500 },
};

const entries = Object.entries(data);

const result = entries.reduce((acc, el) => {
    const [city, { count }] = el;
    const firstLetter = city.slice(0, 1);

    if (!acc[firstLetter]) {
        acc[firstLetter] = { cities: [city], count };
    } else {
        acc[firstLetter].cities.push(city);
        acc[firstLetter].count += count;
    }

    return acc;
}, {});

const resEntries = Object.entries(result);

const resultFinal = resEntries.map((el) => {
    const [key, rest] = el;

    return { key, ...rest };
});

console.log(resultFinal.sort((a, b) => a.key.localeCompare(b.key)));