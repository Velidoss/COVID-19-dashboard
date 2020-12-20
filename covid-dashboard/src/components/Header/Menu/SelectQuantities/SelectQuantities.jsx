import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import style from '../Menu.module.scss';

const SelectQuantities = ({
  selected,
  setContentConfig,
}) => {
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    setSelectedValue(selected);
  }, [selected]);

  return (
    <div className={style.menu__items_item}>
      Show quantities:
      <select
        className={style.menu__items_item__select}
        value={selectedValue}
        onChange={(e) => setContentConfig('quantities', e.target.value)}
      >
        <option className={style.menu__items_item__select_option} value="per100">per 100 000</option>
        <option className={style.menu__items_item__select_option} value="whole">whole</option>
      </select>
    </div>
  );
};

SelectQuantities.propTypes = {
  selected: PropTypes.string.isRequired,
  setContentConfig: PropTypes.func.isRequired,
};

export default SelectQuantities;
