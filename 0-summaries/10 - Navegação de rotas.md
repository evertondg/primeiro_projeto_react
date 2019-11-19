# Fazendo a navegação para a Página de detalhes.

Não podemos utilizar uma tag _a href_ pois o navegador irá atualizar a página, para isto precisamos utilizar um componente Link do _react-router-dom_:

```js
import { Link } from 'react-router-dom';
```

Após importar, vamos alterar o _a href_ existente pelo componente. Além do link, temos de criar uma passagem de parametros para o nome do repositório ser lido pelo compnonente Repository. Podemos fazer isto da seguinte forma:

```js
<Link to={`/repository/${encodeURIComponent(repository.name)}`}>Detalhes</Link>
```

o _encodeURIComponent()_ encoda a barra que existe no nome do repositorio e troca por _%2_ que é o simbolo da barra no encode. Obviamente ao recuperar esta informação deveremos fazer o _decodeURIComponente()_.

Para recuperar a informação é necessário que o arquivo de rota entenda que estamos passando um parametro no URL.No arquivo _*routes.js*_, deixe a linha da rota de repositórios da seguinte forma:

```js
<Route path="/repository/:repository" component={Repository} />
```

O uso do _/:repository_ indica que o valor que será passado para este trecho é uma váriavel chamada repository.

Feito a passagem do parametro, é necessário recupera-lo. Vá até o arquivo _*Repository/index.js*_ e deixe o conteúdo do arquivo da seguinte forma:

```js
import React from 'react';

// import { Container } from './styles';

export default function Repository({ match }) {
  return <h1>Repository : {decodeURIComponent(match.params.repository)}</h1>;
}
```

A desestruturação de _match_ (que desestruturada da variavel _**props**_) é feita logo na recepção da variavel. Após isto basta utilizar o decodeURIComponente e apresentar o parametro passado (no caso _**repository**_)
