import React from 'react';
import PropTypes from 'prop-types';
import style from './MapCountryInfo.scss';

const MapCountryInfo = ({
  cases, deaths, country, recovered,
}) => (
  <div className={style.mapCountryInfo}>
    <p>{`Country name: ${country}`}</p>
    <p>{`Number of cases: ${cases}`}</p>
    <p>{`Number of deaths: ${deaths}`}</p>
    <p>{`Number of recovered: ${recovered}`}</p>
  </div>
);

MapCountryInfo.propTypes = {
  cases: PropTypes.number.isRequired,
  deaths: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  recovered: PropTypes.number.isRequired,
};

export default MapCountryInfo;
