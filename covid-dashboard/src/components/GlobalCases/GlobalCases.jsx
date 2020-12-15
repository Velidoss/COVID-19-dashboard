import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './GlobalCases.module.scss';
import expandSvg from '../../assets/svg/expandSvg.svg';

const GlobalCases = ({ cases, countryName }) => {
  const [isStretched, toggleIsStretched] = useState(false);
  const casesRef = useRef();
  useEffect(() => {
    if (isStretched === true) {
      casesRef.current.style.position = 'absolute';
      casesRef.current.style.top = '0';
      casesRef.current.style.left = '0';
      casesRef.current.style.height = '100%';
      casesRef.current.style.zIndex = '100';
    } else {
      casesRef.current.style.position = 'relative';
      casesRef.current.style.top = '0';
      casesRef.current.style.left = '0';
      casesRef.current.style.height = '20vh';
      casesRef.current.style.zIndex = 'auto';
    }
    console.log(isStretched);
  }, [isStretched]);
  return (
    <div ref={casesRef} className={style.GlobalCases}>
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
