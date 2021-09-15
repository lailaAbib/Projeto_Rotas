import React from 'react';
import './App.css';

import Header from '../Header/Header.jsx'
import Inicio from '../Inicio/Inicio.jsx'
import Parra from '../Parra/Parra.jsx'
import Projeto from '../Projeto/Projeto.jsx'
import Pacaembu from '../Pacaembu/Pacaembu.jsx'
import Perplan from '../Perplan/Perplan.jsx'
import Mrv from '../Mrv/Mrv.jsx'

// MENU PRINCIPAL OPÇÕES PACAEMBÚ
import Universitario from '../Universitario/Universitario.jsx'
import Capri from '../Capri/Capri.jsx'
import Vitta from '../Vitta/Vitta.jsx'
import Quinta from '../Quinta/Quinta.jsx'
import Real from '../Real/Real.jsx'

//  MENU VILA DI CAPRI
import Corretores from '../Corretores/Corretores.jsx'
import Financiamento from '../Financiamento/Financiamento.jsx'
import ProjetosModelo from '../ProjetosModelo/ProjetosModelo.jsx'
import Investimento from '../Investimento/Investimento.jsx'

//  MENU PROJETOS MODELOS
import Casas from '../Casas/Casas.jsx'
import Apartamentos from '../Apartamentos/Apartamentos.jsx'
import Lazer from '../Lazer/Lazer.jsx'
import Ediculas from '../Ediculas/Ediculas.jsx'
import Sobrados from '../Sobrados/Sobrados.jsx'


import { Route, Switch } from 'react-router'

function App() {
  return (
    <div>

      <Header />
 
      <main>
        <Switch>
          <Route exact path = "/" render = {(props) => <Inicio/>}></Route>
          <Route exact path = "/parra" render = {(props) => <Parra/>}></Route>
          <Route exact path = "/projeto" render = {(props) => <Projeto/>}></Route>
          <Route exact path = "/pacaembu" render = {(props) => <Pacaembu/>}></Route>
          <Route exact path = "/perplan" render = {(props) => <Perplan/>}></Route>
          <Route exact path = "/mrv" render = {(props) => <Mrv/>}></Route>

          {/* MENU PRINCIPAL OPÇÕES PACAEMBÚ */}
          <Route exact path = "/universitario" render = {(props) => <Universitario/>}></Route>
          <Route exact path = "/capri" render = {(props) => <Capri/>}></Route>
          <Route exact path = "/vitta" render = {(props) => <Vitta/>}></Route>
          <Route exact path = "/quinta" render = {(props) => <Quinta/>}></Route>
          <Route exact path = "/real" render = {(props) => <Real/>}></Route>

          {/* MENU  VILA DI CAPRI */}
          <Route exact path = "/corretores" render = {(props) => <Corretores/>}></Route>
          <Route exact path = "/financiamento" render = {(props) => <Financiamento/>}></Route>
          <Route exact path = "/projetosModelo" render = {(props) => <ProjetosModelo/>}></Route>
          <Route exact path = "/investimento" render = {(props) => <Investimento/>}></Route>

          {/* MENU PROJETOS MODELOS */}
          <Route exact path = "/casas" render = {(props) => <Casas/>}></Route>
          <Route exact path = "/apartamentos" render = {(props) => <Apartamentos/>}></Route>
          <Route exact path = "/lazer" render = {(props) => <Lazer/>}></Route>
          <Route exact path = "/ediculas" render = {(props) => <Ediculas/>}></Route>
          <Route exact path = "/sobrados" render = {(props) => <Sobrados/>}></Route>

        </Switch>
      </main>
    </div>
    
  );
}

export default App;