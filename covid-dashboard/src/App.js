import React from 'react';
import style from './App.module.scss';
import Title from './components/Title/Title'
import GlobalCases from './components/GlobalCases/GlobalCases'
import PerCountryCases from './components/PerCountryCases/PerCountryCases'
import Map from './components/Map/Map'
import GlobalLosses from './components/GlobalLosses/GlobalLosses'
import Recovered from './components/Recovered/Recovered'
import Diagram from './components/Diagram/Diagram'

function App() {
  return (
    <div className={style.App}>
      <Title/>
      <main className={style.mainContainer}>
        <div className={style.appPanelLeft}>
          <GlobalCases/>
          <PerCountryCases/>
        </div>
        <div className={style.mapContainer}>
          <Map/>
        </div>
        <div className={style.appPanelRight}>
          <div className={style.appPanelRight__top}>
            <GlobalLosses/>
            <Recovered/>
          </div>
          <div className={style.appPanelRight__bot}>
            <Diagram/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
