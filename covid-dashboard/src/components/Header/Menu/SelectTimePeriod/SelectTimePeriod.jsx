import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from '../Menu.module.scss';
import contentConstants from '../../../../constants/contentConstants';

function SelectTimePeriod({
  selected,
  setContentConfig,
}) {
  const [selectedValue, setSelectedValue] = useState('');
  const { lastDay, fullPeriod } = contentConstants.timePeriod;

  useEffect(() => {
    setSelectedValue(selected);
  }, [selected]);

  return (
    <div className={style.menu__items_item}>
      Show statistics by:
      <select
        className={style.menu__items_item__select}
        value={selectedValue}
        onChange={(event) => setContentConfig('timePeriod', event.target.value)}
      >
        <option className={style.menu__items_item__select_option} value={lastDay}>last day</option>
        <option
          className={style.menu__items_item__select_option}
          value={fullPeriod}
        >
          full period
        </option>
      </select>
    </div>
  );
}

SelectTimePeriod.propTypes = {
  selected: PropTypes.string.isRequired,
  setContentConfig: PropTypes.func.isRequired,
};

export default SelectTimePeriod;
