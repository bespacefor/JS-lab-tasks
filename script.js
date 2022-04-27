// Task1
var a = {
    x: 1,
};

var b = {
    x: 2,
    y: 2,
};

function add(...args) {
    return args.reduce((sum, obj) => {
        Object.entries(obj).forEach(([key, value]) => {
            sum[key] ? sum[key] += value : sum[key] = value;
            return sum[key];
            }
        )
        return sum;
    }, {});
}

console.log(add(a, b)); // {x: 3, y: 2}
console.log(add(a, b, a)); // {x: 4, y: 2}

// Task2
var a = {
    x: 0,
    y: 1,
    z: 2,
};

var b = {
    x: 0,
    y: 1,
    z: 3,
    a: 1,
    b: 2,
};

function intersect(obj1, obj2) {
    const result = [];

    Object.entries(obj1).map(k => {
        for(let key in obj2) {
            if( k[0] === key && k[1] === obj2[key]) {
                result.push(k);
            }
        } 
    });
    return Object.fromEntries(result);
}

console.log(intersect(a, b)); // { x: 0, y: 1 }
