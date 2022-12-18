# Revisão Aula 04

# REACT
-> Foi lançado pelo FacebooK, hoje Meta, como uma biblioteca de javascript.
-> Atualmente existe duas formas de instação: Create react App(CRA) e VITE.

1. Webpack -> Responsável por agrupar todo o código e separá-lo em módulos, é um empacotador de módulos.

2. Babel -> Responsável por converter o nosso código jsx(estutura que o react utiliza), para HTML, CSS, e JS para que o navegador consiga entender o código que desenvolvemos.

# VITE
1. Instalando o VITE
npm create vite@latest -> Baixar e instalar o VITE.

npm install -> Baixar e instalar as depedências npm.

npm run dev -> Iniciar o servidor para visualizar o projeto.

2. Criando um projeto com vite.

index.html -> Envolve todo o projeto, é a base.
src/main.jsx -> Responsável por pegar todo o código desenvolvido no react e incluir dentro do meu index.html.
src/App.jsx -> É o codigo que irá aparecer na tela, é a pagina principal.
Pasta assets - > Onde ficará os módulos do nosso projeto.

# JSX
-> Extensão do js, introduz elementos XML e HTML, que são convertidos em funções React.
ex: class -> className
for -> htmlfor

# COMPONENTES
-> utilizamos quanto temos algum componente do projeto que vamos utilizar em outras partes.
src/components/Button/Button.jsx
padrão camelCase, sempre começando com a letra maiúscula.
` export function Button() {
    return <button>Like<button>
    }`

export -> Quando eu importar o componente, será necessário desestruturar ele.
* ex: import { Button } from './components/Button/Button'
export default -> Vou exportar o que foi importado por padrão.
* ex: import Button from './components/Button/Button'

App.jsx
` function App() {
    return (
        <div className="App">
        <Button />
        </div>
    )
    }`

# PROPS
-> Passar uma propriedade no componente e esperar um argumento.
//button
    export default function Button({prop}) {
        return <button>{prop.texto}<button>
        }`

//App.jsx
` function App() {
    return (
        <div className="App">
            <Button texto="Love"/>
            <Button texto="Like"/>
            <Button texto="Comment"/>
        </div>
    )
    }`


# HOOKS desde 2019 
-> São funções que permitem a conexão (linkar) dos recursos de estado e ciclo de vida do React.
-> Precisamos importar o hook do recat

//button
´import { useState } from 'react';

export default function Button() {
    const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>{count}</button>
  );
}`

//App.jsx
`import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <Button />

    </div>
  );
}

export default App;`

* Preciso colocar o useState dentro de uma constante.
* Coloco o valor de 0, pois é o começo.
* Desestruturo o array count( estado atual ), setcount( função que irá mudar (setar) o estado.
* toda vez que eu tiver um evento e tiver (), preciso colocar o =>. é uma callback.
//App.jsx


# CSS em JS
-> Importo para o Button.jsx -> import './Button.css'.
`button{
    background-color: blue;
    color:beige;
    margin: 10px;
    padding: 30px 60px;
}`


# Exercícios
Aula 04.

Mão na massa: Criar um componente de formulário
//rfc

