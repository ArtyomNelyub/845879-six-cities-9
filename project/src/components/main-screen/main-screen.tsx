import OfferCardList from '../offer-card/offer-card-list';
import SVGContainer from '../svg-container/svg-container';
import Header from '../header/header';
import Map from '../map/map';
import CityList from './city-list';
import { useAppSelector } from '../../hooks/';
import { OffersLocation, Offers } from '../../types/types';
import MainEmptyScreen from './main-empty-screen';
import { useState } from 'react';
import SortOptions from './sort-options';


function MainScreen(): JSX.Element {
  const [sortBy, setSortBy] = useState<string>('Popular');
  const handleSortOptions = (SortOption: string): string => {
    setSortBy(SortOption);
    return SortOption;
  };

  const changeOrderOffers = function (
    sortMethod: string,
    currentFilteredOffers: Offers,
  ): Offers {
    switch (sortMethod) {
      case 'Price: low to high':
        return currentFilteredOffers.sort((a, b) => a.price - b.price);
      case 'Price: high to low':
        return currentFilteredOffers.sort((a, b) => b.price - a.price);
      case 'Top rated first':
        return currentFilteredOffers.sort((a, b) => b.rating - a.rating);
      case 'Popular':
      default:
        return currentFilteredOffers;
    }
  };

  const [activeCard, setActiveCard] = useState<number | undefined>(undefined);
  const handleCardHover = (id: number | undefined): void => {
    setActiveCard(id);
  };

  const { offers, currentCity } = useAppSelector((state) => state);
  const filteredOffers: Offers = offers.filter(
    (offer) => offer.city.name === currentCity.name,
  );
  const sortedFilteredOffers = changeOrderOffers(sortBy, filteredOffers);
  const sortedFilteredOffersLocation: OffersLocation = sortedFilteredOffers.map(
    (offer) => offer.location,
  );

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
                    filteredOffers={sortedFilteredOffers}
                    filteredOffersLocation={sortedFilteredOffersLocation}
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
