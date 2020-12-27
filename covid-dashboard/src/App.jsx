import React from 'react';
import { Route } from 'react-router-dom';
import style from './App.module.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Vaccine from './components/Vaccine/Vaccine';
import VaccineState from './store/VaccineContext/VaccineState';

const App = () => (
  <div className={style.App}>
    <Header />
    <Route exact path="/" render={() => <Main />} />
    <Route
      path="/vaccine"
      render={() => (
        <VaccineState>
          <Vaccine />
        </VaccineState>
      )}
    />
  </div>
);

export default App;
