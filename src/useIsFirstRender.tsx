import { useRef } from "react";

export function useIsFirstRender(): boolean {
    const isFirstRef = useRef(true);

    if (isFirstRef.current) {
        isFirstRef.current = false
        return true
    }

    return false
}