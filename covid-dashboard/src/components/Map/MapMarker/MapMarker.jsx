import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-map-gl';
import style from './MapMarker.module.scss';

const MapMarker = ({
  select, long, lat, cases,
}) => {
  const [radius, setRadius] = useState(10);

  useEffect(() => {
    setRadius(Math.floor(cases / 100000) < 10 ? 10 : Math.floor(cases / 100000));
    if (radius > 40) {
      setRadius(50);
    }
  }, []);

  return (
    <Marker
      longitude={long}
      latitude={lat}
    >
      <div
        onClick={select}
        className={style.countryMarker}
        style={{
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
  cases: PropTypes.number.isRequired,
};

export default MapMarker;
