# Roteamento no React

Como estamos criando um SPA em REACT, vamos adicionar o pacote react-router-dom :

```js
yarn add react-router-dom
```

Após a instalação do pacote, crie o arquivo _*routes.js*_ dentro da pasta _**src**_.

Crie também dentro de _**src**_, a pasta _**pages**_ e dentro dela crie as pastas _**Main**_ e _**Repository**_:
dentro de ambas as pastas crie um arquivo _**index.js**_. A estrutura fica assim :

    src
      pages
        Main
          index.js
        Repository
          index.js

No arquivo _**Main/index.js**_ adicione o seguinte conteúdo:

```js
import React from 'react';

// import { Container } from './styles';

export default function Main() {
  return <h1>Main</h1>;
}
```

No arquivo _**Repository/index.js**_ adicione o seguinte conteúdo:

```js
import React from 'react';

// import { Container } from './styles';

export default function Repository() {
  return <h1>Repository</h1>;
}
```

No arquivo _**routes.js**_ crie o seguinte conteúdo:

```js
/*
Importamos elementos do react-router-dom
-- BrowserRouter permite fazer a navegação por url amigaveis
-- Switch permite que apenas uma rota seja aberta por vez
*/

// Importamos os componentes de páginas
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// importamos as páginas
import Main from './pages/Main/index';
import Repository from './pages/Repository/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
```

Repare na rota da página Main que possui uma propriedade _exact_. Precisamos inserir isto, quando queremos que a rota seja exatamente igual a declarada. Caso contrario ele vai entender que toda rota começa com barra e logo vai abrir a página Main pois é a primeira rota que é encontrada.

Após isso é necessário importar o arquivo de rotas dentro do arquivo _**App.js**_, que fica da seguinte forma:

```js
import React from 'react';

import Routes from './routes';

function App() {
  return <Routes />;
}

export default App;
```

Nesse ponto, se rodarmos o comando _yarn start_ o projeto abrirá a página Main, caso você trocar o URL para _**/repository**_.
