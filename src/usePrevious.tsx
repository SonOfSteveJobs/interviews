import { useEffect, useRef } from "react";

export function usePrevious<T>(value: T): T | undefined {
    const prevRef = useRef<T | undefined>(undefined);

    useEffect(() => {
        prevRef.current = value;
    }, [value]);

    return prevRef.current;
}

/**
 * React docs: You Might Not Need an Effect
 * If there is no external system involved (for example, if you want to update a 
 * component’s state when some props or state change), you shouldn’t need an Effect.
 */

export function usePrevious2<T>(value: T): T | undefined {
    const prevValue = useRef<T | undefined>(undefined);

    const temp = prevValue.current;
    prevValue.current = value;

    return temp;
}