import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import style from './Map.module.scss';
import { mapBoxToken } from '../../constants/apiEndpoints';

const Map = () => {
  mapboxgl.accessToken = mapBoxToken;

  const mapRef = useRef();

  useEffect(() => {
    console.log(mapRef);
    // eslint-disable-next-line no-unused-vars
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: ['32', '49'],
      zoom: '2.5',
    });
  });

  return (
    <div ref={mapRef} className={style.map}>
      This have to be a map!
    </div>
  );
};

export default Map;
