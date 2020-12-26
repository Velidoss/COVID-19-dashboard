import React from 'react';
import PropTypes from 'prop-types';
import style from './GlobalLosses.module.scss';
import CountryWithLosses from './CountryWithLosses';

const GlobalLosses = ({
  losses,
  countries,
  countryName,
  setCountryToObserve,
  unsetCountryToObserve,
  selectedCountryId,
  contentConfig,
}) => (
  <div className={style.losses}>
    <div className={style.losses__stat}>
      <span className={style.losses__stat_name}>{countryName ? `Deaths in ${countryName}` : 'Global deaths:'}</span>
      <span className={style.losses__stat_number}>{losses}</span>
    </div>
    <div className={style.losses__list}>
      {
        countries
          ? countries.sort((a, b) => b.deaths - a.deaths)
            .map((country) => (
              <CountryWithLosses
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

GlobalLosses.propTypes = {
  losses: PropTypes.number.isRequired,
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
    quantities: PropTypes.string.isRequired,
  }).isRequired,
};

export default GlobalLosses;
