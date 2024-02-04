import { EffectCallback, useEffect, useRef } from 'react'

export function useEffectOnce(effect: EffectCallback) {
    const ref = useRef(false);

    useEffect(() => {
        if (ref.current) return;

        ref.current = true;
        const cleanup = effect();
        return () => {
            cleanup && cleanup();
        }
    }, [effect])
}