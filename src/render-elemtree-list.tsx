import React from "react";

const data = [
    { id: 1, name: "element 1", parentId: null },
    { id: 8, name: "element 8", parentId: null },
    { id: 2, name: "element 2", parentId: 1 },
    { id: 3, name: "element 3", parentId: 2 },
    { id: 4, name: "element 4", parentId: 1 },
    { id: 9, name: "element 9", parentId: 8 },
    { id: 5, name: "element 5", parentId: 4 },
    { id: 6, name: "element 6", parentId: 5 },
    { id: 10, name: "element 10", parentId: 9 },
];

function App() {
    const getChildren = (parentId: number | null) => {
        return data
            .filter((el) => el.parentId === parentId)
            .map((el) => (
                <li key={el.id}>
                    {el.name}
                    <ul>{getChildren(el.id)}</ul>
                </li>
            ));
    };
    return (
        <>
            <div>
                <ul>{getChildren(null)}</ul>
            </div>
        </>
    );
}

export default App;