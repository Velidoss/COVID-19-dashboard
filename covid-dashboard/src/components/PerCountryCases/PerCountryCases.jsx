import React from 'react';
import PropTypes from 'prop-types';
import style from './PerCountryCases.module.scss';

const PerCountryCases = ({ countries }) => (
  <div className={style.cases}>
    <p className={style.cases__title}>Cases by Country / region/ sovereignty</p>
    <div className={style.cases__list}>
      {
        countries.length > 0
          ? countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)
            .map((country, index) => (
              <div className={style.cases__list_item} id={index * 2}>
                <span className={style.cases__list_item_injured}>{country.TotalConfirmed}</span>
                <span className={style.cases__list_item_country}>{country.Country}</span>
              </div>
            ))
          : (
            <div className={style.cases__list_item}>
              No data provided
            </div>
          )
      }
    </div>
  </div>
);

PerCountryCases.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    TotalConfirmed: PropTypes.number.isRequired,
    Country: PropTypes.string.isRequired,
  })).isRequired,
};

export default PerCountryCases;
