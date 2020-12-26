import React from 'react';
import PropTypes from 'prop-types';
import style from './MapCountryInfo.scss';

const MapCountryInfo = ({
  country, statType, displayInfo, countryFlag,
}) => (
  <div className={style.mapCountryInfo}>
    <p className={style.mapCountryInfo__text}>
      {`Country name: ${country}`}
      <img style={{ width: '30px', marginLeft: '10px' }} className={style.mapCountryInfo__text_flag} src={countryFlag} alt="flag" />
    </p>
    <p>{`Number of ${statType}: ${displayInfo}`}</p>
  </div>
);

MapCountryInfo.propTypes = {
  country: PropTypes.string.isRequired,
  statType: PropTypes.string.isRequired,
  displayInfo: PropTypes.number.isRequired,
  countryFlag: PropTypes.string.isRequired,
};

export default MapCountryInfo;
