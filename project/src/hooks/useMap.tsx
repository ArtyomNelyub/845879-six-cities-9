import { useEffect, useState, MutableRefObject } from 'react';
import { Map, TileLayer } from 'leaflet';
import { City } from '../types/types';
import { useParams } from 'react-router-dom';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  currentCity: City,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const {id} = useParams();

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: currentCity.location.latitude,
          lng: currentCity.location.longitude,
        },
        zoom: currentCity.location.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );

      instance.addLayer(layer);

      setMap(instance);
    }
  }, [mapRef, map, currentCity, id]);

  return map;
}

export default useMap;
