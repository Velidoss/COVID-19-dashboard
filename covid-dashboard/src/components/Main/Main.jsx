import React, { useEffect, useContext, useState } from 'react';
import GlobalContext from '../../store/GlobalContext';
import style from './Main.module.scss';
import GlobalCases from '../GlobalCases/GlobalCases';
import PerCountryCases from '../PerCountryCases/PerCountryCases';
import GlobalLosses from '../GlobalLosses/GlobalLosses';
import Recovered from '../Recovered/Recovered';
import Diagram from '../Diagram/Diagram';
import contentConstants from '../../constants/contentConstants';
import DiagramState from '../../store/DiagramContext/DiagramState';
import Map from '../Map/Map';

function Main() {
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
    countryFlag: selectedCountryInfo.countryInfo ? selectedCountryInfo.countryInfo.flag : '',
    countries,
  });

  useEffect(() => {
    getGlobalState();
    getPerCountryState();
  }, []);

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
          countryFlag: selectedCountryInfo.countryInfo ? selectedCountryInfo.countryInfo.flag : '',
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
          countryFlag: selectedCountryInfo.countryInfo ? selectedCountryInfo.countryInfo.flag : '',
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
          countryFlag: selectedCountryInfo.countryInfo ? selectedCountryInfo.countryInfo.flag : '',
        });
        break;
      }
      default: {
        setData({ ...data });
        break;
      }
    }
  }, [contentConfig.quantities, state]);

  return (
    <main className={style.mainContainer}>
      <div className={style.appPanelLeft}>
        {
          data.globalCases !== undefined
            ? (
              <GlobalCases
                cases={data.globalCases}
                countryName={data.countryName}
                countryFlag={data.countryFlag}
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
            data.losses !== undefined && data.countries
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
            data.recovered !== undefined && data.countries
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
  );
}

export default Main;
