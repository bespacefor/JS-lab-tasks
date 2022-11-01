let obj1 = {
    a: 2,
    name: 'John',
    age: 23
};

let obj2 = {
    a: 2,
    name: 'John',
    age: 23,
    c: 2,
    d: 'John', 
    e: 23
}

const initialValue = 0;
const reducer = (sum, cur) => typeof cur === 'number' ? sum + cur : sum;
const sumObjectValues1 = obj => Array.prototype.reduce.apply(Object.values(obj), [reducer, initialValue]);
const sumObjectValues2 = obj => [].reduce.call(Object.values(obj), reducer, 0);

console.log(sumObjectValues1(obj1));
console.log(sumObjectValues1(obj2));

console.log(sumObjectValues2(obj1));
console.log(sumObjectValues2(obj2));
