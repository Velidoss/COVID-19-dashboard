import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { Popup } from 'react-map-gl';
import { mapBoxToken } from '../../constants/apiEndpoints';
import MapMarker from './MapMarker/MapMarker';
import MapCountryInfo from './MapCountryInfo/MapCountryInfo';

const Map = ({ countries }) => {
  const [selected, toggleSelected] = useState(null);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 49,
    longitude: 32,
    zoom: 3,
  });
  console.log(selected);
  return (
    <ReactMapGL
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...viewport}
      mapboxApiAccessToken={mapBoxToken}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {
        countries.map((country) => (
          <MapMarker
            key={country.countryInfo._id}
            lat={country.countryInfo.lat}
            cases={country.cases}
            long={country.countryInfo.long}
            select={() => toggleSelected(country)}
          />
        ))
      }
      {
        selected ? (
          <Popup
            longitude={selected.countryInfo.long}
            latitude={selected.countryInfo.lat}
            style={{
              zIndex: 20,
            }}
            onClose={() => toggleSelected(null)}
            anchor="top"
          >
            <MapCountryInfo
              country={selected.country}
              recovered={selected.recovered}
              cases={selected.cases}
              deaths={selected.deaths}
            />
          </Popup>
        ) : null
      }
    </ReactMapGL>
  );
};

Map.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    cases: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    countryInfo: PropTypes.shape({
      _id: PropTypes.number.isRequired,
      lat: PropTypes.number.isRequired,
      long: PropTypes.number.isRequired,
    }),
  })).isRequired,
};

export default Map;
