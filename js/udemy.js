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

// let arr = [1, 15, 4],
//      i = arr.sort(compareNem);
//      function compareNem(a,b) {
//       return a-b;
//      }
//      console.log(arr);

// console.log(0 || "" || 2 || undefined || true || falsе);
let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

    box.style.backgroundColor = 'blue';
    btn[1].style.borderRadius = '100%';
    circle[0].style.backgroundColor = 'red';
    circle[1].style.backgroundColor = 'yellow';
    circle[2].style.backgroundColor = 'green';

    // for(let i = 0; i < heart.length; i++) {
    //   heart[i].style.backgroundColor = 'blue';
    // }
    // heart.forEach(function(item, i, hearts) {
    //   item.style.backgroundColor = 'blue';
    // });

    let div = document.createElement('div'),
        text = document.createTextNode('я учу JS');

        div.classList.add('black');
        // document.body.appendChild(div);
        // wrapper.appendChild(div);

      // div.innerHTML = '<h1>я очень хочу выучить js</h1>';
      div.textContent = 'я очень хочу выучить js';

        document.body.insertBefore(div, circle[0]);
        document.body.removeChild(circle[1]);
        wrapper.removeChild(heart[1]);

        document.body.replaceChild(btn[1], circle[1]);
    console.log(div);
})();