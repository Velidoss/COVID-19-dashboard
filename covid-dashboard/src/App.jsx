import React, { useEffect, useContext } from 'react';
import GlobalContext from './store/GlobalContext';
import style from './App.module.scss';
import Header from './components/Header/Header';
import GlobalCases from './components/GlobalCases/GlobalCases';
import PerCountryCases from './components/PerCountryCases/PerCountryCases';
import Map from './components/Map/Map';
import GlobalLosses from './components/GlobalLosses/GlobalLosses';
import Recovered from './components/Recovered/Recovered';
import Diagram from './components/Diagram/Diagram';

function App() {
  const {
    state,
    getGlobalState,
    getPerCountryState,
    setCountryToObserve,
    unsetCountryToObserve,
    // getCountryRegionsInfo,
  } = useContext(GlobalContext);

  useEffect(() => {
    getGlobalState();
    getPerCountryState();
  }, []);

  // useEffect(() => {
  //   getCountryRegionsInfo(state.selectedCountryInfo.Slug);
  // }, [state.selectedCountryInfo]);

  return (
    <div className={style.App}>
      <Header />
      <div>
        {}
      </div>
      <main className={style.mainContainer}>
        <div className={style.appPanelLeft}>
          {
            state.selectedCountryInfo.cases
              ? (
                <GlobalCases
                  cases={state.selectedCountryInfo.cases}
                  countryName={state.selectedCountryInfo.country ? state.selectedCountryInfo.country : ''}
                />
              )
              : null
          }
          {
            state.countries
              ? (
                <PerCountryCases
                  setCountryToObserve={setCountryToObserve}
                  unsetCountryToObserve={unsetCountryToObserve}
                  countries={state.countries}
                  selectedCountryId={state.selectedCountryId}
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
              state.selectedCountryInfo.deaths && state.countries
                ? (
                  <GlobalLosses
                    losses={state.selectedCountryInfo.deaths}
                    countries={state.countries}
                    countryName={state.selectedCountryInfo.country ? state.selectedCountryInfo.country : ''}
                    setCountryToObserve={setCountryToObserve}
                    unsetCountryToObserve={unsetCountryToObserve}
                    selectedCountryId={state.selectedCountryId}
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
