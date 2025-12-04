/*
 * 定义变量
 * 变量通常是使用let来声明的，
 */
// let message;

// message = "Hello";
// alert(message);

// let user = "张三";
// alert(user);

//多变量的写法
// let user = "John",
//   age = 25,
//   message = "Hello";
// alert(message);
// alert(user);
// alert(age);

// //在较老的版本中还有变量var，使用和let一样
// var a = "16",
//   b = "10";
// c = "";
// a = "18";

// //给a拷贝到c
// c = a;
// alert(a);
// alert(b);
// alert(c);

// /*
//  * 常量
//  */
// const myBirthday = "18.04.1982";
// alert(myBirthday);

// //myBirthday = "01.01.2001"; // 错误，不能对常量重新赋值

// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";

// // ……当我们需要选择一个颜色
// let color = COLOR_ORANGE;
// alert(color); // #FF7F00

/**
 * 练习1
 *
 * 声明两个变量：admin 和 name。
 *将值 "John" 赋给 name。
 *从 name 变量中拷贝其值给 admin。
 *使用 alert 显示 admin 的值（必须输出 “John”）。
 *
 */
let admin;
let name = "John";
admin = name;
alert(admin);

/**
* 练习2
使用我们的星球的名字创建一个变量。你会怎么命名这个变量？
创建一个变量来存储当前浏览者的名字。你会怎么命名这个变量？
*
*/
let ourPlanetName = "earth";
let currentUserName = "John";

/**
* 练习3
const BIRTHDAY = '18.04.1982'; // 使用大写？

const AGE = someCode(BIRTHDAY); // 使用大写？
*
*/
const BIRTHDAY = "18.04.1982"; // 使用大写？正确，硬编码

const AGE = someCode(BIRTHDAY); // 使用大写？错误，age是可以被计算出来的
