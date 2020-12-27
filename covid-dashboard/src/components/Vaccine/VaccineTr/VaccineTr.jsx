import React from 'react';
import PropTypes from 'prop-types';
import style from '../Vaccine.module.scss';
import caretIcon from '../../../assets/svg/caret-square-down-regular.svg';

const VaccineTr = ({
  candidate, mechanism, sponsors, trialPhase, institutions, toggleDescription,
}) => (
  <tr className={style.table__body_row}>
    <td className={style.table__body_row_col}>
      <button onClick={toggleDescription} type="button" className={style.table__body_row_col_button}>
        <img src={caretIcon} alt="description" />
      </button>
    </td>
    <td className={style.table__body_row_col}>
      {candidate}
    </td>
    <td className={style.table__body_row_col}>
      {mechanism}
    </td>
    <td className={style.table__body_row_col}>
      {sponsors.map((item, i, arr) => (i === arr.length - 1 ? item : `${item}, `))}
    </td>
    <td className={style.table__body_row_col}>
      {trialPhase}
    </td>
    <td className={style.table__body_row_col}>
      {institutions.map((item, i, arr) => (i === arr.length - 1 ? item : `${item}, `))}
    </td>
  </tr>
);

VaccineTr.propTypes = {
  candidate: PropTypes.string.isRequired,
  mechanism: PropTypes.string.isRequired,
  trialPhase: PropTypes.string.isRequired,
  toggleDescription: PropTypes.func.isRequired,
  sponsors: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  institutions: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default VaccineTr;
