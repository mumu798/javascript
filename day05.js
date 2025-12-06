/**
 * 值得比较
 *
 */

//比较结果为 Boolean 类型
console.log(2 > 1); // true（正确）
console.log(2 == 1); // false（错误）
console.log(2 != 1); // true（正确）

//比较结果可以赋值给变量
let result = 2 > 1;
console.log(result); // true

//字符串比较
console.log("字符串比较", "Z" > "A"); // true
console.log("Glow" > "Glee"); // true
console.log("Beo" > "Bee"); // true

//不同类型间的比较
console.log("2" > 1); // true，字符串 '2' 会被转化为数字 2
console.log("01" == 1); // true，字符串 '01' 会被转化为数字 1
console.log(true == 1); // true
console.log(false == 0); // true
console.log(null == 0); // false，null 只等于 undefined

//严格比较
console.log("严格比较", 0 === false); // false，类型不同
console.log(0 !== false); // true

let a = 0;
console.log(Boolean(a)); // false  只有0和NaN会被转化为false

let b = "0";
console.log(Boolean(b)); // true

console.log(a == b); // true!

//严格相等
console.log(0 == false); // true，类型转换后相等
console.log(0 === false); // false，类型不同

//null 和 undefined
console.log(null == undefined); // true，它们两个只相等于彼此
console.log(null === undefined); // false，类型不同

/**
* 比较运算符始终返回布尔值。
字符串的比较，会按照“词典”顺序逐字符地比较大小。
当对不同类型的值进行比较时，它们会先被转化为数字（不包括严格相等检查）再进行比较。
在非严格相等 == 下，null 和 undefined 相等且各自不等于任何其他的值。
在使用 > 或 < 进行比较时，需要注意变量可能为 null/undefined 的情况。比较好的方法是单独检查变量是否等于 null/undefined。
*
*/
