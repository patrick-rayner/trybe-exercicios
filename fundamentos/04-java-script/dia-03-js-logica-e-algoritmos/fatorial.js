// crie um algoritmo que imprima na tela o fatorial de 10.
num = 10;
if (num <= 0 || num === 1) {
  console.log('O número inserido não é um número fatorial');
} else { for (let index = num - 1; index >= 1; index--) {
num *= index;
}
console.log(num);
}

// // crie um algoritmo que imprima na tela o fatorial de 10.
// num = 3;
// let index = num-1;
// if (num <= 0 || num === 1) {
//   console.log('O número inserido não é um número fatorial');
// } else { while (index >= 1) {
// num *= index;
// index--;
// }
// console.log(num);
// }