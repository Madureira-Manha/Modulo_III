//  Obs: sempre será retornado "true" ou "false" de forma aleatória
function comunicacaoPerdida() {
    const random = Math.floor(Math.random() * (2 - 0) + 1);
    return random === 1 ? true : false;
  }

  