import { cities as mockCities } from '../../mocks/mocks';
import { useAppDispatch, useAppSelector } from '../../hooks/';
import { selectCity } from '../../store/action';

function CityList(): JSX.Element {
  const { currentCity } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {mockCities.map((city) => (
        <li
          className="locations__item"
          key={`${city.name}`}
          onClick={() => {
            dispatch(selectCity({ selectedCity: city }));
          }}
        >
          <a
            className={
              currentCity === city
                ? 'locations__item-link tabs__item tabs__item--active'
                : 'locations__item-link tabs__item'
            }
            href={`#${currentCity.name}`}
          >
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default CityList;
