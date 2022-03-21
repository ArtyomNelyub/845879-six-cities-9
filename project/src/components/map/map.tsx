import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { City, Offers } from '../../types/types';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  currentCity: City;
  activeCard: number | undefined;
  offers: Offers;
  isMainScreen?: boolean;
};

const defaultIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const activeIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map(props: MapProps): JSX.Element {
  const {
    currentCity,
    activeCard,
    offers,
    isMainScreen = false,
  } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);

  useEffect(() => {
    if (map !== null) {
      offers.forEach((offer, index) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        marker
          .setIcon(
            offers[index].id === activeCard ? activeIcon : defaultIcon,
          )
          .addTo(map);
      });
    }
  }, [map, currentCity, activeCard, offers]);

  return (
    <section
      className={isMainScreen ? 'cities__map map' : 'property__map map'}
      ref={mapRef}
    />
  );
}

export default Map;
