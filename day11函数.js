/**
 * 函数声明
 *
 */
//关键字 函数名 (参数) { 函数体 }
// function sayHi() {
//   alert("Hello");
// }
// sayHi();

/**
 * 局部变量: 在函数中声明的变量只能在该函数内部可见和使用
 *
 */

// function showMessage() {
//   let message = "hello"; // 局部变量
//   alert(message);
// }
// showMessage();
// alert(message); 不会显示错误，因为message是局部变量，只在showMessage()函数内部可见

/**
 * 外部变量: 在函数外声明的变量，可以在函数内部使用
 *
 */
// let userName = "John";

// function showMessage() {
//   let message = "hello " + userName;
//   alert(message);
// }

// showMessage();
//函数对外部变量有全部的使用权限,也可以修改外部变量的值
// let userName = "John";
// function showMessage() {
//   userName = "Bob";
//   let message = "hello " + userName;
//   console.log(message);
// }
// console.log(userName);
// showMessage();
// console.log(userName);

//函数内部声明同名变量会遮盖外部变量
// let userName = "John";
// function showMessage() {
//   let userName = "Bob";
//   let message = "hello " + userName;
//   console.log(message); //hello Bob
// }
// console.log(userName); // John
// showMessage(); // hello Bob
// console.log(userName); // John

/**
 * 函数参数
 *
 */
// function showMessage(from, text) {
//   console.log(from + text);
// }
// showMessage("梦", "想");

// let userName = "John";
// 函数带有两个参数(arguments)
// function names(userName, age) {
//   userName = "hello" + userName;
//   console.log(userName + age); // helloJohn18
// }
// 调用的参数为John和18(arguments)
// names(userName, 18);
// console.log(userName); // John 函数内部修改外部变量不会影响外部变量的值

/**
 * 默认值:若一个函数被调用，但是有参数(argument)未被提供，那么这个参数会默认为undefined
 *
 */
//可以设定默认值或者表达式
// function showMessage(from, text = "no text given") {
//   console.log(from + ": " + text);
// }
// showMessage("河南");
// function city() {
//   return "郑州";
// }
// function showMessage(from, text = city()) {
//   console.log(from + ": " + text);
// }
//如果未传递参数则会计算city()函数，如果传参则会用传的 参数
// showMessage("河南");
// showMessage("河南", "邓州市");

//也可以放在中部计算
// function showMessage(text) {
//   if (text === undefined) {
//     text = "没有内容";
//   }
//   console.log(text);
// }
// showMessage();

// || 运算符·
// function showMessage(text) {
//   text = text || "没有内容";
//   console.log(text);
// }
// showMessage();

// 空值检测
// function showMessage(text) {
//   console.log(text ?? "don't know what to show");
// }
// showMessage(0); // 0
// showMessage(null); // don't know what to show
// showMessage(); // don't know what to show

/**
 * 返回值:函数可以将一个值返回到调用代码中作为结果
 * return 可以在函数的任意位置，当执行到达时，函数停止，并返回给调用代码结果。当return没有值时，会直接退出函数的执行
 */
// function sum(a, b) {
//   return a + b;
// }
// let number = sum(10, 20);
// console.log(number);

// let age = +prompt("请输入年龄", "");

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm("得到父母许可没?");
//   }
// }

// if (checkAge(age)) {
//   alert("年龄达标允许访问");
// } else {
//   alert("禁止访问");
// }

/**
 * 练习1
 *
 */
let age = +prompt("请输入年龄", "");
// function checkAge(age) {
//   return age > 18 || confirm("得到父母许可没?");
// }
// function checkAge(age) {
//   return age >= 18 ? true : confirm("得到父母许可没?");
// }
