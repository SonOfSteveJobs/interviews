function callLimit(fn, count, callback) {
    let callCount = 0;

    const inner = (...args) => {
        if (callCount < count) {
            fn(...args);
            callCount += 1;
        } else {
            if (callback) {
                callback();
            }
        }
    };

    inner.reset = () => (callCount = 0);

    return inner;
}

function log(title, message) {
    console.log(title + ": " + message);
}

const logLimited = callLimit(log, 3);

logLimited("title", "desc"); // 'title: desc'

logLimited("title2", "desc"); // 'title2: desc'

logLimited("title3", "desc"); // 'title3: desc'

logLimited("title4", "desc"); // Этот не сработает

logLimited.reset(); // Перезагрузили счетчик

// Можно еще 3 раза вызвать

logLimited("title5", "desc"); // 'title5: desc'

logLimited("title6", "desc"); // 'title6: desc'

logLimited("title7", "desc"); // 'title7: desc'

const logLimited2 = callLimit(log, 2, () => console.log("finish"));

logLimited2("foo", "bar"); // 'foo: bar'

logLimited2("foo2", "bar"); // 'foo2: bar'
logLimited2("foo3", "bar"); // 'finish'