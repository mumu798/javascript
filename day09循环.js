/**
 *  while 循环
 *
 */
//基础写法
// while (条件) {
//循环体
// }
// let i = 4;

// while (i < 5) {
//   console.log(i);
//   i++;
// }
// while (i) {
//   console.log(i);
//   i--;
// }
//如果只有一个循环则可以不用大括号
let j = 3;
// while (j) console.log(j--);

/**
 * do ... while循环
 *可以将条件检查移至循环体 下面
 */
/**
 * do{}while()
 *先执行循环体，再检查条件，当条件为真时重复执行循环体(但是这种的不常用)
 */
// let i = 5;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

/**
 * for 循环
 *
 */
let age = 18;
// for (初始化; 条件; 迭代) {循环体}
// for (age; age < 20; age++) {
//   console.log(age);
// }

//;是必须存在的
// for (; age < 20; ) {
//   console.log(age++);
// }

/**
 * break 跳出循环
 *
 */
// let i = 0;

// while (true) {
//   // 无限循环
//   let value = +prompt("请输入数字", ""); // +把所有的输入都转换成数字
//   if (!value) break; // 检测输入是否为真值,如果为假则跳出循环
//   i += value; // 累加输入的值，累加value的值
// }
// console.log(i);
/**
 * continue 轻量版的"break"
 *
 */
/*for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue; // 跳过偶数(只会跳过偶数的循环)
  console.log(i);
  //if(i % 2 == 0){console.log(i);}   可以这样写但是不推荐，多了一层嵌套
}
*/

//break/continue标签
// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Value at coords (${i},${j})`, "");

//     // 如果是空字符串或被取消，则中断并跳出这两个循环。
//     if (!input) break outer; // (*)
//   }
// }

// console.log("Done!");

/**
 *  while-每次循环前都要检查条件
 *  do...while-每次循环后都要检查条件
 *  for-每次循环前都要检查条件
 * 用while(true)来实现“无限”循环(死循环)
 */

/**
 * 练习1
 *此代码最后一次 alert 值是多少？为什么？


 */
// let i = 3;
// 值为1，当i为0时，i--会返回0，i会变为0，i为0时，循环结束
// while (i) {
//   alert(i--);
// }

/**
 * 练习2
 *对于每次循环，写出你认为会显示的值，然后与答案进行比较。

以下两个循环的 alert 值是否相同？
 */
// 前缀形式 ++i:  前缀的是返回新值，然后执行，所以是1 2 3 4
// let i = 0
// while (++i < 5) alert(i);

// 后缀形式 i++    后缀的是返回旧值，然后执行，所以是1 2 3 4 5
let i = 0;
// while (i++ < 5) alert(i);

/**
* 练习3
"for" 循环显示哪些值？
重要程度: 4
对于每次循环，写下它将显示的值。然后与答案进行比较。

两次循环 alert 值是否相同？

后缀形式：

for (let i = 0; i < 5; i++) alert( i ); 0 1 2 3 4
前缀形式：

for (let i = 0; i < 5; ++i) alert( i ); 0 1 2 3 4
*
*/

/**
* 练习5
*用 "while" 替换 "for"
重要程度: 5
重写代码，在保证不改变其行为的情况下，将 for 循环更改为 while（输出应保持不变）。

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
*/
let p = 0;
while (p < 3) {
  alert(`number ${p}!`);
  p++;
}
