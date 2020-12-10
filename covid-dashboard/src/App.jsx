import React, { useReducer, useState, useEffect } from 'react';
import style from './App.module.scss';
import Title from './components/Title/Title';
import GlobalCases from './components/GlobalCases/GlobalCases';
import PerCountryCases from './components/PerCountryCases/PerCountryCases';
import Map from './components/Map/Map';
import GlobalLosses from './components/GlobalLosses/GlobalLosses';
import Recovered from './components/Recovered/Recovered';
import Diagram from './components/Diagram/Diagram';
import GlobalReducer from './store/GlobalReducer';
import api from './api/api';
import { GET_GLOBAL_INFO } from './store/actionTypes';

function App() {
  const [state, dispatch] = useReducer(GlobalReducer, { globalInfo: {} });
  const [info, setInfo] = useState({});
  console.log(info, setInfo);
  const getGlobalState = async () => {
    const data = await api('summary');
    dispatch({
      type: GET_GLOBAL_INFO,
      payload: data,
    });
  };

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
              ? <PerCountryCases countries={state.globalInfo.Countries} />
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
