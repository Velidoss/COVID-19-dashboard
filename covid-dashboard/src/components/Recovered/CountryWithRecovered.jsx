import React from 'react';
import PropTypes from 'prop-types';
import style from './Recovered.module.scss';
import useSelectedCountry from '../../customHooks/useSelectedCountry';
import contentConstants from '../../constants/contentConstants';

const CountryWithRecovered = ({
  country, setCountryToObserve, unsetCountryToObserve, selectedCountryId, contentConfig,
}) => {
  const isSelected = useSelectedCountry(country.countryInfo._id, selectedCountryId);
  const { quantities } = contentConfig;
  const { whole } = contentConstants.quantities;
  return (
    <div
      className={isSelected ? style.recovered__list_item_selected : style.recovered__list_item}
      id={country.countryInfo._id}
      selected={isSelected}
      onClick={() => {
        if (isSelected) {
          unsetCountryToObserve();
        } else {
          setCountryToObserve(country.countryInfo._id);
        }
      }}
    >
      <span className={style.recovered__list_item_recovered}>
        {`${quantities === whole ? country.recovered : country.recoveredPerOneMillion} `}
      </span>
      <span className={style.recovered__list_item_country}>
        <img className={style.recovered__list_item_country_flag} src={country.countryInfo.flag} alt="flag" />
        {country.country}
      </span>
    </div>
  );
};

CountryWithRecovered.propTypes = {
  country: PropTypes.shape({
    recovered: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    recoveredPerOneMillion: PropTypes.number.isRequired,
    countryInfo: PropTypes.shape({
      _id: PropTypes.number.isRequired,
      flag: PropTypes.string.isRequired,
    }),
  }).isRequired,
  setCountryToObserve: PropTypes.func.isRequired,
  unsetCountryToObserve: PropTypes.func.isRequired,
  selectedCountryId: PropTypes.number.isRequired,
  contentConfig: PropTypes.shape({
    quantities: PropTypes.string.isRequired,
  }).isRequired,
};

export default CountryWithRecovered;
