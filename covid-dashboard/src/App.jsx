import React, { useEffect, useContext, useState } from 'react';
import GlobalContext from './store/GlobalContext';
import style from './App.module.scss';
import Header from './components/Header/Header';
import GlobalCases from './components/GlobalCases/GlobalCases';
import PerCountryCases from './components/PerCountryCases/PerCountryCases';
import GlobalLosses from './components/GlobalLosses/GlobalLosses';
import Recovered from './components/Recovered/Recovered';
import Diagram from './components/Diagram/Diagram';
import contentConstants from './constants/contentConstants';
import DiagramState from './store/DiagramContext/DiagramState';
import Map from './components/Map/Map';

function App() {
  const { whole, per100, lastDay } = contentConstants.quantities;
  const {
    state,
    getGlobalState,
    getPerCountryState,
    setCountryToObserve,
    unsetCountryToObserve,
  } = useContext(GlobalContext);

  const {
    contentConfig,
    countries,
    selectedCountryInfo,
  } = state;

  const [data, setData] = useState({
    countryName: selectedCountryInfo.country ? selectedCountryInfo.country : '',
    countries,
  });

  useEffect(() => {
    getGlobalState();
    getPerCountryState();
  }, []);

  console.log(data);
  useEffect(() => {
    switch (contentConfig.quantities) {
      case per100:
        setData({
          ...data,
          globalCases: selectedCountryInfo.casesPerOneMillion,
          losses: selectedCountryInfo.deathsPerOneMillion,
          recovered: selectedCountryInfo.recoveredPerOneMillion,
          countries,
          countryName: selectedCountryInfo.country ? selectedCountryInfo.country : '',
        });
        break;
      case lastDay:
        setData({
          ...data,
          globalCases: selectedCountryInfo.todayCases,
          losses: selectedCountryInfo.todayDeaths,
          recovered: selectedCountryInfo.todayRecovered,
          countries,
          countryName: selectedCountryInfo.country ? selectedCountryInfo.country : '',
        });
        break;
      case whole: {
        setData({
          ...data,
          globalCases: selectedCountryInfo.cases,
          losses: selectedCountryInfo.deaths,
          recovered: selectedCountryInfo.recovered,
          countries,
          countryName: selectedCountryInfo.country ? selectedCountryInfo.country : '',
        });
        break;
      }
      default: {
        setData({ ...data });
        break;
      }
    }
  }, [contentConfig.quantities, state]);

  // const data = {
  //   globalCases: contentConfig.quantities === whole
  //     ? selectedCountryInfo.cases
  //     : selectedCountryInfo.casesPerOneMillion,
  //   countryName: selectedCountryInfo.country ? selectedCountryInfo.country : '',
  //   losses: contentConfig.quantities === whole
  //     ? selectedCountryInfo.deaths
  //     : selectedCountryInfo.deathsPerOneMillion,
  //   countries,
  //   recovered: contentConfig.quantities === whole
  //     ? selectedCountryInfo.recovered
  //     : selectedCountryInfo.recoveredPerOneMillion,
  // };

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
          {
            data.countries.length > 0
              ? <Map countries={data.countries} />
              : null
          }
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
            {
              data.recovered && data.countries
                ? (
                  <Recovered
                    recovered={data.recovered}
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
          </div>
          <div className={style.appPanelRight__bot}>
            <DiagramState>
              <Diagram
                countryName={data.countryName}
              />
            </DiagramState>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
