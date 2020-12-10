import React from 'react';
import PropTypes from 'prop-types';
import style from './GlobalLosses.module.scss';

// eslint-disable-next-line react/prop-types
const GlobalLosses = ({ losses, countries, setCountryToObserve }) => (
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
              // eslint-disable-next-line max-len
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
              <div
                className={style.losses__list_item}
                id={country.Slug}
                onClick={() => setCountryToObserve(country.Slug)}
              >
                <span className={style.losses__list_item_name}>{country.Country}</span>
                <span className={style.losses__list_item_number}>
                  {`${country.TotalDeaths} `}
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
    Slug: PropTypes.string.isRequired,
  })).isRequired,
};

export default GlobalLosses;
