import React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import {mapBoxConfig} from './MapConfig.js';

export const MyCustomMap = () => {
  
  const { width, height, latitude, longitude, zoom, token, style } = mapBoxConfig;

  const [viewport, setViewport] = useState({
    width: width,
    height: height,
    latitude: latitude,
    longitude: longitude,
    zoom: zoom,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={token}
      onViewportChange={nextViewport => setViewport(nextViewport) }
      mapStyle={style}
    />
  );
}
