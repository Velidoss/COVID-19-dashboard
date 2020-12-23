import React, { useState } from 'react';
import ReactMapboxGl, { Popup } from 'react-mapbox-gl';
import PropTypes from 'prop-types';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapMarker from './MapMarker/MapMarker';
import MapCountryInfo from './MapCountryInfo/MapCountryInfo';
import { mapBoxToken } from '../../constants/apiEndpoints';

const Map = ({ countries }) => {
  const MapComponent = ReactMapboxGl({
    accessToken: mapBoxToken,
  });
  const [selected, toggleSelected] = useState(null);

  return (
    <MapComponent
      // eslint-disable-next-line react/style-prop-object
      style="mapbox://styles/mapbox/light-v10"
      containerStyle={{
        width: '100%',
        height: '100%',
        borderRadius: '20px',
        position: 'relative',
      }}
      сenter={[32, 49]}
      zoom={[3]}
    >
      {
        countries.map((country) => (
          <MapMarker
            select={() => toggleSelected(country)}
            key={country.countryInfo._id}
            long={country.countryInfo.long}
            lat={country.countryInfo.lat}
            cases={country.cases}
          />
        ))
      }
      {
        selected ? (
          <Popup
            coordinates={[selected.countryInfo.long, selected.countryInfo.lat]}
            style={{
              zIndex: 20,
            }}
          >
            <MapCountryInfo
              close={() => toggleSelected(null)}
              country={selected.country}
              recovered={selected.recovered}
              cases={selected.cases}
              deaths={selected.deaths}
            />
          </Popup>
        ) : null
      }
    </MapComponent>
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
