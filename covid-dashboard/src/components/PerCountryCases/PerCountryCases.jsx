import React from 'react';
import PropTypes from 'prop-types';
import style from './PerCountryCases.module.scss';
import Country from './Country';

// eslint-disable-next-line no-unused-vars
const PerCountryCases = ({
  countries, setCountryToObserve, unsetCountryToObserve, selectedCountryId,
}) => (
  <div className={style.cases}>
    <p className={style.cases__title}>Cases by Country / region/ sovereignty</p>
    <div className={style.cases__list}>
      {
        countries.length > 0
          ? countries.sort((a, b) => b.cases - a.cases)
            .map((country) => (
              <Country
                country={country}
                setCountryToObserve={setCountryToObserve}
                unsetCountryToObserve={unsetCountryToObserve}
                selectedCountryId={selectedCountryId}
                key={country.countryInfo._id}
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
    cases: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    countryInfo: PropTypes.shape({
      _id: PropTypes.number.isRequired,
    }),
  })).isRequired,
  setCountryToObserve: PropTypes.func.isRequired,
  unsetCountryToObserve: PropTypes.func.isRequired,
  selectedCountryId: PropTypes.number.isRequired,
};

export default PerCountryCases;
