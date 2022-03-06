// 1. Please write a function that shows the usage of closures

function greeting(message) {
  return function (name) {
    return message + " " + name;
  };
}
let sayHi = greeting("Hi");
let sayHello = greeting("Hello");

console.log(sayHi("John")); // Hi John
console.log(sayHello("John")); // Hello John

// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34

// 2
const sum = arr.reduce((a, b) => a + b);

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

// 3

const flatList = (arr) => {
  const flat = [];
  arr.forEach((element) => {
    // sprwadź czy element jest tablicą
    if (Array.isArray(element)) {
      flat.push(...flatten(element));
    } else flat.push(element);
  });
  return flat;
};

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

// 4

const arr4A = ["b", 3, 4, 76, "c"];
const arr4B = ["a", "b", 4, 76, 21, "e"];
const commonElements = arr4A.filter((item) => arr4B.includes(item));

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

// 5
const arr5A = ["b", 3, 4, 76, "c"];
const arr5B = ["a", "b", 4, 76, 21, "e"];

const diffElements = (arr1, arr2) => {
  return arr1
    .concat(arr2)
    .filter((item) => !arr1.includes(item) || !arr2.includes(item));
};

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

const arr6A = [1, 2, 3];
const arr6B = [4, 5, 6, 7];

const tuplesArr2 = (arr1, arr2) => {
  let tuples = [];
  for (let index = 0; index < arr1.length; index++) {
    tuples.push([arr1[index], arr2[index]]);
  }
  return tuples;
};

// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

const input7A = ["a", "b", "c", "d"];
const input7B = { a: { b: { c: { d: "23" } } } };

const get = (path, object) => {
  let current = object;

  for (const segment of path) {
    if (current === undefined) return undefined;
    current = current[segment];
  }

  return current;
};

// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

// 9
const keys = ["color", "size"];
const obj = { color: "Blue", id: "22", size: "xl" };
// output id: 22 {}

const omit = (keys, obj) => {
  let outObj = {};
  const out = Object.keys(obj).filter((key) => !keys.includes(key));
  for (const iterator of out) {
    outObj[iterator] = obj[iterator];
  }
  return omit;
};

const omit2 = (keys, object) =>
  Object.keys(object)
    .filter((key) => !keys.includes(key))
    .reduce((acc, key) => {
      acc[key] = object[key];
      return acc;
    }, {});

const omit3 = (keys, object) =>
  Object.fromEntries(
    Object.entries(object).filter(([key]) => !keys.includes(key))
  );
