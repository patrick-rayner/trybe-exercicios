let candidato = 45;

if (candidato >= 80) {
  console.log("Parabéns, você foi aprovada(o)!");
} else if (candidato < 80 && candidato >= 60) {
  console.log("Você está na nossa lista de espera");
} else if (candidato < 60) {
  console.log("Você foi reprovada(o)");
}