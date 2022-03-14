import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { City, OffersLocation } from '../../types/types';
import { URL_MARKER_DEFAULT } from '../../const';
import 'leaflet/dist/leaflet.css';

const defaultIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

type MapProps = {
  currentCity: City;
  offersLocation: OffersLocation;
  isMainScreen?: boolean;
};

function Map(props: MapProps): JSX.Element {
  const { currentCity, offersLocation, isMainScreen = false } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);

  useEffect(() => {
    if (map) {
      offersLocation.forEach((offerLocation) => {
        const marker = new Marker({
          lat: offerLocation.latitude,
          lng: offerLocation.longitude,
        });

        marker.setIcon(defaultIcon).addTo(map);
      });
    }
  }, [map, offersLocation]);

  return (
    <section
      className={isMainScreen ? 'cities__map map' : 'property__map map'}
      ref={mapRef}
    />
  );
}

export default Map;
