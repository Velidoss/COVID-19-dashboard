import React from 'react';
import PropTypes from 'prop-types';
import style from './PerCountryCases.module.scss';

// eslint-disable-next-line react/prop-types
const PerCountryCases = ({ countries, setCountryToObserve }) => (
  <div className={style.cases}>
    <p className={style.cases__title}>Cases by Country / region/ sovereignty</p>
    <div className={style.cases__list}>
      {
        countries.length > 0
          ? countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)
            .map((country) => (
              // eslint-disable-next-line max-len
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
              <div
                className={style.cases__list_item}
                id={country.Slug}
                onClick={() => setCountryToObserve(country.Slug)}
              >
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
    Slug: PropTypes.string.isRequired,
  })).isRequired,
};

export default PerCountryCases;
