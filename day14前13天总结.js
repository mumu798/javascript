/**
 *代码结构:一般用分号分隔语句
 * 在代码块{}后以及有代码块的语法结构（例如循环）后不需要加分号
 */

/**
 * 严格模式:通常是在js函数或脚本的顶部添加"use strict"，但是现代代码会自动启用，所以不用添加
 *
 */

/**
 * 变量:用let和var声明变量，const声明常量
 * 常见的数据类型:number(数字),string(字符串),boolean(布尔值),null(空),undefined(未定义),object,symbol
 * typeof 运算符:返回变量的数据类型
 */
// typeof null == "object"; // JavaScript 编程语言的设计错误
// typeof function () {} == "function"; // 函数被特殊对待

/**
 * 交互
 *prompt(question[, default])
 *提出一个问题 question，并返回访问者输入的内容，如果他按下「取消」则返回 null。
 *confirm(question)
 *提出一个问题 question，并建议用户在“确定”和“取消”之间进行选择。选择结果以 true/false 形式返回。
 *alert(message)
 *输出一个消息 message。
 *这些函数都会产生 模态框，它们会暂停代码执行并阻止访问者与页面的其他部分进行交互，直到用户做出回答为止。
 */

/**
 * 运算符:  - * /（加减乘除），取余运算符 % 和幂运算符 **
 * 比较运算符: < <= > >= == != === !==
 * 逻辑运算符: && || !  逻辑与 && 和或 || 执行短路运算，然后返回运算停止处的值（true/false 不是必须的）。逻辑非 ! 将操作数转换为布尔值并返回其相反的值。
 * 位运算符: & | ^ ~ << >> >>>
 * 赋值运算符: = += -= *= /= %= **= <<= >>= >>>=
 * 三元运算符: condition ? expr1 : expr2
 * 空值合并运算符: a ?? b  a 存在则返回 a，否则返回 b
 */

/**
 * 三种循环:
 *在 for(let...) 循环内部声明的变量，只在该循环内可见。但我们也可以省略 let 并重用已有的变量。
 *指令 break/continue 允许退出整个循环/当前迭代。使用标签来打破嵌套循环。
 */
// 1
// while (condition) {}

// 2
// do {} while (condition);

// 3
// for (let i = 0; i < 10; i++) {}

/**
 *“switch” 结构
 *“switch” 结构可以替代多个 if 检查。它内部使用 ===（严格相等）进行比较。
 */

// let age = prompt("请输入你的年龄", "");
// switch (age) {
//   case 18:
//     alert("Won't work"); // prompt 的结果是一个字符串，而不是数字
//     break;

//   case "18":
//     alert("This works!");
//     break;

//   default:
//     alert("Any value not equal to one above");
// }

/**
 * 函数三种:函数声明、函数表达式、箭头函数
 *
 */

// 函数声明:主代码流中的函数
function sum(a, b) {
  let result = a + b;

  return result;
}
// 函数表达式： 表达式上下文中的函数
let sum = function (a, b) {
  let result = a + b;

  return result;
};
// 箭头函数
// 表达式在右侧
let sum = (a, b) => a + b;

// 或带 {...} 的多行语法，此处需要 return：
let sum = (a, b) => {
  // ...
  return a + b;
};

// 没有参数
let sayHi = () => alert("Hello");

// 有一个参数
let double = (n) => n * 2;

// 函数可能具有局部变量：在函数内部声明的变量，或在其参数列表中。这类变量只在函数内部可见。
// 参数可以有默认值：function sum(a = 1, b = 2) {...}。
// 函数总是返回一些东西。如果没有 return 语句，那么返回的结果是 undefined。
