import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './GlobalCases.module.scss';
import expandSvg from '../../assets/svg/expandSvg.svg';
import contentConstants from '../../constants/contentConstants';

const GlobalCases = ({ cases, countryName, countryFlag }) => {
  const [isStretched, toggleIsStretched] = useState(false);
  const casesRef = useRef();
  useEffect(() => {
    if (isStretched === true) {
      casesRef.current.attributes.style = contentConstants.styles.stretchedBlock;
    } else {
      casesRef.current.attributes.style = '';
    }
  }, [isStretched]);

  return (
    <div ref={casesRef} className={style.GlobalCases}>
      <button type="button" className={style.stretchButton} onClick={() => toggleIsStretched(!isStretched)}><img src={expandSvg} alt="expand" /></button>
      <p className={style.GlobalCases__text}>
        {
          countryFlag.length > 0
            ? <img className={style.GlobalCases__flag} src={countryFlag} alt="flag" />
            : ''
        }
        {countryName ? `Cases in ${countryName}` : 'Global cases'}
      </p>
      <p className={style.GlobalCases__number}>{cases}</p>
    </div>
  );
};

GlobalCases.propTypes = {
  cases: PropTypes.number.isRequired,
  countryName: PropTypes.string.isRequired,
  countryFlag: PropTypes.string.isRequired,
};

export default GlobalCases;
