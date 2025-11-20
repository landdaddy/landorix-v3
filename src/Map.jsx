import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibGFuZGRhZGR5IiwiYSI6ImNtaTZ6ajRnMDA0MjIyanEzZGRja29qeDUifQ.pJlxJzTZCSuDBfBN8A-ZtQ';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [0, 20],
      zoom: 1.8,
      pitch: 45,
      bearing: 0,
      projection: 'globe'
    });

    map.current.on('style.load', () => {
      map.current.setFog({
        color: 'rgb(0,0,0)',
        'high-color': 'rgb(0,0,0)',
        'space-color': 'rgb(0,0,0)',
        'horizon-blend': 0.05
      });

      setTimeout(() => {
        map.current.flyTo({
          center: [-111.3, 32.8],
          zoom: 11,
          pitch: 60,
          duration: 8000,
          essential: true
        });
      }, 1500);
    });
  }, []);

  return <div ref={mapContainer} style={{ width: '100vw', height: '100vh' }} />;
}
