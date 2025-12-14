/**
 * 箭头函数
 *
 */
//有参
// let add = (a, b) => a + b;
// console.log(add(1, 2));
//无参
// let show = () => "hello world";
// console.log(show()); // hello world

// 箭头函数可以像函数表达式一样使用
// let age = prompt("What is your age?", 18);

// let welcome = age < 18 ? () => alert("Hello!") : () => alert("Greetings!");

// welcome();

/**
 * 多行箭头函数
 *
 */
let sum = (a, b) => {
  // 花括号表示开始一个多行函数
  let result = a + b;
  return result; // 如果我们使用了花括号，那么我们需要一个显式的 “return”
};

alert(sum(1, 2)); // 3
