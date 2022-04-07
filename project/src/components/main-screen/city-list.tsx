import { useAppDispatch, useAppSelector } from '../../hooks/';
import { selectCity } from '../../store/app-process/app-process';
import { AppRoute, CITIES } from '../../const';
import { Link } from 'react-router-dom';
import { getCurrentCity } from '../../store/app-process/selectors';

function CityList(): JSX.Element {
  const currentCity = useAppSelector(getCurrentCity);

  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <li
          className="locations__item"
          key={`${city.name}`}
          onClick={() => {
            dispatch(selectCity(city));
          }}
        >
          <Link
            className={
              currentCity.name === city.name
                ? 'locations__item-link tabs__item tabs__item--active'
                : 'locations__item-link tabs__item'
            }
            to = {`${AppRoute.Main}#${city.name}`}
          >
            <span>{city.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CityList;

