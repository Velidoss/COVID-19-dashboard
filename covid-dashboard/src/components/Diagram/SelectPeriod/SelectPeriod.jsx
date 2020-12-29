import React from 'react';
import PropTypes from 'prop-types';
import style from '../Diagram.module.scss';
import diagramConstants from '../../../constants/diagramConstants';

const SelectPeriod = ({ period, setPeriod }) => {
  const { selectPeriodValues } = diagramConstants;
  return (
    <select
      value={period}
      onChange={setPeriod}
      className={style.diagramContainer__controls__item_select}
    >
      {
        selectPeriodValues.map((item) => (
          <option key={item.value} value={item.value}>{item.text}</option>
        ))
      }
    </select>
  );
};

SelectPeriod.propTypes = {
  period: PropTypes.number.isRequired,
  setPeriod: PropTypes.func.isRequired,
};

export default SelectPeriod;
