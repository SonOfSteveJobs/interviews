const throttle = (callback: () => void, delay) => {
    let throttleRef = false;

    return () => {
        if (!throttleRef) {
            callback;
            throttleRef = true;

            setTimeout(() => {
                throttleRef = false;
            }, delay);
        }
    }
}