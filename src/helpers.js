import { useState, useEffect} from 'react';

export const useFetch = url => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(null);
    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        fetch(url)
            .then(x => x.json())
            .then(x => {
                if (!cancelled) {
                    setResult(x);
                    setLoading(false);
                }
            });
        return () => { cancelled = true; };
    }, [url]);
    return [result, loading];
};

// this wee bit of code as no business being part of props.
export const capitalize = name =>
    name.charAt(0).toUpperCase() + name.slice(1);
