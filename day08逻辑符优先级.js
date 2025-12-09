/**
 * 空值合并运算符
 * ?‌?‌=  运算符用于为变量赋值，只有当该变量的当前值为 null 或 undefined 时，才会进行赋值操作。
 */
//获得两个变量中的非空值
let a = null;
let b = null || "Hello";
let c = a ?? b; // "Hello"，因为 a 是 null，所以取 b 的值
console.log(c); // 输出: Hello

// ??运算符 和 ||运算符的区别在于，||运算符会返回第一个真值(真值：除0、""、false、null、undefined、NaN)，而??运算符会返回第一个非空值。
let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0

//|| && ! ??优先级:  ! > && > || > ??
// !（逻辑非） > &&（逻辑与） > ||（逻辑或） > ??（空值合并）
let x = null;
let y = 0;
let z = 5;
let result1 = (!x ?? y) && (z || 10);
alert(result1);
/**
 * 先比较!x和y，因为x=null，本应该是返回false，但是因为!(非)导致!x返回的是true，所以??不执行右边直接取得true
 * || 或 运算的有值直接取，所以得到z = 5的值
 * 因为&& 与 (只会返回假值，如果都是真值的话则会返回最后一个真值)，所以最终结果返回5
 *
 */

// ?? 白话：从左往右的值只要是unll或者时unfinden，就不会取当前的值，而是继续往右边取值，直到取到一个不是null或者undefined的值为止，
//如果都是unll或者undefined的话，就取最后一个值。

/**
* || 返回第一个 真 值。
?? 返回第一个 已定义的 值。
*
*/
