import React from 'react';
import PropTypes from 'prop-types';
import style from './PerCountryCases.module.scss';
import useSelectedCountry from '../../customHooks/useSelectedCountry';
import contentConstants from '../../constants/contentConstants';

const Country = ({
  country, setCountryToObserve, unsetCountryToObserve, selectedCountryId, contentConfig,
}) => {
  const isSelected = useSelectedCountry(country.countryInfo._id, selectedCountryId);
  const { quantities } = contentConfig;
  const { whole } = contentConstants.quantities;

  return (
    <div
      className={isSelected ? style.cases__list_item_selected : style.cases__list_item}
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
      <span className={style.cases__list_item_injured}>
        {quantities === whole ? country.cases : country.casesPerOneMillion}
      </span>
      <span className={style.cases__list_item_country}>{country.country}</span>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.shape({
    cases: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    casesPerOneMillion: PropTypes.number.isRequired,
    countryInfo: PropTypes.shape({
      _id: PropTypes.number.isRequired,
    }),
  }).isRequired,
  setCountryToObserve: PropTypes.func.isRequired,
  unsetCountryToObserve: PropTypes.func.isRequired,
  selectedCountryId: PropTypes.number.isRequired,
  contentConfig: PropTypes.shape({
    quantities: PropTypes.string.isRequired,
  }).isRequired,
};

export default Country;
