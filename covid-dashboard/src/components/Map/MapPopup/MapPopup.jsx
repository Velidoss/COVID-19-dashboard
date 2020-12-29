import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'react-map-gl';
import MapCountryInfo from '../MapCountryInfo/MapCountryInfo';
import mapConstants from '../../../constants/mapConstants';

const MapPopup = ({ selectedCountryForPopup, toggleSelectedCountryForPopup, statType }) => {
  const { country, countryInfo } = selectedCountryForPopup;
  const { long, lat, flag } = countryInfo;
  const { anchor } = mapConstants.mapPopupSettings;
  return (
    <Popup
      longitude={long}
      latitude={lat}
      onClose={toggleSelectedCountryForPopup}
      anchor={anchor}
    >
      <MapCountryInfo
        country={country}
        statType={statType}
        displayInfo={selectedCountryForPopup[statType]}
        countryFlag={flag}
      />
    </Popup>
  );
};

MapPopup.propTypes = {
  selectedCountryForPopup: PropTypes.shape({
    country: PropTypes.string.isRequired,
    countryInfo: PropTypes.shape({
      long: PropTypes.number.isRequired,
      lat: PropTypes.number.isRequired,
      flag: PropTypes.string.isRequired,
    }),
  }).isRequired,
  toggleSelectedCountryForPopup: PropTypes.func.isRequired,
  statType: PropTypes.string.isRequired,
};

export default MapPopup;
