import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL from 'react-map-gl';
import MapMarker from './MapMarker/MapMarker';
import style from './Map.module.scss';
import mapConstants from '../../constants/mapConstants';
import contentConstants from '../../constants/contentConstants';
import SelectStatType from '../../common/SelectStatType/SelectStatType';
import MapPopup from './MapPopup/MapPopup';

const Map = ({ countries }) => {
  const { viewPortInitialSettings } = mapConstants;
  const { statTypes } = contentConstants;
  const {
    viewPortWidth,
    viewPortHeight,
    viewPortLatitude,
    viewPortLongitude,
    viewPortZoom,
  } = viewPortInitialSettings;
  const { cases } = statTypes;

  const [selectedCountryForPopup, toggleSelectedCountryForPopup] = useState(null);
  const [statType, toggleStatType] = useState(cases);

  const [viewport, setViewport] = useState({
    width: viewPortWidth,
    height: viewPortHeight,
    latitude: viewPortLatitude,
    longitude: viewPortLongitude,
    zoom: viewPortZoom,
  });

  return (
    <div className={style.map}>
      <div className={style.map__controls}>
        <SelectStatType
          currentStatType={statType}
          toggleStatType={(event) => toggleStatType(event.target.value)}
        />
      </div>
      <div className={style.map__container}>
        <ReactMapGL
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAX_BOX_TOKEN}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
          {
            countries.map((item) => {
              const { _id, lat, long } = item.countryInfo;
              return (
                <MapMarker
                  key={_id}
                  lat={lat}
                  displayInfo={item[statType]}
                  long={long}
                  statType={statType}
                  select={() => toggleSelectedCountryForPopup(item)}
                />
              );
            })
          }
          {
            selectedCountryForPopup ? (
              <MapPopup
                selectedCountryForPopup={selectedCountryForPopup}
                statType={statType}
                toggleSelectedCountryForPopup={() => toggleSelectedCountryForPopup(null)}
              />
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
