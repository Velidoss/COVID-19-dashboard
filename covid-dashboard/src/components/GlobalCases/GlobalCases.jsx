import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './GlobalCases.module.scss';
import StretchButton from '../../common/StretchButton';

const GlobalCases = ({ cases, countryName, countryFlag }) => {
  const [isStretched, toggleIsStretched] = useState(false);
  const [className, setClassName] = useState('');
  useEffect(() => {
    if (isStretched === true) {
      setClassName('stretchedBlock');
    } else {
      setClassName('GlobalCases');
    }
  }, [isStretched]);

  return (
    <div className={style[`${className}`]}>
      <StretchButton
        toggleIsStretched={() => toggleIsStretched(!isStretched)}
      />
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
