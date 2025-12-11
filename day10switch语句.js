/**
 * switch 语句
 *
 */
// let num = +prompt("请输入数字", "");

// switch (true) {
//   case num >= 1 && num < 60:
//     alert("不及格");
//     break;
//   case num >= 60 && num < 90:
//     alert("及格");
//     break;
//   case num >= 90 && num <= 100:
//     alert("优秀");
//     break;
//   default:
//     alert("输入错误");
//     break;
// }
// let a = +prompt("请输入数字", "");

// switch (a) {
//   case 3:
//     alert("Too small");
//     break; // 跳出循环
//   case 4:
//     alert("Exactly!");
//     break;
//   case 5:
//     alert("Too big");
//     break;
//   default:
//     alert("I don't know such values");
// }

//
// let a = "1";
// let b = 0;

// switch (
//   +a // +1 = 1
// ) {
//   case b + 1: // 0 + 1 = 1
//     alert("this runs, because +a is 1, exactly equals b+1");
//     break;

//   default:
//     alert("this doesn't run");
// }

/**
 * case 分组
 *
 */
// let a = 3;

// switch (a) {
//   case 4:
//     alert("Right!");
//     break;

//   case 3: // (*) 下面这两个 case 被分在一组
//   case 5:
//     alert("Wrong!");
//     alert("Why don't you take a math class?");
//     break;

//   default:
//     alert("The result is strange. Really.");
// }

/**
 * 关键类型
 *
 */
// let arg = prompt("Enter a value?");
// switch (arg) {
//   case "0":
//   case "1":
//     alert("One or zero");
//     break;

//   case "2":
//     alert("Two");
//     break;

//   case 3:
//     alert("Never executes!");
//     break;
//   default:
//     alert("An unknown value");
// }

/**
 * 练习1
 *将下面 switch 结构的代码写成 if..else 结构：

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
 */
// let browser = prompt("请输入浏览器名称", "");
// if (browser === "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

/**
 * 练习2
 *用 switch 重写以下代码：

let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
 */
let a = +prompt("a?", "");
switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2,3");
    break;
  default:
    alert("输入错误");
}
