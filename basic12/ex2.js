// 구조를 분해하고 할당하는
// 구조분해 할당 문법
// const [a, b, c, d, e] = [2, 3, 4, 6];
// console.log(a, b, c, d, e);

const req = {
  body: {
    title: "타이틀 입니다",
    content: "내용입니다",
    test: {
      my: "이름입니다.",
    },
  },
};

// const title = req.body.title;
// const content = req.body.content;
const {
  body: {
    title,
    content,
    test: { my },
  },
} = req;
// console.log(title, content, my);
// console.log(req.body.title);
// console.log(req.body.content);

const { a, b, ...apple } = { a: 10, b: 20, c: 30, d: 40 };
console.log(a, b, apple);
