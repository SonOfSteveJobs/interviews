function treeFn(obj, path = '') {
    let result = {};
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            Object.assign(result, treeFn(obj[key], `${path}${key}.`));
        } else {
            result[`${path}${key}`] = obj[key];
        }
    });
    return result;
}