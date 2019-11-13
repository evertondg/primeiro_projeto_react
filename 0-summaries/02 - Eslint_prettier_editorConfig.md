# Configurando ESlint, Prettier e EditorConfig

Vamos configurar estas ferramentas para manter o Styleguide, um padrao de escrita dentro do projeto

## Configurando o EditorConfig

Vamos começar peo _EditorConfig_ (Tenha certeza de ter esta extensão instalada no seu VScode). Clique com o botão direito na árvore de arquivos do seu projeto e clique na opção _*generate.editorconfig*_

Após o arquivo ser gerado, deixe ele com o seguinte conteúdo

```js
root = true

[*]
end_of_line = lf
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

a opção _*end_of_line = lf*_ força o final das linhas a ficar no padrão unix e nao no padrão windows.

## Configurando o ESlint

- Adicione a dependencia do ESlint como dependencia de dev:

```js
yarn add eslint -D
```

- Após a instalação execute o comando:

```js
yarn eslint --init
```

- Escolha a 3ª opção (_To check syntax, find problems, and enforce code style)_.
- Escolha a opção _Javascript modules (import/export)_
- Escolha a opção _*REACT*_
- Indique que seu projeto não irá utilizar Typescrit _*(N)*_
- Escolha a opção _*BROWSER*_ pois estamos rodando a aplicação no navegador.
- Escolha a opção _*Use a popular style guide*_
- Escolha a opção _*Airbnb*_
- Escolha a opção _*Javascript*_

Após isto basta ir colocando _*(Y)*_ para aceitar as instalações.

Depois de instalar vá até a árvore de arquivos e diretórioes e apague o arquivo _package-lock.json_ caso ele exista. Após apagar rode o comando _**yarn install**_ na raíz do projeto. Às vezes esse procedimento é necessário pois o eslint instala os pacotes utilizando npm e como estamos utilizando yarn reinstalamos as dependencias para atualizar adequadamente o _package.json_

Ao abrir os arquivos .js neste momento, nota-se que vários erros irão aparecer. Sinal que o eslint está fazendo seu papel. Esses erros irão sumir quando terminar-mos nossas configurações.

# Configurando o Prettier

Adicione as seguintes dependencias de DEV.

```
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```

abra o arquivo _**.eslintrc.js**_ e deixe-o da seguinte forma:

```js
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'import/prefer-default-export': 'off',
  },
};
```

Após isto, crie um arquivo _**.prettierrc**_ com o seguinte conteúdo:

```js
{
  "singleQuote": true,
  "trailingComma": "es5"
}
```

Isso fará que o prettier e a styleguide do Airbnb "conversem" melhor

Nesse momento temos um projeto totalmente configurado para trabalhar com o código de forma padronizada .
