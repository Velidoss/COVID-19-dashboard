import React from 'react';
import PropTypes from 'prop-types';
import style from './GlobalLosses.module.scss';

const GlobalLosses = ({ losses, countries }) => (
  <div className={style.losses}>
    <div className={style.losses__stat}>
      <span className={style.losses__stat_name}>Global deaths:</span>
      <span className={style.losses__stat_number}>{losses}</span>
    </div>
    <div className={style.losses__list}>
      {
        countries
          ? countries.sort((a, b) => b.TotalDeaths - a.TotalDeaths)
            .map((country) => (
              <div className={style.losses__list_item}>
                <span className={style.losses__list_item_name}>{country.Country}</span>
                <span className={style.losses__list_item_number}>
                  {country.TotalDeaths}
                  deaths
                </span>
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

GlobalLosses.propTypes = {
  losses: PropTypes.number.isRequired,
  countries: PropTypes.arrayOf(PropTypes.shape({
    TotalConfirmed: PropTypes.number.isRequired,
    Country: PropTypes.string.isRequired,
  })).isRequired,
};

export default GlobalLosses;
