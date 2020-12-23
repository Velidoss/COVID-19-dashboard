import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './GlobalCases.module.scss';
import expandSvg from '../../assets/svg/expandSvg.svg';

const GlobalCases = ({ cases, countryName }) => {
  const [isStretched, toggleIsStretched] = useState(false);
  const [className, setClassName] = useState('');
  const casesRef = useRef();
  useEffect(() => {
    if (isStretched === true) {
      setClassName('stretchedBlock');
    } else {
      setClassName('GlobalCases');
    }
  }, [isStretched]);
  return (
    <div ref={casesRef} className={style[`${className}`]}>
      <button type="button" className={style.stretchButton} onClick={() => toggleIsStretched(!isStretched)}><img src={expandSvg} alt="expand" /></button>
      <p className={style.GlobalCases__text}>{countryName ? `Cases in ${countryName}` : 'Global cases'}</p>
      <p className={style.GlobalCases__number}>{cases}</p>
    </div>
  );
};

GlobalCases.propTypes = {
  cases: PropTypes.number.isRequired,
  countryName: PropTypes.string.isRequired,
};

export default GlobalCases;
