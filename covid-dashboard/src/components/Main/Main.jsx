import React, { useEffect, useContext } from 'react';
import GlobalContext from '../../store/GlobalContext';
import style from './Main.module.scss';
import GlobalCases from '../GlobalCases/GlobalCases';
import PerCountryCases from '../PerCountryCases/PerCountryCases';
import GlobalLosses from '../GlobalLosses/GlobalLosses';
import Recovered from '../Recovered/Recovered';
import Diagram from '../Diagram/Diagram';
import DiagramState from '../../store/DiagramContext/DiagramState';
import Map from '../Map/Map';
import useSetDataByTheConfig from '../../customHooks/useSetDataByTheConfig';

function Main() {
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

  useEffect(() => {
    getGlobalState();
    getPerCountryState();
  }, []);

  const data = useSetDataByTheConfig({
    selectedCountryInfo, countries, contentConfig, state,
  });

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
