// <Component {...props} />
// {Component(props)}
// В чем будет разница?

function Component({ num }) {
    const [count, setCount] = useState(num);

    return <div onClick={() => setCount(c => c + 1)}>{count}</div>;
}

export default function App() {
    console.log("render");

    return (
        <div>
            <Component num={10} />
            {Component({ num: 10 })}
        </div>
    );
}

// Во втором случае React расценивает {Component(props)} как кастомный хук
// Он не понимает, что это компонент
// Если посмотреть на консоль логи во втором случае, то там будет ререндериться App
// Хотя должен ререндериться только Component
// Если мы добавим if то будет выкидываться ошибка типа нельзя вызывать хуки по условию