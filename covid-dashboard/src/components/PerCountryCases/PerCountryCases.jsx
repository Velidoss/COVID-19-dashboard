import React from 'react';
import PropTypes from 'prop-types';
import style from './PerCountryCases.module.scss';
import Country from './Country';

// eslint-disable-next-line no-unused-vars
const PerCountryCases = ({ countries, setCountryToObserve, unsetCountryToObserve }) => (
  <div className={style.cases}>
    <p className={style.cases__title}>Cases by Country / region/ sovereignty</p>
    <div className={style.cases__list}>
      {
        countries.length > 0
          ? countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)
            .map((country) => (
              <Country
                country={country}
                setCountryToObserve={setCountryToObserve}
                unsetCountryToObserve={unsetCountryToObserve}
                key={country.Slug}
              />
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
  setCountryToObserve: PropTypes.func.isRequired,
  unsetCountryToObserve: PropTypes.func.isRequired,
};

export default PerCountryCases;
