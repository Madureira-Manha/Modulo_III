//  Testar com vários valores diferentes
const fala = "te comprei um carro... de mentira";

const promessa = new Promise((aceitar, rejeitar) => {
  if (fala.includes("carro") && fala.includes("de verdade")) {
    aceitar("te amo mãe!");
  } else {
    rejeitar("amm, não era bem isso que eu esperava...");
  }
})
  .then((mensagemSucesso) => console.log(mensagemSucesso))
  .catch((mensagemErro) => console.log(mensagemErro));