//похожая задача в Тинькофф: вывести список героев, сделать поиск, сделать дебаунс

import {
    ReactEventHandler,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import React from "react";
import "./App.css";

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
        const debounceRef = useRef();

        return useCallback((...args: any[]) => {
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }

            debounceRef.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
            [delay, callback],
        );
    };

    const searchPostsByName = useDebounce(
        (e: ReactEventHandler<HTMLInputElement>) => {
            const name = e.target.value;
            fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${name}`)
                .then((res) => res.json())
                .then((data) => setPosts(data));
        }, 500);

    return (
        <div>
            <input type="text" placeholder="Search..." onChange={searchPostsByName} />
            <ul>
                <h3>Posts</h3>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;