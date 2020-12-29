import React, { useContext, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import style from './Diagram.module.scss';
import DiagramContext from '../../store/DiagramContext/DiagramContext';
import contentConstants from '../../constants/contentConstants';
import diagramConstants from '../../constants/diagramConstants';
import createChartData from '../../common/createChartData';
import SelectPeriod from './SelectPeriod/SelectPeriod';
import SelectStatType from '../../common/SelectStatType/SelectStatType';

const Diagram = ({ countryName }) => {
  const { state, getDiagramStatistics } = useContext(DiagramContext);
  const { diagramStats } = state;
  const { cases, deaths, recovered } = contentConstants.statTypes;
  const {
    casesChartStyle,
    deathsChartStyle,
    recoveredChartStyle,
  } = diagramConstants.metricTypesStyles;
  const [period, setPeriod] = useState(30);
  const [statType, setStatType] = useState(cases);
  const [fillColor, setFillColor] = useState({
    ...casesChartStyle,
  });
  const [chartData, setChartData] = useState(
    createChartData({
      diagramStats, statType, countryName, fillColor,
    }),
  );

  useEffect(() => {
    getDiagramStatistics(countryName, period);
    setChartData(createChartData({
      diagramStats, statType, countryName, fillColor,
    }));
  }, [countryName, period, statType, fillColor]);

  useEffect(() => {
    setChartData(createChartData({
      diagramStats, statType, countryName, fillColor,
    }));
  }, [state]);

  useEffect(() => {
    switch (statType) {
      case deaths: {
        setFillColor({
          ...deathsChartStyle,
        });
        break;
      }
      case recovered: {
        setFillColor({
          ...recoveredChartStyle,
        });
        break;
      }
      default: {
        setFillColor({
          ...casesChartStyle,
        });
      }
    }

    setChartData(createChartData({
      diagramStats, statType, countryName, fillColor,
    }));
  }, [statType]);

  return (
    <div className={style.diagramContainer}>
      <div className={style.diagramContainer__controls}>
        <div className={style.diagramContainer__controls__item}>
          <SelectPeriod
            setPeriod={(event) => setPeriod(event.target.value)}
            period={period}
          />
        </div>
        <div className={style.diagramContainer__controls__item}>
          <SelectStatType
            toggleStatType={(event) => setStatType(event.target.value)}
            currentStatType={statType}
          />
        </div>
      </div>
      <div className={style.diagramContainer__graph}>
        <Line
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoskip: true,
                    maxTicksLimit: 10,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>

  );
};

Diagram.propTypes = {
  countryName: PropTypes.string.isRequired,
};

export default Diagram;
