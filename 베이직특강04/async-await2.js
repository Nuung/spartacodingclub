const wait = async (count, value) => {
    setTimeout(() => {
        console.log(value);
    }, count);
};
const a = async () => {
    await wait(1000, "a");
    return "return a";
};
const b = async () => {
    await wait(1000, "b");
    return "return b";
};
const c = async () => {
    await wait(1000, "c");
    return "return c";
};

const main = async () => {
    const result1 = await a();
    if (result1 === "return a") {
        const result2 = b();
        console.log(result2);
    }
    const result3 = c();
}

main();