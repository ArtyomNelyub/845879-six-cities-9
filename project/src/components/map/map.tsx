import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { CityLocation, RentPoints } from '../../types/offers-type';
import { URL_MARKER_DEFAULT } from '../../const';
import 'leaflet/dist/leaflet.css';

const defaultIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

type MapProps = {
  cityLocation: CityLocation;
  rentPoints: RentPoints;
  isMainScreen: boolean;
};

function Map(props: MapProps): JSX.Element {
  const { cityLocation, rentPoints, isMainScreen } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (map) {
      rentPoints.forEach((rentPoint) => {
        const marker = new Marker({
          lat: rentPoint.latitude,
          lng: rentPoint.longitude,
        });

        marker.setIcon(defaultIcon).addTo(map);
      });
    }
  }, [map, rentPoints]);

  return (
    <section
      className={isMainScreen ? 'cities__map map' : 'property__map map'}
      ref={mapRef}
    />
  );
}

export default Map;
