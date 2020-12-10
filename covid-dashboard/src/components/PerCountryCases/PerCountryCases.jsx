import React from 'react';
import PropTypes from 'prop-types';
import style from './PerCountryCases.module.scss';
import GlobalCases from '../GlobalCases/GlobalCases';

// eslint-disable-next-line react/prop-types
const PerCountryCases = ({ countries }) => (
  <div className={style.cases}>
    <p className={style.cases__title}>Cases by Country / region/ sovereignty</p>
    <div className={style.cases__list}>
      {
        // eslint-disable-next-line react/prop-types
        countries.length > 0
          // eslint-disable-next-line react/prop-types
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

GlobalCases.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape([{
    TotalConfirmed: PropTypes.number.isRequired,
    Country: PropTypes.string.isRequired,
  }])),
};

export default PerCountryCases;
