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
  const {
    state, getGlobalState, setCountryToObserve, unsetCountryToObserve, getCountryRegionsInfo,
  } = useContext(GlobalContext);
  console.log(state);
  useEffect(() => {
    getGlobalState();
  }, []);
  useEffect(() => {
    getCountryRegionsInfo(state.countryInfo.Slug);
  }, [state.countryInfo]);

  return (
    <div className={style.App}>
      <Title />
      <div>
        {}
      </div>
      <main className={style.mainContainer}>
        <div className={style.appPanelLeft}>
          {
            state.countryInfo.TotalConfirmed
              ? <GlobalCases cases={state.countryInfo.TotalConfirmed} countryName={state.countryInfo.Country ? state.countryInfo.Country : ''} />
              : null
          }
          {
            state.countries
              ? (
                <PerCountryCases
                  setCountryToObserve={setCountryToObserve}
                  unsetCountryToObserve={unsetCountryToObserve}
                  countries={state.countries}
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
              state.countryInfo.TotalDeaths && state.countries
                ? (
                  <GlobalLosses
                    losses={state.countryInfo.TotalDeaths}
                    countries={state.countries}
                    countryName={state.countryInfo.Country ? state.countryInfo.Country : ''}
                    setCountryToObserve={setCountryToObserve}
                    unsetCountryToObserve={unsetCountryToObserve}
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
