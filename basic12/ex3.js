const nums1 = [1, 2, 3];
const nums2 = [...nums1, 4, 5];
// console.log(nums2);

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
// console.log(obj2);

function sum(...args) {
  return args.reduce((acc, current) => acc + current, 0);
}
// console.log(sum(1, 2, 3, 4, 5, 6, 2435231));

const test = (...args) => {
  console.log(args);
};

// console.log(sum(1, 2, 3, 4));
test(1, 2, 3, 4);
