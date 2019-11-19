# Carregando dados da API Github

Vamos utilizar a API do Github para exibir todos os dados faltantes do repositório. Como utilizaremos o estado da aplicação e as funções _componentDidMount()_ é necessário transformar esse componente funcional em uma classe. o arquivo _**Repository/index.js**_ fica assim:

```js
import React, { Component } from 'react';

// import { Container } from './styles';

export default class Repository extends Component {
  async componentDidMount() {
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);
    console.log(repoName);
  }

  render() {
    return <h1> Repository </h1>;
  }
}
```

Repare que após montar os componentes a aplicação já consegue resgatar o parametro passado via URL e retornar no _console.log_.

As chamadas que serão feitas, buscarão informação em dois endpoints diferentes. Um trará os dados do repositório e outro das issues do repositório e outras informaões.

Como vamos trabalhar com a api vamos importar da pasta service como fizemos anteriormente.

## Vamos pensar um pouco !!!

Poderiamos fazer desta forma porém não necessariamente a segunda chamada
precisa esperar a primeira terminar. Desta forma também a segunda chamada
só iria executar quando a primeira termina devido o AWAIT.

```js
const response = await api.get(`/repos/${repoName}`);
const issues = await api.get(`/repos/${repoName}/issues`);
```

Mas não seria melhor então chamar as duas ao mesmo tempo, já que são independentes? YEAH!!!! mas como fazer?

Assim óh!!

```js
await Promise.all([
  api.get(`/repos/${repoName}`),
  api.get(`/repos/${repoName}/issues`),
]);
```

Desta forma, as duas chamadas às API's são feitas ao mesmo tempo e são independentes, porém o código só da sequencia quando as duas terminarem!

_Mas como pegar o valor de uma e de outra isoladamente?_

Podemos novamente utilizar da desestruturação do JS para receber ao valores, já que o restorno do código acima é um arra onde a primeira posição são os dados dos respositórios e a segunda são os dados das issues. Fica assim:

```js
const [repository, issues] = await Promise.all([
  api.get(`/repos/${repoName}`),
  api.get(`/repos/${repoName}/issues`),
]);
```

Podemos melhorar ainda a chamada a API de issues utilizando _query params_ do **axios**, para trazer apenas 5 itens por chamada e apenas com o status de aberto. Veja

```js
const [repository, issues] = await Promise.all([
  api.get(`/repos/${repoName}`),
  api.get(`/repos/${repoName}/issues`, {
    params: {
      state: 'open',
      per_page: 5,
    },
  }),
]);
```

Após isso, podemos utilizar um console.log para verificar as variaveis _repository_ e _issues_ (Aquelas que foram desestruturadas) e ver que estão sendo preenchidas. Agora basta preencher o estado da aplicação com os valores restados da api atraves o parametro passado via URL, e popular a página.

Como vamos precisar armazenar no estado e nosso repositório é apenas um unico objeto e nossas issues são um array, pois são várias issues, nosso código fica assim até agora.

```js
import React, { Component } from 'react';
import api from '../../services/api';
import { promises } from 'fs';
// import { Container } from './styles';

export default class Repository extends Component {
  state = {
    repository: {},
    issues: [],
    loading: true,
  };

  async componentDidMount() {
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  render() {
    const { repository, issues, loading } = this.state;
    return <h1> Repository </h1>;
  }
}
```

Repare que criamos o estado da aplicação antes do metodo _componentDidMount()_ e criamos uma variavel _loading_ setada como true e já no final desta função setamos o estado após filtrar todo o conteúdo e o _loading_ como false (já filtramos nossos dados da API e terminamos o loading). Tudo isso dentro da função _this.setState_
