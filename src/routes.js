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
        <Route path="/repository/:repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
