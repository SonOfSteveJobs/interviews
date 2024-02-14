const tree = {
    a: {
        b: {
            c: 'one',
            h: 'two',
        },
        d: {
            f: 'three',
        },
        g: 'four',
    },
}

function getTreeValues(tree) {
    const result = {};
    const stack = [{ node: tree, prefix: '' }]

    while (stack.length) {
        const { node, prefix } = stack.pop();

        Object.keys(node).forEach((key) => {
            const value = node[key];
            const currentPath = prefix ? `${prefix}${key}` : key

            if (typeof value === 'object') {
                stack.push({ node: value, prefix: currentPath })
            } else {
                result[currentPath] = value
            }
        })
    }

    return result;
}

// {
//   'a.b.c': 'one',
//   'a.b.h': 'two',
//   'a.d.f': 'three',
//     'a.g': 'four'
// }