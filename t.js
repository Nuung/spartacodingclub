const test = async () => { return "test"; };
const a = test();
console.log(a);
a.then((value) => console.log(value));