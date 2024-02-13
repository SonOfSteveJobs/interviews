//похожая задача в Тинькофф: вывести список героев, сделать поиск, сделать дебаунс

import React, { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    const useDebounce = (callback, delay) => {
        const debounceRef = useRef();

        return useCallback((...args) => {
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }

            debounceRef.current = setTimeout(() => {
                callback(...args);
            }, delay);
        }, [delay, callback]);
    };

    const searchPostsByName = useDebounce(async (e) => {
        const name = e.target.value;
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${name}`);
        const data = await response.json();
        setPosts(data);
    }, 500);

    const handleDeletePost = useCallback((postId) => {
        setPosts(posts.filter(post => post.id !== postId));
    }, [posts]);

    return (
        <div>
            <input type="text" placeholder="Search..." onChange={searchPostsByName} />
            <ul>
                <h3>Posts</h3>
                {posts.map((post) => (
                    <li key={post.id}>
                        {post.title}
                        <button onClick={() => handleDeletePost(post.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;