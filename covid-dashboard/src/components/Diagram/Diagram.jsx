import React, { useContext, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import style from './Diagram.module.scss';
import DiagramContext from '../../store/DiagramContext/DiagramContext';

const Diagram = ({ countryName }) => {
  const { state, getDiagramStatistics } = useContext(DiagramContext);

  const [period, setPeriod] = useState(30);
  const [statType, setStatType] = useState('cases');
  const [fillColor, setFillColor] = useState({
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgba(255, 99, 132, 0.2)',
  });
  const [chartData, setChartData] = useState({
    labels: state.diagramStats[statType] ? Object.keys(state.diagramStats[statType]) : [],
    datasets: [
      {
        label: 'Cases statistics',
        data: state.diagramStats[statType] ? Object.values(state.diagramStats[statType]) : [],
        fill: true,
        backgroundColor: fillColor.backgroundColor,
        borderColor: fillColor.borderColor,
      },
    ],
  });

  useEffect(() => {
    getDiagramStatistics(countryName, period);
    setChartData({
      labels: state.diagramStats[statType] ? Object.keys(state.diagramStats[statType]) : [],
      datasets: [
        {
          label: `Number of ${statType}${countryName ? ` in ${countryName}` : ''}`,
          data: state.diagramStats[statType] ? Object.values(state.diagramStats[statType]) : [],
          fill: true,
          backgroundColor: fillColor.backgroundColor,
          borderColor: fillColor.borderColor,
        },
      ],
    });
  }, [countryName, period, statType, fillColor]);

  useEffect(() => {
    setChartData({
      labels: state.diagramStats[statType] ? Object.keys(state.diagramStats[statType]) : [],
      datasets: [
        {
          label: `Number of ${statType}${countryName ? ` in ${countryName}` : ''}`,
          data: state.diagramStats[statType] ? Object.values(state.diagramStats[statType]) : [],
          fill: true,
          backgroundColor: fillColor.backgroundColor,
          borderColor: fillColor.borderColor,
        },
      ],
    });
  }, [state]);

  useEffect(() => {
    switch (statType) {
      case 'deaths': {
        setFillColor({
          backgroundColor: 'rgb(39,39,43)',
          borderColor: 'rgba(255,204,233,0.2)',
        });
        break;
      }
      case 'recovered': {
        setFillColor({
          backgroundColor: 'rgb(25,81,32)',
          borderColor: 'rgb(9,66,20)',
        });
        break;
      }
      default: {
        setFillColor({
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
        });
      }
    }

    setChartData({
      labels: state.diagramStats[statType] ? Object.keys(state.diagramStats[statType]) : [],
      datasets: [
        {
          label: `Number of ${statType}${countryName ? ` in ${countryName}` : ''}`,
          data: state.diagramStats[statType] ? Object.values(state.diagramStats[statType]) : [],
          fill: true,
          backgroundColor: fillColor.backgroundColor,
          borderColor: fillColor.borderColor,
        },
      ],
    });
  }, [statType]);

  return (
    <div className={style.diagramContainer}>
      <div className={style.diagramContainer__controls}>
        <div className={style.diagramContainer__controls__period}>
          <select
            value={period}
            onChange={(event) => setPeriod(event.target.value)}
            className={style.diagramContainer__controls__period_select}
          >
            <option value="30">30 days</option>
            <option value="60">60 days</option>
            <option value="120">120 days</option>
            <option value="150">150 days</option>
            <option value="180">180 days</option>
            <option value="210">210 days</option>
            <option value="240">240 days</option>
            <option value="270">270 days</option>
            <option value="300">300 days</option>
          </select>
        </div>
        <div className={style.diagramContainer__controls__type}>
          <select
            value={statType}
            onChange={(event) => setStatType(event.target.value)}
            className={style.diagramContainer__controls__type_select}
          >
            <option value="cases">cases</option>
            <option value="deaths">deaths</option>
            <option value="recovered">recovered</option>
          </select>
        </div>
      </div>
      <div className={style.diagramContainer__graph}>
        {console.log(chartData)}
        <Line
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            title: { text: 'Number of cases', display: true },
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
