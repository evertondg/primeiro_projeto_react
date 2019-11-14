# Utilizando estilos Globais

Diferente do estilo escopado para o componente, o Estilo Global como o próprio nome diz, faz referência a todo o projeto. Podendo ser utilizado dentro de qualquer componente do REACT.

Dentro da pasta _**src**_, crie uma pasta _**styles**_.Nesta pasta crie o arquivo _**global.js**_ e adicione o seguinte conteúdo:

```js
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  html,body, #root{
    min-height: 100%;
  }

  body{
    background: #7159c1;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button{
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
```

Temos então o arquivo de estilo global criado, entretanto ele ainda não foi importado em nenhum lugar. como ele é o estilo global, vamos importa-lo dentro de nosso _**App.js**_, que fica da seguinte forma:

```js
import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
```
