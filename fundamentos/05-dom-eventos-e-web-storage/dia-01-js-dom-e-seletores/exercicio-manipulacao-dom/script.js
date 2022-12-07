// Para avaliar seus conhecimentos de HTML, você deve modificar os elementos já existentes utilizando apenas as funções:
document.getElementById();
document.getElementsByClassName();
document.getElementsByTagName();

const changeText = () => {
  let paragraph = document.getElementsByTagName('p')[1];
  paragraph.innerText = 'Ganhar 5.000 e estar em um empresa Ma-ra-vi-lho-sa!!';
};
changeText();