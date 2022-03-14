import { CITIES } from '../../mocks/mocks';
import { useAppDispatch } from '../../hooks/';
import { selectCity } from '../../store/action';
import { City } from '../../types/types';
import { useState } from 'react';

function CityList(): JSX.Element {
  const [activeCity, setActiveCity] = useState<boolean[]>([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);

  const dispatch = useAppDispatch();

  const changeCity = function (city: City) {
    dispatch(selectCity({ selectedCity: city }));
  };

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city, indexCity) => (
        <li
          className="locations__item" key={`${city.name}`}
          onClick={() => {
            setActiveCity((prev) =>
              prev.map((item, indexIsActive) => indexCity === indexIsActive),
            );
          }}
        >
          <a
            className={
              activeCity[indexCity]
                ? 'locations__item-link tabs__item tabs__item--active'
                : 'locations__item-link tabs__item'
            }
            href="#todo"
          >
            <span onClick={() => changeCity(city)}>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default CityList;
