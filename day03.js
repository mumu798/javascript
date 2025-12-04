// alert("Hello World!");

/**
 * prompt有两个值，
 *title
显示给用户的文本

default
可选的第二个参数，指定 input 框的初始值。
 */
// let title = "Enter your name";
// result = prompt(title, ["John Doe"]);
// console.log(result);

// let age = prompt("How old are you?", 100);
// alert(`You are ${age} years old!`); // You are 100 years old!
// console.log(age);

// let question = "Are you sure to delete this file?";

// result = confirm(question);
// console.log(result);

// let isBoss = confirm("Are you the boss?");

// alert(isBoss); // 如果“确定”按钮被按下，则显示 true

// let name2 = prompt("What is your name?", "");

// alert(`${name2}`);

/**
 * 类型转换
 *
 */
//字符串转换

let value = true;
console.log(typeof value); // boolean
console.log(value); // true
value = String(value); // now value is a string "true"
console.log(typeof value); // string
console.log(value); // "true"

//数字转换
/**
 * 在算术函数和表达式会自动进行number类型转换
 *
 */

console.log("6" / "2"); // 3

let str = "123";
console.log(typeof str); // string
let num = Number(str); // becomes a number 123

console.log(typeof num); // number
console.log(num); // 123

let age = Number("I'm 100"); //若字符串不是一个有效的数字，则返回 NaN
console.log(age); // NaN

console.log(Number("123")); // 123
console.log(Number("  123  ")); // 123
console.log("true变成:", Number(true)); // 1
console.log("false变成:", Number(false)); // 0
console.log("undefined变成:", Number("undefined")); // NaN
console.log("null变成:", Number(" ")); // 0
console.log("Hello变成:", Number("Hello")); // NaN

//布尔值转换
/**
 * 以下六种值在转换为布尔值时会变成false：
 * 0, -0, null, false, NaN, "" (空字符串)
 * 其他值都会被转换为true
 */
console.log("1变成:", Boolean(1)); // true
console.log("0变成:", Boolean(0)); // false
console.log('"Hello"变成:', Boolean("Hello")); // true
console.log('""变成:', Boolean("")); // false
console.log('" "变成:', Boolean(" ")); // true
console.log('"0"变成:', Boolean("0")); // true
console.log("null变成:", Boolean(null)); // false
console.log("undefined变成:", Boolean(undefined)); // false
console.log("NaN变成:", Boolean(NaN)); // false
console.log("[]变成:", Boolean([])); // true
console.log("{}变成:", Boolean({})); // true
console.log(
  "function(){}变成:",
  Boolean(function () {})
); // true
