import React, { useContext, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import style from './Diagram.module.scss';
import DiagramContext from '../../store/DiagramContext/DiagramContext';

const Diagram = ({ countryName }) => {
  const { state, getDiagramStatistics } = useContext(DiagramContext);
  // eslint-disable-next-line no-unused-vars
  // const { cases, deaths, recovered } = state.diagramStats;

  const [period, setPeriod] = useState(30);
  const [statType, setStatType] = useState('cases');
  const [chartData, setChartData] = useState({
    labels: state.diagramStats[statType] ? Object.keys(state.diagramStats[statType]) : [],
    datasets: [
      {
        label: 'Cases statistics',
        data: state.diagramStats[statType] ? Object.values(state.diagramStats[statType]) : [],
        fill: true,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
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
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
        },
      ],
    });
    console.log(countryName, state);
  }, [countryName, period]);

  useEffect(() => {
    setChartData({
      labels: state.diagramStats[statType] ? Object.keys(state.diagramStats[statType]) : [],
      datasets: [
        {
          label: `Number of ${statType}${countryName ? ` in ${countryName}` : ''}`,
          data: state.diagramStats[statType] ? Object.values(state.diagramStats[statType]) : [],
          fill: true,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
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
  );
};

Diagram.propTypes = {
  countryName: PropTypes.string.isRequired,
};

export default Diagram;
