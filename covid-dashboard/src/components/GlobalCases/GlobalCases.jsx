import React from 'react';
import PropTypes from 'prop-types';
import style from './GlobalCases.module.scss';
import expandSvg from '../../assets/svg/expandSvg.svg';

const GlobalCases = ({ cases, countryName }) => (
  <div className={style.GlobalCases}>
    <button type="button" className={style.stretchButton}><img src={expandSvg} alt="expand" /></button>
    <p className={style.GlobalCases__text}>{countryName ? `Cases in ${countryName}` : 'Global cases'}</p>
    <p className={style.GlobalCases__number}>{cases}</p>
  </div>
);

GlobalCases.propTypes = {
  cases: PropTypes.number.isRequired,
  countryName: PropTypes.string.isRequired,
};

export default GlobalCases;
