import React from 'react';
import PropTypes from 'prop-types';
import style from './GlobalCases.module.scss';

const GlobalCases = ({ cases, countryName }) => (
  <div className={style.GlobalCases}>
    <p className={style.GlobalCases__text}>{countryName ? `Cases in ${countryName}` : 'Global cases'}</p>
    <p className={style.GlobalCases__number}>{cases}</p>
  </div>
);

GlobalCases.propTypes = {
  cases: PropTypes.number.isRequired,
  countryName: PropTypes.string.isRequired,
};

export default GlobalCases;
