// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

let bigNumber = 0;

for (let index = 2; index <= 50; index += 1) {
  let isPrime = true;
  for (let index2 = 2; index2 < index; index2 +=1) {
    if (index % index2 === 0){
      isPrime = false;
    }
  }
  if (isPrime) {
    bigNumber = index
  }
}
console.log(bigNumber);