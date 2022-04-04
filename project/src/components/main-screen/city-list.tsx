import { useAppDispatch, useAppSelector } from '../../hooks/';
import { selectCity } from '../../store/app-process/app-process';
import { CITIES } from '../../const';
import { Link } from 'react-router-dom';
import { memo } from 'react';

function CityList(): JSX.Element {
  const appState = useAppSelector((state) => state.APP);

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
              appState.currentCity.name === city.name
                ? 'locations__item-link tabs__item tabs__item--active'
                : 'locations__item-link tabs__item'
            }
            to={`#${appState.currentCity.name}`}
          >
            <span>{city.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default memo(CityList);
