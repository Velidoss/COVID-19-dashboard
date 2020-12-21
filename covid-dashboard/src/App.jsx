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
import contentConstants from './constants/contentConstants';

function App() {
  const { whole } = contentConstants.quantities;
  const {
    state,
    getGlobalState,
    getPerCountryState,
    setCountryToObserve,
    unsetCountryToObserve,
  } = useContext(GlobalContext);

  useEffect(() => {
    getGlobalState();
    getPerCountryState();
  }, []);

  const {
    contentConfig,
    countries,
    selectedCountryInfo,
  } = state;

  const data = {
    globalCases: contentConfig.quantities === whole
      ? selectedCountryInfo.cases
      : selectedCountryInfo.casesPerOneMillion,
    countryName: selectedCountryInfo.country ? selectedCountryInfo.country : '',
    losses: contentConfig.quantities === whole
      ? selectedCountryInfo.deaths
      : selectedCountryInfo.deathsPerOneMillion,
    countries,
  };

  return (
    <div className={style.App}>
      <Header />
      <main className={style.mainContainer}>
        <div className={style.appPanelLeft}>
          {
            data.globalCases
              ? (
                <GlobalCases
                  cases={data.globalCases}
                  countryName={data.countryName}
                />
              )
              : null
          }
          {
            data.countries
              ? (
                <PerCountryCases
                  setCountryToObserve={setCountryToObserve}
                  unsetCountryToObserve={unsetCountryToObserve}
                  countries={data.countries}
                  selectedCountryId={state.selectedCountryId}
                  contentConfig={contentConfig}
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
              data.losses && data.countries
                ? (
                  <GlobalLosses
                    losses={data.losses}
                    countries={data.countries}
                    countryName={data.countryName ? data.countryName : ''}
                    setCountryToObserve={setCountryToObserve}
                    unsetCountryToObserve={unsetCountryToObserve}
                    selectedCountryId={state.selectedCountryId}
                    contentConfig={contentConfig}
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
