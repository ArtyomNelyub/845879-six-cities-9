import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { selectCity } from '../../store/app-process/app-process';
import { Offers } from '../../types/types';
import { CITIES } from '../../const';
import Card from './card';

type CityCardListProps = {
  favoritesOffers : Offers;
  handleIsCardRemoved: (isRemoved: boolean) => void;
}

function CityCardList(props : CityCardListProps): JSX.Element {
  const {favoritesOffers, handleIsCardRemoved}  = props;
  const uniqueCities = [...new Set(favoritesOffers.map((offer) => offer.city.name))];
  const dispatch = useAppDispatch();

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {uniqueCities.map((cityName) => (
              <li
                className="favorites__locations-items"
                key={cityName}
                onClick={() => {
                  dispatch(selectCity(CITIES.find((city)=>city.name === cityName)));
                }}
              >
                <div className="favorites__locations locations locations--current">
                  <div
                    className="locations__item"
                  >
                    <Link
                      className="locations__item-link"
                      to={`${AppRoute.Main}`}
                    >
                      <span>{cityName}</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  {favoritesOffers.filter((offer) => offer.city.name === cityName).map((offer) => (
                    <Card key={offer.id} offer={offer} handleIsCardRemoved={handleIsCardRemoved}/>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default CityCardList;
