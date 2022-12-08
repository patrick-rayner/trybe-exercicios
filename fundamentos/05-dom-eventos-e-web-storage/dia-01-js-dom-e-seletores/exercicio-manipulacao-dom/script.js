// Para avaliar seus conhecimentos de HTML, você deve modificar os elementos já existentes utilizando apenas as funções:
  // document.getElementById();
  // document.getElementsByClassName();
  // document.getElementsByTagName();

// Crie e execute uma função que mude o texto na tag <p>-----</p>, para uma descrição de como você se vê daqui a 2 anos; 
const changeText = () => {
  let paragraph = document.getElementsByTagName('p')[1];
  paragraph.innerText = 'Ganhar 5.000 e estar em um empresa Ma-ra-vi-lho-sa!!';
};
changeText();

// Crie e execute uma função que mude a cor do quadrado amarelo para rgb(76,164,109); 
const changeToGreen = () => {
let mainContent = document.querySelector('.main-content');
mainContent.style.backgroundColor = 'rgb(76,164,109)';
}
changeToGreen ();

// Crie e execute uma função que mude a cor do quadrado vermelho para branco; 
const changeToWhite = () => {
  let mainContent = document.querySelector('.main-content .center-content');
  mainContent.style.backgroundColor = 'white';
  }
  changeToWhite ()

// Crie e execute uma função que corrija o texto da tag <h1>; 
const correctText = () => {
  let paragraph = document.getElementsByTagName('h1')[0];
  paragraph.innerText = 'Desafio - JavaScript';
};
correctText();

// Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo;
const upperText = () => {
  let textToUpper = document.getElementsByTagName('p')[0];
  textToUpper.style.textTransform = 'uppercase';
};
upperText ();

// Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console. 
const showContentP = () => {
  let content = document.getElementsByTagName('p');
  for (let index = 0; index < content.length; index += 1) {
    console.log(content[index].innerHTML);
  }
};
showContentP ();