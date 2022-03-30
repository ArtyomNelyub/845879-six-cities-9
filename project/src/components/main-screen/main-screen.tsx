import MainEmptyScreen from './main-empty-screen';
import OfferCardList from '../offer-card/offer-card-list';
import SortOptions from './sort-options';
import SVGContainer from '../svg-container/svg-container';
import Header from '../header/header';
import Map from '../map/map';
import CityList from './city-list';
import { useAppSelector } from '../../hooks/';
import { Offers } from '../../types/types';
import { useEffect, useState } from 'react';
import { AuthorizationStatus, SortMethods } from '../../const';
import { store } from '../../store';
import { fetchOffersAction, checkAuthAction } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';


function MainScreen(): JSX.Element {
  useEffect(()=> {
    store.dispatch(fetchOffersAction());
    store.dispatch(checkAuthAction());
    // eslint-disable-next-line no-console
    console.log(localStorage.getItem('six-cities-token'));
  }, []);

  const {isDataLoaded, authorizationStatus, offers, currentCity } = useAppSelector((state)=> state);
  const [sortBy, setSortBy] = useState<string>(SortMethods.POPULAR);
  const [activeCard, setActiveCard] = useState<number | undefined>(undefined);

  if ((authorizationStatus === AuthorizationStatus.UNKNOWN) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const handleSortOptions = (SortOption: string): void => {
    setSortBy(SortOption);
  };

  const changeOrderOffers = function (
    sortMethod: string,
    currentFilteredOffers: Offers,
  ): Offers {
    switch (sortMethod) {
      case SortMethods.PRICE_LOW_TO_HIGH:
        return currentFilteredOffers.sort((a, b) => a.price - b.price);
      case SortMethods.PRICE_HIGH_TO_LOW:
        return currentFilteredOffers.sort((a, b) => b.price - a.price);
      case SortMethods.TOP_RATED_FIRST:
        return currentFilteredOffers.sort((a, b) => b.rating - a.rating);
      case SortMethods.POPULAR:
      default:
        return currentFilteredOffers;
    }
  };

  const handleCardHover = (id: number | undefined): void => {
    setActiveCard(id);
  };

  const filteredOffers: Offers = offers.filter(
    (offer) => offer.city.name === currentCity.name,
  );
  const sortedFilteredOffers = changeOrderOffers(sortBy, filteredOffers);

  return (
    <>
      <SVGContainer />
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CityList key={currentCity.name}/>
            </section>
          </div>
          {filteredOffers.length === 0 ? (
            <MainEmptyScreen currentCity={currentCity.name} />
          ) : (
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">
                    {filteredOffers.length} places to stay in {currentCity.name}
                  </b>
                  <SortOptions handleSortOptions={handleSortOptions} />
                  <div className="cities__places-list places__list tabs__content">
                    <OfferCardList
                      offers={sortedFilteredOffers}
                      handleCardHover={handleCardHover}
                      isMainScreen
                    />
                  </div>
                </section>
                <div className="cities__right-section">
                  <Map
                    currentCity={currentCity}
                    activeCard={activeCard}
                    offers={sortedFilteredOffers}
                    key={currentCity.name}
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
