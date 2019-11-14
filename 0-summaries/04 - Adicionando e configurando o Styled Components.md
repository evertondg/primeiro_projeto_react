# Adicionando Styled Components

Adicione o pacote :

```js
yarn add styled-components
```

Essa biblioteca muda um pouco o jeito de trabalharmos com CSS em REACT e ReactNative.

Uma das vantagens de utilizar o Styled component é que podemos "ESCOPAR" nosso CSS, fazendo quem que ele funcione apenas naquele componente de fato (podendo claro extender para o restante da aplicação caso precise);

Uma ferramenta que vai nos auxiliar durante o desenvolvimento é a extensão do VSCode chamada _**vscode-styled-components**_, que vai permitir o VsCode entender a sintaxe utilizada nesses arquivos de estilo.

Crie um arquivo _**styles.js**_ na pasta _Main_, e adicione o seguinte conteúdo.

```js
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: #7159c1;
  font-family: Arial, Helvetica, sans-serif;
`;
```

Agora devemos importar os estilos para dentro do arquivo da página principal e importar o elemento Title que foi exportado no arquivo _*styles.js*_. Substituindo a tag < h1 > por < Title > veremos que o estilo definido no arquivo _*styles.js*_ é aplicado. Como ele só é importado nesse componente podemos dizer que este estilo de título está "escopado" para esse componente :) . Logo nosso arquivo _*index.js*_ da pasta Main, fica assim:

```js
import React from 'react';

import { Title } from './styles';

export default function Main() {
  return <Title>Main</Title>;
}
```

Outra grande vantagem que já vem desde os preprocessadores como o Sass, é que você pode configurar tags dentro da tag que está trabalhando e fazer o que chamamos de encadeamento de estilo. imagine o arquivo _*index.js*_ a tag < small > dentro da tag < Title >, como vemos abaixo:

```js
import React from 'react';

import { Title } from './styles';

export default function Main() {
  return (
    <Title>
      Main
      <small>Teste</small>
    </Title>
  );
}
```

Poderiamos criar o estilo para ele da seguinte forma no _*style.js*_ :

```js
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: #7159c1;
  font-family: Arial, Helvetica, sans-serif;

  small {
    font-size: 14px;
    color: #333;
  }
`;
```

Uma outra grande vantagem do _Style Component_ é poder acessar as propriedades do componente. Vamos supor que nosso titulo faz parte de um formulário e queremos alterar a cor para um alerta. Imaginando que o conteúdo do _index.js_ fique assim:

```js
import React from 'react';

import { Title } from './styles';

export default function Main() {
  return (
    <Title error={false}>
      Main
      <small>Teste</small>
    </Title>
  );
}
```

Nosso Estilo pode utilizar do javascript para escolher a cor desse componente caso a propriedade de erro esteja ativa. Veja:

```js
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: ${props => (props.error ? 'red' : '#7159c1')};
  font-family: Arial, Helvetica, sans-serif;

  small {
    font-size: 14px;
    color: #333;
  }
`;
```

Nota-se que como estamos criando uma função dentro da propriedade e gerando uma condição devemos utilizar das aspas simples para mostrar o conteúdo que será adicionado na propriedade _color_
