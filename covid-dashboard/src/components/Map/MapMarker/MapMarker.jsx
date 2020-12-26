import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-map-gl';
import style from './MapMarker.module.scss';

const MapMarker = ({
  select, long, lat, displayInfo, statType,
}) => {
  const [radius, setRadius] = useState(10);
  const [markerColor, changeMarkerColor] = useState('rgba(142, 63, 86, 0.8)');

  useEffect(() => {
    const calculatedRadius = Math.floor(displayInfo / 100000);
    if (calculatedRadius <= 10) {
      setRadius(10);
    } else if (calculatedRadius > 50) {
      setRadius(50);
    } else {
      setRadius(calculatedRadius);
    }
  }, []);

  useEffect(() => {
    switch (statType) {
      case 'deaths': {
        changeMarkerColor('rgba(33,26,26, 0.4)');
        break;
      }
      case 'recovered': {
        changeMarkerColor('rgba(14, 94, 42, 0.8)');
        break;
      }
      default: {
        changeMarkerColor('rgba(142, 63, 86, 0.8)');
        break;
      }
    }
  }, [statType]);

  return (
    <Marker
      longitude={long}
      latitude={lat}
    >
      <div
        onMouseOver={select}
        className={style.countryMarker}
        style={{
          backgroundColor: `${markerColor}`,
          width: `${radius}px`,
          height: `${radius}px`,
        }}
      />
    </Marker>
  );
};

MapMarker.propTypes = {
  select: PropTypes.func.isRequired,
  lat: PropTypes.number.isRequired,
  long: PropTypes.number.isRequired,
  displayInfo: PropTypes.number.isRequired,
  statType: PropTypes.string.isRequired,
};

export default MapMarker;
