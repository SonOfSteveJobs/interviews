//написать кастомный хук для троттлинга
//(троттлинг это когда мы вызываем коллбек не чаще чем раз в n-секунд)

import { useCallback, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
    const throttleRef = useRef(false);

    return useCallback((...args: any[]) => {
        if (!throttleRef.current) {
            callback(...args);
            throttleRef.current = true;

            setTimeout(() => {
                throttleRef.current = false;
            }, delay)
        }
    }, [callback, delay]);
}