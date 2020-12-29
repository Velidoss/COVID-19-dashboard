import React from 'react';
import PropTypes from 'prop-types';
import style from '../../components/Map/Map.module.scss';
import contentConstants from '../../constants/contentConstants';

const SelectStatType = ({ currentStatType, toggleStatType }) => {
  const { cases, deaths, recovered } = contentConstants.statTypes;
  return (
    <div>
      Stats type:
      <select
        value={currentStatType}
        onChange={toggleStatType}
        className={style.controls__select}
      >
        <option className={style.controls__select_option} value={cases}>{cases}</option>
        <option className={style.controls__select_option} value={deaths}>{deaths}</option>
        <option className={style.controls__select_option} value={recovered}>{recovered}</option>
      </select>
    </div>
  );
};

SelectStatType.propTypes = {
  currentStatType: PropTypes.string.isRequired,
  toggleStatType: PropTypes.func.isRequired,
};

export default SelectStatType;
