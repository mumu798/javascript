/**
 * 函数表达式
 *
 */
// 函数表达式
// let sum = function (a, b) {
//   return a + b;
// };
// console.log(sum(1, 2));

/**
 * 函数是一个值
 *
 */
// 声明函数
// function sayHi() {
//   alert("Hello");
// }

// alert(sayHi); // 显示函数代码
// alert(sayHi()); // 显示函数结果

// function hi() {
//   alert("Hello");
// }
// let hi = function () {
//   alert("Hello");
// };
// let h = hi;

// h(); // Hello 把函数赋值给变量h
// hi(); // Hello 运行的函数的出来的值

/**
 * 回调函数
 *
 */
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// // ask里面的函数外部无法调用
// ask(
//   "你喜欢 JavaScript?",
//   function () {
//     alert("你喜欢 JavaScript!");
//   },
//   function () {
//     alert("你 hate JavaScript!");
//   }
// );

/**
 * 函数表达式 vs 函数声明
 *
 */
//函数声明：在主代码流中声明为单独的语句的函数，函数声明被定义之前，它就可以被调用
// sum(1, 2); // 运行
// function sum(a, b) {
//   return a + b;
// }
//函数表达式：在一个表达式中或另一个语法结构中创建的函数， 函数表达式不能被提前调用
//sum(1, 3);  // 不会运行
// let sum = function (a, b) {
//   return a + b;
// };

/**
* 
*
*/