import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import style from '../Menu.module.scss';
import contentConstants from '../../../../constants/contentConstants';

const SelectQuantities = ({
  selected,
  setContentConfig,
}) => {
  const [selectedValue, setSelectedValue] = useState('');
  const { quantities } = contentConstants.contentConfigTypes;
  const { showQuantitiesTitle } = contentConstants.titles;
  const { whole, per100, lastDay } = contentConstants.quantities;

  useEffect(() => {
    setSelectedValue(selected);
  }, [selected]);

  return (
    <div className={style.menu__items_item}>
      {showQuantitiesTitle}
      <select
        className={style.menu__items_item__select}
        value={selectedValue}
        onChange={(event) => setContentConfig(quantities, event.target.value)}
      >
        <option className={style.menu__items_item__select_option} value={per100}>per 100000</option>
        <option className={style.menu__items_item__select_option} value={whole}>whole</option>
        <option className={style.menu__items_item__select_option} value={lastDay}>lastDay</option>
      </select>
    </div>
  );
};

SelectQuantities.propTypes = {
  selected: PropTypes.string.isRequired,
  setContentConfig: PropTypes.func.isRequired,
};

export default SelectQuantities;
