import React from 'react';
import PropTypes from 'prop-types';
import style from './MapCountryInfo.scss';

const MapCountryInfo = ({
  country, statType, displayInfo,
}) => (
  <div className={style.mapCountryInfo}>
    <p>{`Country name: ${country}`}</p>
    <p>{`Number of ${statType}: ${displayInfo}`}</p>
  </div>
);

MapCountryInfo.propTypes = {
  country: PropTypes.string.isRequired,
  statType: PropTypes.string.isRequired,
  displayInfo: PropTypes.number.isRequired,
};

export default MapCountryInfo;
