//написать свой Promise.all

Promise.myAll = (promises) => {
    return new Promise((resolve, reject) => {
        const result: any[] = [];
        let total = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then((res) => {
                result[index] = res;
                total += 1;

                if (promises.length === total) {
                    resolve(result);
                }
            }).catch((error) => reject(error))
        })
    })
}