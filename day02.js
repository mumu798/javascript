/**
 * 数据类型(动态类型，定义的变量不会在被定义后，被限制为某一数据类型)
 *
 */
let message = "hello world";
console.log(message);
message = "13";
console.log(message);

/**
 * Number 数字类型
 *
 */
//主要是整数和浮点数
let age = 16, //整数
  price = 19.99; //浮点数
console.log("Number例子:", age + "和" + price);
/**
 * 除此之外还有"特殊数值"   Infinity    NaN
 * Infinity为无穷大数
 * NaN代表计算错误
 */

console.log(Infinity);
console.log("name" / 2); //会输出NaN

/**
 * BigInt 类型
 * “number” 类型无法安全地表示大于 (253-1)（即 9007199254740991），或小于 -(253-1) 的整数。
 */
//BigInt 标识任意长度的整数
// 尾部的 "n" 表示这是一个 BigInt 类型
const bigInt = 1234567890123456789012345678901234567890n; //不在尾部加n 就会显示1.2345678901234568e+39
console.log("BigInt例子:", bigInt);
/**
 * String 字符类型
 *
 */

let str = "Hello",
  str2 = "world",
  str3 = `string ${str}`;
console.log("String例子:", str + " " + str2 + " " + `${str}` + " " + str3);
/**
 * `${}` 模版字符串插值，用于插入变量或者表达式的结果
 *   ${ } 里的表达式几乎可以写 任何 JS 能执行的表达式
 */

/**
 * Boolean类型
 * boolean 类型仅包含两个值：true 和 false
 */
let name = true,
  ages = false;
console.log("boolean例子:", name, ages);
let isOk = 4 > 1;
console.log("boolean例子:", isOk);

/**
 * Null 值
 * 代表"无""空""值未知"
 */
let user = "张三";
user = null;
console.log("Null例子:", user);

/**
 * undefined 标识未被赋值
 *
 */

let mobile;
console.log("undefined例子:", mobile);

/**
 * Object 类型和 Symbol 类型
 *
 */

//Object 对象
let user1 = {
  name: "张三",
  age: "16",
};

console.log("Object例子:", user1.age);
console.log("Object例子:", user1["name"]);
console.log("Object例子:", user1);
//Symbol 暂未理解

/**
 * typeof 运算符
 *
 */

typeof undefined; // "undefined"
console.log("typeof例子:", typeof undefined);

typeof 0; // "number"
console.log("typeof例子:", typeof 0);

typeof 10n; // "bigint"
console.log("typeof例子:", typeof 10n);

typeof true; // "boolean"
console.log("typeof例子:", typeof true);

typeof "foo"; // "string"
console.log("typeof例子:", typeof "foo");

typeof Symbol("id"); // "symbol"
console.log("typeof例子:", typeof Symbol("id"));

typeof Math; // "object"  (1)
console.log("typeof例子:", typeof Math);

typeof null; // "object"  (2)
console.log("typeof null例子: 返回", typeof null, "历史遗留问题");

typeof alert; // "function"  (3)
console.log("typeof例子:", typeof alert);

/**
 * 练习1：下面的脚本会输出什么？
 *
 */
let name2 = "Ilya";

alert(`hello ${1}`); // Hello 1

alert(`hello ${"name"}`); // Hello name

alert(`hello ${name2}`); // Hello Ilya
