# Adicionando Repositórios

O Componente da página Main nesse ponto ainda é um componente funcional e para podermos trabalhar com o estado da aplicação precisaremos transforma-lo em classe.
para isso devemos deixar da seguinte forma para transformá-lo em um componente StateFull.

```js
import React, { Component } from 'react';

import { FaGithubAlt, FaPlus } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles';

export default class Main extends Component {
  state = {};

  render() {
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={() => {}}>
          <input type="text" placeholder="Adicionar repositório" />
          <SubmitButton disable>
            <FaPlus color="#FFF" size={14} />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
```

Dentro da váriavel _state_ vamos criar a váriavel que irá armazenar o novo repositório que irá ser adicionado.

```js
state = {
  newRepo: '',
};
```

Após isso iremos criar os métodos e colocar a variavel newRepo como sendo valor do input que está dentro do form, fica assim :

```js
import React, { Component } from 'react';

import { FaGithubAlt, FaPlus } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
  };

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.newRepo);
  };

  render() {
    const { newRepo } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />
          <SubmitButton disable>
            <FaPlus color="#FFF" size={14} />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
```

Neste ponto podemos conseguimos rodar a aplicação com o _*yarn start*_
e nas ferramentas de desenvolvedor verificar que a variavel newRepo que está no estado da aplicação está recebendo o valor do input no momento do onSubmit do Form.

Como vamos consumir a api do gitHub, precisamos de uma biblioteca para consumir estas API's. Para isso vamos utilizar o Axios.

```
yarn add axios
```

Vá até a pasta _**src**_ e crie a pasta _**services**_ e dentro dela crie um arquivo \***\*api.js\*\*** e deixe ele com o conteúdo abaixo:

```
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;

```

Agora deixe a página _**Main/index.js**_ com o conteudo:

```js
import React, { Component } from 'react';

import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
  };

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;
    const response = await api.get(`/repos/${newRepo}`);

    const data = {
      name: response.data.full_name,
      description: response.data.description,
    };

    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
      loading: false,
    });
  };

  render() {
    const { newRepo, loading } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />
          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner
                color="
              #fff"
                size={14}
              />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
```

E o estilo _**Main/styles.js**_ com o conteudo:

```js
import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

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
export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to{
  transform: rotate(360deg);
}
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    padding: 0;
    margin: 0;
  }

  &:hover {
    background: #7159f1;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
```
