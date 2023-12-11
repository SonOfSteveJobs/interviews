//написать кастомный хук для дебаунса
//debounce — это функция, которая «откладывает» вызов другой функции до того момента, когда с последнего вызова пройдёт определённое количество времени.

import { useCallback, useRef } from 'react';

export function useDebounce(callback: (...args: any[]) => void, delay: number) {
    const timer = useRef();

    return useCallback((...args: any[]) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }

        timer.current = setTimeout(() => {
            callback(...args);
        }, delay)
    }, [callback, delay]);
}