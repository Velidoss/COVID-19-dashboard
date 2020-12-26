import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { Popup } from 'react-map-gl';
import MapMarker from './MapMarker/MapMarker';
import MapCountryInfo from './MapCountryInfo/MapCountryInfo';
import style from './Map.module.scss';

const Map = ({ countries }) => {
  const [selected, toggleSelected] = useState(null);
  const [statType, toggleStatType] = useState('cases');

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '95%',
    latitude: 49,
    longitude: 32,
    zoom: 3,
  });
  return (
    <div className={style.map}>
      <div className={style.map__controls}>
        Stats type:
        <select
          value={statType}
          onChange={(event) => toggleStatType(event.target.value)}
          className={style.diagramContainer__controls__item_select}
        >
          <option value="cases">cases</option>
          <option value="deaths">deaths</option>
          <option value="recovered">recovered</option>
        </select>
      </div>
      <div className={style.map__container}>
        <ReactMapGL
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAX_BOX_TOKEN}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
          {
            countries.map((country) => (
              <MapMarker
                key={country.countryInfo._id}
                lat={country.countryInfo.lat}
                displayInfo={country[statType]}
                long={country.countryInfo.long}
                statType={statType}
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
                  statType={statType}
                  displayInfo={selected[statType]}
                />
              </Popup>
            ) : null
          }
        </ReactMapGL>
      </div>
    </div>

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
