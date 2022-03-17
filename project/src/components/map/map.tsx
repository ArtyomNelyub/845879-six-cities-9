import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { City, OffersLocation, Offers } from '../../types/types';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  currentCity: City;
  offersLocation: OffersLocation;
  filteredOffers: Offers;
  activeCard: number;
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
    activeCard,
    filteredOffers,
    currentCity,
    offersLocation,
    isMainScreen = false,
  } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity, offersLocation);

  useEffect(() => {
    if (map !== null) {
      offersLocation.forEach((offerLocation, index) => {
        const marker = new Marker({
          lat: offerLocation.latitude,
          lng: offerLocation.longitude,
        });
        marker
          .setIcon(
            filteredOffers[index].id === activeCard ? activeIcon : defaultIcon,
          )
          .addTo(map);
      });
    }
  }, [map, offersLocation, currentCity, activeCard, filteredOffers]);

  return (
    <section
      className={isMainScreen ? 'cities__map map' : 'property__map map'}
      ref={mapRef}
    />
  );
}

export default Map;
