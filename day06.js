/**
 * "if"语句
 *
 */
// let year = prompt("ECMAScript-2015 规范是在哪一年发布的？", "");
// if (year == 2015) {
//   console.log("回答正确，你真棒！");
// }

//if (…) 语句会计算圆括号内的表达式，并将计算结果转换为布尔型，0、""、null、undefined 和 NaN 都会被转换成 false，其余的值都会被转换成 true。

//也可以先计算结果再传入 if 语句
// let condition = year == 2015;
// if (condition) {
//   console.log("回答正确，你真棒🐂！");
// }

/**
 * else语句
 *
 */
// if (condition) {
//   console.log("回答正确，你真棒🐂！");
// } else {
//   console.log("请重新输入！");
// }

/**
 * else if语句
 *
 */
// if (year < 2015) {
//   console.log("太小了");
// } else if (year > 2015) {
//   console.log("太大了");
// } else {
//   console.log("恭喜你，你猜对了！");
// }

/**
 * ? 三元
 *
 */
// let accessAllowed;
// let age = prompt("How old are you?", "");

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// alert(accessAllowed);
// //上面的代码可以用三元运算符 ? 来简化：
// let accessAllowed2 = age > 18 ? true : false;
// alert(accessAllowed2);

/**
 *? 多问号
 *
 */
// let age = prompt("age?", "");

// let message =
//   age < 3
//     ? "Hi, baby!"
//     : age < 18
//     ? "Hello!"
//     : age < 100
//     ? "Greetings!"
//     : "What an unusual age!";

// alert(message);
//if...else 语句也可以实现同样的功能：
// if (age < 3) {
//   console.log("Hi, baby!");
// } else if (age < 18) {
//   console.log("Hello!");
// } else if (age < 100) {
//   console.log("Greetings!");
// } else {
//   console.log("What an unusual age!");
// }

//("?’ 的非常规使用");
//不推荐使用嵌套的问号运算符，因为代码难以阅读。
//建议只在简单的情况下使用问号运算符 ?，而对于复杂的条件语句，使用 if...else 语句。
// let company = prompt("Which company created JavaScript?", "");
// company == "Netscape" ? alert("Right!") : alert("Wrong.");

//if...else 语句也可以实现同样的功能：
// if (company == "Netscape") {
//   alert("Right!");
// } else {
//   alert("Wrong.");
// }

/**
 * 练习1
 *
 */
// if ("0") {
//   //可以正常运行，因为字符串 "0" 也是一个非零值。
//   alert("Hello");
// }
/**
 * 练习2
 *
 */

// let value = prompt("What’s the “official” name of JavaScript?", "");

// if (value == "ECMAScript") {
//   alert("Right!");
// } else {
//   alert("You don’t know? ECMAScript!");
// }

/**
 * 练习3
 *使用 if..else 语句，编写代码实现通过 prompt 获取一个数字并用 alert 显示结果：

如果这个数字大于 0，就显示 1，
如果这个数字小于 0，就显示 -1，
如果这个数字等于 0，就显示 0。
在这个任务中，我们假设输入永远是一个数字。
 */

// let num = prompt("请输入数字", "");
// if (num > 0) {
//   alert(1);
// } else if (num < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

/**
 * 练习4
 *使用条件运算符 '?' 重写下面的 if 语句：

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
 */
// let a = prompt("请输入数字a", "");
// let b = prompt("请输入数字b", "");
// let result = a + b < 4 ? "Below" : "Over";
// alert(result);

/**
 * 练习5
 *使用多个三元运算符 '?' 重写下面的 if..else 语句。

为了增强代码可读性，建议将代码分成多行。

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
 */
let login = prompt("请输入你的身份", "");
let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
alert(message);
