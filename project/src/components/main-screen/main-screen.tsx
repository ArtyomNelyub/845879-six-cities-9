import OfferCardList from '../offer-card/offer-card-list';
import { offers as mockOffers } from '../../mocks/mocks';
import SVGContainer from '../svg-container/svg-container';
import Header from '../header/header';
import Map from '../map/map';
import CityList from './city-list';
import { useAppDispatch, useAppSelector } from '../../hooks/';
import { loadOffers } from '../../store/action';
import { OffersLocation, Offers } from '../../types/types';
import MainEmptyScreen from './main-empty-screen';
import { useState } from 'react';

function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(loadOffers({ offers: mockOffers }));

  const { offers, currentCity } = useAppSelector((state) => state);
  const filteredOffers: Offers = offers.filter(
    (offer) => offer.city.name === currentCity.name,
  );

  const offersLocation: OffersLocation = filteredOffers.map(
    (offer) => offer.location,
  );

  const [, setActiveCard] = useState<number | undefined>(1);
  const handleCardHover = (id:number | undefined) : void => {
    setActiveCard(id);
  };

  return (
    <>
      <SVGContainer />
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CityList />
            </section>
          </div>
          {offersLocation.length === 0 ? (
            <MainEmptyScreen currentCity={currentCity.name} />
          ) : (
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">
                    {filteredOffers.length} places to stay in {currentCity.name}
                  </b>
                  <form className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by</span>
                    <span className="places__sorting-type" tabIndex={0}>
                      Popular
                      <svg
                        className="places__sorting-arrow"
                        width="7"
                        height="4"
                      >
                        <use xlinkHref="#icon-arrow-select"></use>
                      </svg>
                    </span>
                    <ul className="places__options places__options--custom places__options--opened">
                      <li
                        className="places__option places__option--active"
                        tabIndex={0}
                      >
                        Popular
                      </li>
                      <li className="places__option" tabIndex={0}>
                        Price: low to high
                      </li>
                      <li className="places__option" tabIndex={0}>
                        Price: high to low
                      </li>
                      <li className="places__option" tabIndex={0}>
                        Top rated first
                      </li>
                    </ul>
                  </form>
                  <div className="cities__places-list places__list tabs__content">
                    <OfferCardList
                      offers={filteredOffers}
                      handleCardHover={handleCardHover}
                      isMainScreen
                    />
                  </div>
                </section>
                <div className="cities__right-section">
                  <Map
                    currentCity={currentCity}
                    offersLocation={offersLocation}
                    key={currentCity.id?.toString()}
                    isMainScreen
                  />
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export default MainScreen;
