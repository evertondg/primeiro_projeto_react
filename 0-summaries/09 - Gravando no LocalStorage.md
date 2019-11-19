# Utilizando o LocalStorage

Adicione o seguinte código logo abaixo do _state{...}_ na página _*Main/index.js*_

```js
  // Carregar os Dados do localStorage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  // Salvar dados no localStorage
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;
    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }
```

em **_componentDidMount()_** fazemos a leitura do localStorage e caso exista transformamos o conteúdo em json para setar o estado da aplicação.

Já **_componentDidUpdate(\_,prevState)_** recebe o estado anterior da aplicação que comparamos com o estado atual caso exista diferença, armazenamos novamente o estado para atualizar o localStorage.
