// fetch()
//   .then((result) => {
//     result.json().then((JsonData) => console.log(JsonData));
//   })
//   .catch((erro) => {
//     console.log(erro);
//   });

  //https://randomuser.me/

  // const offset = 0; //de 
  // const limit = 10; // até

  const url = "https://randomuser.me/api/";

  fetch(url)
    .then((retorno) => {
      retorno.json()
    .then((retornoConvertido) => console.log(retornoConvertido));
    }) 
    .catch((erro) => {
      console.log(erro);
    })

