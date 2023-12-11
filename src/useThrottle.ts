//написать кастомный хук для троттлинга
//(троттлинг это когда мы вызываем коллбек не чаще чем раз в n-секунд)

import { useCallback, useRef } from 'react';

export function useThrottle(callback: () => void, delay: number) {
    const throttleRef = useRef(false);

    return useCallback(() => {
        if (!throttleRef.current) {
            callback();
            throttleRef.current = true;

            setTimeout(() => {
                throttleRef.current = false;
            }, delay)
        }
    }, [callback, delay]);
}