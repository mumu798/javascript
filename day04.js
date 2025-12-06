/**
 * 基础运算符，数学运算
 * 加+ 减- 乘* 除/ 取余% 幂 ^**
 */
//加减就和常规的一样
let a = 10;
let b = 3;
console.log(a + b);// 13
console.log(a - b);// 7

//乘除也是一样
console.log(a * b);// 30
console.log(a / b);// 3.3333333333333335
//取余
console.log(a % b);// 1
//幂
console.log(a ** b);// 1000

/**
 * 二元运算符 + 连接字符串
 *
 */
//一个为字符串时，另一个会被转换为字符串
let str1 = "Hello";
let str2 = "World";
let num = 2024;
console.log("", str1 + " " + str2);// Hello World
console.log(str1 + " " + num);// Hello 2024
console.log(str1 + num);// Hello2024
console.log(num);// 2024

//+是唯一一个可以连接字符串的运算符
//其他的数学运算符会把字符串转换为数字
console.log(6 - "2"); // 4，将 '2' 转换为数字
console.log("6" / "2"); // 3，将两个运算元都转换为数字

/**
 * 数字转化，一元运算符 +
 * + 可以将字符串转换为数字类型
 */
console.log(+"123");// 123
console.log(+true);// 1
console.log(+"");// 0

//字符串转化数字的另一种方法
let c = "123";
let d = "45";

console.log(c + d); //字符串连接 "12345"
console.log(+c + +d); //数字相加 168

/**
 * 赋值运算符
 *
 */
let A = 1;
let B = 2;

let C = 3 - (A = B + 1);

console.log(A); // 3
console.log(C); // 0

//链式赋值
let x, y, z;
x = y = z = 5 + 5; // 从右到左赋值
console.log(x, y, z);

//原地修改
let n = 10;
n += 3; //n = n + 3
console.log(n);
n *= 5; //n = n * 5
console.log(n); // 65

//自增自减

//++居前则自增，++居后则使用原先的值

let j = 1;
let f = j++;
console.log(f); // 1，先赋值为1，然后j自增为2

let i = ++j; // j先自增为3，然后赋值给i
console.log(i);// 3

//--同理

let m = 10;
m++;
console.log(m);// 11
m--;
console.log(m);// 10
console.log(++m);// 11
let numa = 0;
function add() {
  numa++;
  document.getElementById("count").innerText = numa;
}

/**
 * 逗号运算符
 *
 */
let q = (1 + 2, 3 + 4);

console.log(q); // 7（3 + 4 的结果）

/**
 * 练习1
 *let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1
 */

/**
 * 练习2
 * let a = 2;

let x = 1 + (a *= 2);//5
 *
 */
