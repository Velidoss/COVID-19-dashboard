import React from 'react';
import PropTypes from 'prop-types';
import style from '../components/GlobalCases/GlobalCases.module.scss';
import expandSvg from '../assets/svg/expandSvg.svg';

const StretchButton = ({ toggleIsStretched }) => (
  <button
    type="button"
    className={style.stretchButton}
    onClick={toggleIsStretched}
  >
    <img src={expandSvg} alt="expand" />
  </button>
);

StretchButton.propTypes = {
  toggleIsStretched: PropTypes.func.isRequired,
};

export default StretchButton;
