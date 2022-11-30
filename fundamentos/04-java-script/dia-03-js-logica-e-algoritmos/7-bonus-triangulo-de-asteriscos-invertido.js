// Agora inverta o lado do triângulo. Por exemplo: 
// n = 5

//     *
//    **
//   ***
//  ****
// *****
let n = 5;
let ast = "*";
let space = '';
let position = n - 1;

for (let index = 0; index < n; index +=1) {
  for (let index2 = 0; index2 < n; index2 +=1) {
    if (index2 < position) {
      space = space + ' ';
    } else {
      space = space + ast;
    }
 }
 console.log(space);
 space = '';
 position -=1;    
}