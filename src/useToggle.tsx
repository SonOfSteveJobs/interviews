import { useState, useCallback } from "react";

export function useToggle(on: boolean): [boolean, () => void] {
    const [toggled, setToggled] = useState(on);

    return [toggled, useCallback(() => setToggled(prev => !prev), [])]
}
