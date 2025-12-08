/**
 * 逻辑运算符
 *  ||（或），&&（与），!（非），??（空值合并运算符）
 */

let result = 5 || 10;
console.log(result); // 5
// if (1 || 0) {
//   // 工作原理相当于 if( true || false )
//   alert("truthy!");
// }
//  ||或 只要有一个是true，就会继续执行
// let hour = prompt("Hour?", "");
// let isWeekend = true;
// if (hour < 9 || hour > 18 || isWeekend) {
//   alert("The office is closed.");
// }

// || 或运算会返回第一个真值
// let firstName = ""; // false
// let lastName = ""; // false
// let nickName = "SuperCoder"; // true
// 若nickName也为""，则返回"Anonymous"
// alert(firstName || lastName || nickName || "Anonymous"); // SuperCoder

//短路求值
// let hour = 12;
// let firstName = "Ilya";
// let age = 0;
// alert(firstName || age || someElement); // 结果是Ilya，因为第一个操作数为真值，后面的就不再计算了

// && 与 只有操作值全为true，才会返回true，否则返回false
// let hour = prompt("Hour?", "");
// let minute = 30;

// if (hour == 12 && minute == 30) {
//   alert("Time is 12:30");
// } else {
//   alert("Time is not 12:30");
// }

// && 与运算会返回第一个假值

/**
 * &&与 运算的优先等级比 ||或 高
 *
 */

// ！非 运算符 将true变为false，false变为true
// alert(!!true); // true
// alert(!true);
// alert(Boolean(null));

/**
 * 练习1
 *
 */
//alert(null || 2 || undefined);// 2

/**
 * 练习2
 * alert( alert(1) || 2 || alert(3) );//1
 */

/**
 * 练习3
 * alert( 1 && null && 2 ); //null
 */

/**
 * 练习4
 * alert( alert(1) && alert(2) ); //1
 */

/**
 * 练习5
 * alert( null || 2 && 3 || 4 ); //3
 */

/**
 * 练习6
 *写一个 if 条件句来检查 age 是否位于 14 到 90 的闭区间。

“闭区间”意味着，age 的值可以取 14 或 90
 */
// let age = prompt("年龄？", "");
// if (age >= 14 && age <= 90) {
//   alert("年龄在14到90岁之间");
// }

/**
 * 练习7
 * 写一个 if 语句，检查 age 是否不在 14 到 90 的闭区间。

“闭区间”意味着，age 的值不能取 14 或 90
 */
// let age = prompt("年龄？", "");
// if (!(age >= 14 && age <= 90)) {
//   alert("年龄不在14到90岁之间");
// }
// if (age < 14 || age > 90) {
//   alert("年龄不在14到90岁之间");
// }

/**
 * 练习8
 *下面哪一个 alert 将会被执行？

if(...) 语句内表达式的结果是什么？

if (-1 || 0) alert( 'first' ); //执行
if (-1 && 0) alert( 'second' ); //不执行
if (null || -1 && 1) alert( 'third' ); //执行
 */

let user = prompt("请输入账号", "");
// function esc() {
//   document.addEventListener("keydown", function (e) {
//     if (e.key === "Escape") {
//       return; // 你自己写的关闭函数
//     }
//   });
// }

if (user === "admin") {
  let password = prompt("请输入密码", "");
  if (password === "TheMaster") {
    alert("Welcome!");
  } else if (password === "" || password === null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (user === "" || user === null) {
  alert("Canceled");
} else {
  alert("I don’t know you");
}
