/**
 * 带有可选 属性列表 的花括号 {…} 来创建对象.一个属性就是一个键值对(key:value),其中键（key）是一个字符串（也叫做属性名），值（value）可以是任何值。
 *
 */
// 创建对象的两种方式,user 和 users 都是空对象(相当于空柜子)
// let user = new Object(); // “构造函数” 的语法
// let users = {}; // “字面量” 的语法

/**
 *文本和属性
 *
 */
//在创建对象的时候，立即将一些属性以键值对的形式放到 {...} 中
// let user = {
//   // 一个对象
//   name: "John", // 键 "name"，值 "John"
//   age: 30, // 键 "age"，值 30
//   //多词属性名需要用引号括起来
//   "likes birds": true, // 键 "likes birds"，值 true
// };
// // 访问对象的属性
// console.log(user.name); // John
// console.log(user.age); // 30
// console.log(user); // undefined
// // 属性的值可以是任意类型，让我们加个布尔类型的属性
// user.isAdmin = true;
// console.log(user); // true
// //用 delete 操作符移除属性
// delete user.age;
// console.log(user); // undefined

/**
 *如果直接引用多字符属性名会导致语法错误，因此必须使用方括号语法[...]来访问它们。
 *
 */
// let user = {
//   name: "John",
//   age: 30,
//   "likes birds": true,
// };
// console.log(user["likes birds"]); // true
// // 设置
// user["like birds"] = true;

// // 读取
// alert(user["likes birds"]); // true

// // 删除
// delete user["likes birds"];
// console.log(user);

/**
 *属性值简写
 *
 */
// let name = "John";

// let user = {
//   name, // 与 name:name 相同
//   age: 30,
// };
// console.log(user);
// // 等同于
// let user1 = {
//   name: name, // name 是变量名
//   age: 30,
// };
// console.log(user1);
// console.log(user);

/**
 *属性存在性测试,"in"操作符
 *JavaScript 的对象有一个需要注意的特性：能够被访问任何属性。即使属性不存在也不会报错！

读取不存在的属性只会得到 undefined
 */

// let user = { name: "John", age: 30 };

// console.log("age" in user); // true，user.age 存在
// console.log("blabla" in user); // false，user.blabla 不存在。

/**
 * 对象里面的"for..in" 循环
 *
 */
let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  // keys
  console.log(key); // name, age, isAdmin
  // 属性键的值
  console.log(user[key]); // John, 30, true
}
