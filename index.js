function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const gerarSenhaRandomica = () => {
  // 1 letra maiscula
  // 1 letra minuscula
  // 1 simbolo
  // 8 chars
  //              0 1 2 3 4
  const letras = "ABCDEFGHIJKLMNOPQRSTUVXZW";
  const simbolos = "#@&";
  let senhaFinal = "";
  const randomTag = document.getElementById("random");

  for (let i = 0; i < 8; i++) {
    const number = getRandomInt(letras.length);

    if (i == 0) {
      senhaFinal += letras[number].toLowerCase();
    }

    if (i == 1) {
      const numberSimbol = getRandomInt(simbolos.length);
      senhaFinal += simbolos[numberSimbol].toLowerCase();
    }

    senhaFinal += letras[number];
  }
  console.log(senhaFinal);
  randomTag.textContent = senhaFinal;
};
