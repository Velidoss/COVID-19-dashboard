import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-mapbox-gl';

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
    <div onClick={select}>
      <Marker
        coordinates={[long, lat]}
        style={{
          width: `${radius}px`,
          height: `${radius}px`,
          backgroundColor: '#8e3f56',
          borderRadius: '50%',
          opacity: '0.8',
        }}
      />
    </div>

  );
};

MapMarker.propTypes = {
  select: PropTypes.func.isRequired,
  lat: PropTypes.number.isRequired,
  long: PropTypes.number.isRequired,
  cases: PropTypes.number.isRequired,
};

export default MapMarker;
