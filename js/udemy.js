'use strict';

(function(){

// 	if(num < 49) {
// 		console.log("Не верно!");
// 	} else if(num > 100) {
// 		console.log("много");
// 	} else {
// 		console.log("Верно!");
// 	}

// 	(num = 50) ? console.log("Верно!") : console.log("Верно!");

// 	switch (num) {
// 		case num < 49:
// 			console.log("Не верно!");
// 			break;
// 		case num > 100:
// 			console.log("много");
// 			break;
// 		case num > 80:
// 			console.log("все еще много");
// 			break;
// 		case 50:
// 			console.log("Верно!");
// 			break;
// 		default: console.log("что то пошло не так");
// 		break;
// 	}

// 	let num = 50;
// 	// while (num < 55) {
// 	// 	console.log(num);
// 	// 	num++;
// 	// }

// 	do {
// 		console.log(num);
// 		num++;
// 	}
// 	while (num < 55);

// 	for(let i = 0; i < 8; i++) {
// 		if(i == 6) {
// 			continue;
// 		}
// 		console.log(i);
// 	}
// let num = 20;
// 	function showFirstMessage(text) {
// 		alert(text);
// 		let num = 10;
// 		console.log(num);
// 	}

// showFirstMessage("Hello Word!");
// console.log(num);

// let calc = function(a,b) {
// 	return(a+b);
// }

// let calc = (a,b) => a+b;
// console.log(calc(3,4));
// console.log(calc(5,6));


// function retVar() {
// 	let num = 50;
// 	return num;
// }

// let anotherNum = retVar();

// console.log(anotherNum);

// let str = "test";
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = "12.2px";
// // console.log(Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));

// let arr = ['first', 2, 3, 'four', 5];
// arr.forEach(function(item, i, mass) {
//   console.log(i + ': '+ item + ' (массив: ' + mass + ")");
// });

// // for(let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }
// console.log(arr);

// let mass = [1, 3, 4, 6, 7];
// for(let key of mass) {
//   console.log(key);
// }
// let answer = prompt("", ""),
//     arr = [];

//     arr = answer.split(',');
//     console.log(arr);
// let arr = ["eqwe", "qwsa", "qq", "zzz"],
//     i = arr.join(', ');
//     console.log(i);

let arr = [1, 15, 4],
     i = arr.sort(compareNem);
     function compareNem(a,b) {
      return a-b;
     }
     console.log(arr);
})();