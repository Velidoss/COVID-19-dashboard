import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './PerCountryCases.module.scss';

// eslint-disable-next-line no-unused-vars
const Country = ({ country, setCountryToObserve, unsetCountryToObserve }) => {
  const [isSelected, setSelected] = useState(false);

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={style.cases__list_item}
      id={country.Slug}
      selected={isSelected}
      onClick={() => {
        if (isSelected) {
          setSelected(false);
          unsetCountryToObserve();
        } else {
          setSelected(true);
          setCountryToObserve(country.Slug);
        }
      }}
    >
      <span className={style.cases__list_item_injured}>{country.TotalConfirmed}</span>
      <span className={style.cases__list_item_country}>{country.Country}</span>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.shape({
    TotalConfirmed: PropTypes.number.isRequired,
    Country: PropTypes.string.isRequired,
    Slug: PropTypes.string.isRequired,
  }).isRequired,
  setCountryToObserve: PropTypes.func.isRequired,
  unsetCountryToObserve: PropTypes.func.isRequired,
};

export default Country;
