// Percorra o array imprimindo todos os valores nele contidos com a função console.log();

// Utilizando for/of
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let indexOfNumbers of numbers){
//   console.log(indexOfNumbers);
// }

// Utilizando for apenas
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let indexOfNumbers = 0; indexOfNumbers < numbers.length; indexOfNumbers += 1){
//   console.log(numbers[indexOfNumbers]);
// }

// Some todos os valores contidos no array e imprima o resultado;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sumOfNumbers = 0
// for (let indexOfNumbers = 0; indexOfNumbers < numbers.length; indexOfNumbers += 1){
//   sumOfNumbers += numbers[indexOfNumbers];
// }
// console.log(sumOfNumbers);

// Calcule e imprima a média aritmética dos valores contidos no array;
//     A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sumOfNumbers = 0
// for (let indexOfNumbers = 0; indexOfNumbers < numbers.length; indexOfNumbers += 1){
//   sumOfNumbers += numbers[indexOfNumbers];
// }
//   average = sumOfNumbers/(numbers.length)
// console.log(average);

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sumOfNumbers = 0;
// for (let indexOfNumbers = 0; indexOfNumbers < numbers.length; indexOfNumbers += 1){
//   sumOfNumbers += numbers[indexOfNumbers];
// }
//   average = sumOfNumbers / numbers.length ;

//   if (average > 20){
//     console.log(average,'é maior que 20');
//   } else {
//     console.log(average,'é menor ou igual a 20');    
//   }

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let higherValue = numbers [0];
// for (let indexOfNumbers = 1; indexOfNumbers < numbers.length; indexOfNumbers += 1){
//   if (numbers[indexOfNumbers] > higherValue) {
//     higherValue = numbers[indexOfNumbers];
//   }
// }
// console.log(higherValue);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let evenOrOdd = 0;
// for (let indexOfNumbers = 0; indexOfNumbers < numbers.length; indexOfNumbers += 1){
//   if (numbers[indexOfNumbers]%2 !== 0){
//     evenOrOdd += 1;
//   }
// }
// if (evenOrOdd !== 0){
//   console.log('Existem', evenOrOdd, 'valores ímpares no array');
// } else {
//   console.log('Nenhum valor ímpar encontrado');
// }

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let lowerValue = numbers [0];
// for (let indexOfNumbers = 1; indexOfNumbers < numbers.length; indexOfNumbers += 1){
//   if (numbers[indexOfNumbers] < lowerValue) {
//     lowerValue = numbers[indexOfNumbers];
//   }
// }
// console.log(lowerValue);

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
// let array = []
// for (let index = 1; index <= 25; index += 1){
//   array.push(index);
// }
// console.log(array);

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
// let array = []
// let index = 1
// while(index < 25){
//   array.push(index);
//   index +=1;
// }
// for (let indexDiv = 0; indexDiv < array.length; indexDiv +=1){
//   console.log(array[indexDiv]/2);
// }

// Ordene o array numbers em ordem crescente e imprima seus valores; 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; // declaração do array
for (let index1 = 1; index1 < numbers.length; index1 += 1) { // primeiro loop de iteração com o lenght de [numbers]
  for (let index2 = 0; index2 < index1; index2 += 1) { // segundo loop de iteração que fará a comparação sempre com o primeiro index de numbers
    // index de valores diferentes para serem comparados
    if (numbers[index1] < numbers[index2]) { 
      // se o (index1) for menor que (index2) executa a ação
      let order = numbers[index1];
      numbers[index1] = numbers[index2];
      numbers[index2] = order; // aplica a alteração feita no loop para o array
    }
  }
}
console.log(numbers);