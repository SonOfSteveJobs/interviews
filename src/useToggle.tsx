import { useState } from "react";

export function useToggle(on: boolean): [boolean, () => void] {
    const [toggled, setToggled] = useState(on);

    return [toggled, () => setToggled((prev) => !prev)]
}
