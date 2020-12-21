import React from 'react';
import PropTypes from 'prop-types';
import style from './PerCountryCases.module.scss';
import Country from './Country';

const PerCountryCases = ({
  countries, setCountryToObserve, unsetCountryToObserve, selectedCountryId, contentConfig,
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
                contentConfig={contentConfig}
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
  contentConfig: PropTypes.shape({
    timePeriod: PropTypes.string.isRequired,
    quantities: PropTypes.string.isRequired,
  }).isRequired,
};

export default PerCountryCases;
