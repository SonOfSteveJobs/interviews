import React, { EffectCallback, DependencyList, useRef, useEffect } from 'react';

export function useUpdateEffect(effect: EffectCallback, deps?: DependencyList) {
    let isFirstRender = useRef(true);

    useEffect(() => {
        console.log('isFirstRender ', isFirstRender.current)
        if (!isFirstRender.current) {
            console.log('not skipped')
            return effect();
        } else {
            isFirstRender.current = false;
        }
    }, deps);
}