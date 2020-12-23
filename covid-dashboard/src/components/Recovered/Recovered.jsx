import React from 'react';
import PropTypes from 'prop-types';
import style from './Recovered.module.scss';
import CountryWithRecovered from './CountryWithRecovered';

const Recovered = ({
  recovered,
  countries,
  countryName,
  setCountryToObserve,
  unsetCountryToObserve,
  selectedCountryId,
  contentConfig,
}) => (
  <div className={style.recovered}>
    <div className={style.recovered__title}>
      <span className={style.recovered__title_top}>{countryName ? `Recovered in ${countryName}` : 'Global recovered:'}</span>
      <span className={style.recovered__title_bot}>{recovered}</span>
    </div>
    <div className={style.recovered__list}>
      {
        countries
          ? countries.sort((a, b) => b.recovered - a.recovered)
            .map((country) => (
              <CountryWithRecovered
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

Recovered.propTypes = {
  recovered: PropTypes.number.isRequired,
  countryName: PropTypes.string.isRequired,
  countries: PropTypes.arrayOf(PropTypes.shape({
    deaths: PropTypes.number.isRequired,
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

export default Recovered;
