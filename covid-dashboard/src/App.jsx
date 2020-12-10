import React, { useEffect, useContext } from 'react';
import GlobalContext from './store/GlobalContext';
import style from './App.module.scss';
import Title from './components/Title/Title';
import GlobalCases from './components/GlobalCases/GlobalCases';
import PerCountryCases from './components/PerCountryCases/PerCountryCases';
import Map from './components/Map/Map';
import GlobalLosses from './components/GlobalLosses/GlobalLosses';
import Recovered from './components/Recovered/Recovered';
import Diagram from './components/Diagram/Diagram';

function App() {
  const { state, getGlobalState, setCountryToObserve } = useContext(GlobalContext);
  console.log(state);
  useEffect(() => {
    getGlobalState();
  }, []);

  return (
    <div className={style.App}>
      <Title />
      <div>
        {}
      </div>
      <main className={style.mainContainer}>
        <div className={style.appPanelLeft}>
          {
            state.globalInfo.Global
              ? <GlobalCases cases={state.globalInfo.Global.TotalConfirmed} />
              : null
          }
          {
            state.globalInfo.Global
              ? (
                <PerCountryCases
                  setCountryToObserve={setCountryToObserve}
                  countries={state.globalInfo.Countries}
                />
              )
              : null
          }
        </div>
        <div className={style.mapContainer}>
          <Map />
        </div>
        <div className={style.appPanelRight}>
          <div className={style.appPanelRight__top}>
            {
              state.globalInfo.Global
                ? (
                  <GlobalLosses
                    losses={state.globalInfo.Global.TotalDeaths}
                    countries={state.globalInfo.Countries}
                    setCountryToObserve={setCountryToObserve}
                  />
                )
                : null
            }
            <Recovered />
          </div>
          <div className={style.appPanelRight__bot}>
            <Diagram />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
