# Criando Projeto do zero

Podemos criar o projeto em React utilizando o cli do REACT com o seguinte comando:

```
yarn create react-app primeiro_projeto_react
```

Após isso, aguardamos o projeto ser criado e acessamos a pasta do projeto _*cd primeiro_projeto_react*_

Ao abrir a pasta do projeto em seu VScode acesse o arquivo **package.json** e exclua as configurações do eslint, pois faremos a configuração manual mais a frente.

Código a ser retirado:

```js
,
  "eslintConfig": {
    "extends": "react-app"
  }
```

Acessando a pasta public, vemos um arquivo index.html nesse arquivo podemos deixar o conteúdo assim :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="logo192.png" />

    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

Na pasta _*public*_ podemos deixar apenas os arquivos:

- favicon.ico
- index.html

Já na pasta _*src*_, podemos deixar apenas os arquivos:

- App.js
- index.js

Desta forma teremos apenas os arquivos _App.js_ e _index.js_ na pasta src.

no arquivo _index.js_ podemos deixar o conteúdo assim:

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

Já o arquivo _App.js_ podemos deixar o conteúdo assim:

```js
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
```

Repare que retiramos todos os comentários, arquivos necessários para WPA's e arquivos de estilo destes dois arquivos principais. Assim temos um projeto com o mínimo possível para ele executar.
