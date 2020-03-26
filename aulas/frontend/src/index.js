import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; //importando o App.js


/**
 * ReactDOM.render é uma função utilizada para renderizar elementos html na arvore de objetos(dom)
 * Estamos renderizando o componente App(app.js), dentro da div id=root(index.html)
 */
ReactDOM.render(<App />, document.getElementById('root'));


/**
 * Componente = função que retorna html
 */