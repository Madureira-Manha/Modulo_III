# Pontos do trabalho individual

* Entrar no site npm para utilizar como um tutorial
-> https://www.npmjs.com/package/json-server
-> https://www.fabricadecodigo.com/json-server/

* O que fazer ?
1. Desenvolver um servidor json (json-server) -> Servidor que serve dados no formato json;
2. Precisa ter 3 ou mais rotas;
3. Precisa ter 4 ou mais atributos;
4. Cada rota deverá conter os métodos GET, POST, PUT, DELETE.
5. O servidor deverá estar hospedado (depoly) no render.com ou qualquer serviço de hospedagem.

* Passo a passo :
1. npm install -g json-server // instalar globalmente o json-server
2. Vou utilizar como exemplo o tema HOTEL.
3. Criar um arquivo db.json - E cria toda a base.
4. json-server --watch db.json // assistir o db.json, vai rodar o servidor.
5. 
5. Não esquecer de desenvolver o README com o passo a passo de criação o servidor.

 
# db.json
* São solicitados 3 rotas, 3 propriedades de arrays.
{
    "quartos": [],
    "funcionarios": [],
    "clientes": []
  }

* Para cada rota, eu tenho que ter 3 dados mocados.
{
  "quartos": [
    { "numero": 111, "clienteID": 1, "id": 1 },
    { "numero": 222, "clienteID": 2, "id": 2 },
    { "numero": 333, "clienteID": 3, "id": 3 }
  ],
  "funcionarios": [
    {"nome": "Jade", "cargo": "gerente", "id": 1},
    {"nome": "Suellen", "cargo": "recepção", "id": 2},
    {"nome": "Luiz", "cargo": "segurança", "id": 3}
],
  "clientes": [
    {"nome": "Matheus", "cpf": "111.222.333.-44", "id": 1},
    {"nome": "Gustavo", "cpf": "111.222.333.-55", "id": 2},
    {"nome": "Laís", "cpf": "111.222.333.-66", "id": 3}
  ]
}

# server.js
// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})

# Rotas  -
1. GET -> Buscar dados
2. POST -> Enviar dados para a API
3. PUT -> Atualizar os dados
4. DELETE -> Deletar os dados


* MOKADOS -> Dados já pré-preenchidos.


postman