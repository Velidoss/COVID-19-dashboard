import React from 'react';
import PropTypes from 'prop-types';
import style from './MapCountryInfo.scss';
import closeIcon from '../../../assets/svg/times-solid.svg';

const MapCountryInfo = ({
  close, cases, deaths, country, recovered,
}) => (
  <div className={style.mapCountryInfo}>
    <button className={style.mapCountryInfo__button} onClick={close} type="button" label="close">
      <img src={closeIcon} alt="close" />
    </button>
    <p>{`Country name: ${country}`}</p>
    <p>{`Number of cases: ${cases}`}</p>
    <p>{`Number of deaths: ${deaths}`}</p>
    <p>{`Number of recovered: ${recovered}`}</p>
  </div>
);

MapCountryInfo.propTypes = {
  close: PropTypes.func.isRequired,
  cases: PropTypes.number.isRequired,
  deaths: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  recovered: PropTypes.number.isRequired,
};

export default MapCountryInfo;
