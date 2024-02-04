import { useEffect, useMemo, useState } from "react";

export function useSWR<T = any, E = any>(
    _key: string,
    fetcher: () => T | Promise<T>
): {
    data?: T
    error?: E
} {
    const [data, setData] = useState<T>();
    const [error, setError] = useState<E>();
    const result = useMemo(fetcher, [_key]);

    useEffect(() => {
        if (result instanceof Promise) {
            result.then(setData, setError);
        }
    }, [])

    return { data: result instanceof Promise ? data : result, error }
}