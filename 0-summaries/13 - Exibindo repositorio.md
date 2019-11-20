# Exibindo Repositório

Vamos utilizar a variavel do estado (loading) para verificar enquanto o react está carregando o conteúdo para ser exibido.

O método _render()_ encerra no momento do primeiro return então podemos fazer um loading da seguinte forma:

```js
  render() {
    const { repository, issues, loading } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }

    return <h1> Repository {repository.html_url} </h1>;
  }
```

Como estamos criando um novo Styled Component, devemos importar ele de um arquivo style.js (que devemos criar na pasta Repository) para nosso Repository/index.js

```js
import { Loading } from './styles';
```

nosso arquivo _styles.js_ pode fica da seguinte forma:

```js
import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
```

Para montar nossa página precisamos utilizar o componente _< Container >_ porém até o momento ele só existe como componente estilizado na nossa página _Main_. Para deixar o componente pronto para ser utilizado por todas as páginas podemos fazer da seguinte forma:

- Crie a seguinte estrutura dentro da pasta _**src**_ : _src/components/Container/index.js_. Dentro desse arquivo _index.js_ que acabamos de criar, vamos recortar todo conteudo de estilização que existe hoje no arquivo _Main.js_

Fica assim, precisa de pequenas alterações apenas :

```js
import styled from 'styled-components';

const Container = styled.div`
  /*  max-width: 600px;*/
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 20px 25px;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  svg {
    margin-right: 10px;
  }
`;

export default Container;
```

Agora basta importar o Container não do style components das páginas mas sim da pasta components e utiliza-lo da mesma forma:

```js
import Container from '../../components/Container/index';
```

e utilizar ele com as tags _< Container >_, Adicione no render() que será retornado caso o loading seja falso, no arquivo _Repository/index.js_ que fica assim :

```js
  render() {
    const { repository, issues, loading } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }

    return <Container> Repository {repository.html_url} </Container>;
  }
```

_**LEMBRE-SE DE IMPORTAR O COMPONENTE NA PÁGINA!!!**_

Para acrescentar mais conteúdo do repositório na página podemos deixar nosso arquivo _Repository/index.js_ fica assim:

```js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../services/api';

import Container from '../../components/Container/index';
import { Loading, Owner } from './styles';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

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

    if (loading) {
      return <Loading>Carregando</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos Repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
      </Container>
    );
  }
}
```

Nosso _Repository/styles.js_ fica assim :

```js
import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;
```

Neste ponto temos a aplicação já com a proposta funcionando.

o Próximo passo é listar as ISSUES.
