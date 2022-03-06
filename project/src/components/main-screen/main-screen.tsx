import OfferCardList from '../offer-card/offer-card-list';
import { offers, rentPoints, cityLocation } from '../../mocks/mocks';
import SVGContainer from '../svg-container/svg-container';
import Header from '../header/header';
import Map from '../map/map';

type MainScreenProps = {
  countOffers: number;
};

function MainScreen(mainScreenProps: MainScreenProps): JSX.Element {
  return (
    <>
      <SVGContainer />
      <div className="page page--gray page--main">
        <Header />

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <ul className="locations__list tabs__list">
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="#todo">
                    <span>Paris</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="#todo">
                    <span>Cologne</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="#todo">
                    <span>Brussels</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a
                    href="#todo"
                    className="locations__item-link tabs__item tabs__item--active"
                  >
                    <span>Amsterdam</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="#todo">
                    <span>Hamburg</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="#todo">
                    <span>Dusseldorf</span>
                  </a>
                </li>
              </ul>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {mainScreenProps.countOffers} places to stay in Amsterdam
                </b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
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
                    offers={offers}
                    classNameForArticle="cities__place-card"
                    classNameForDiv="cities"
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <Map
                  cityLocation={cityLocation}
                  rentPoints={rentPoints}
                  classes="cities__map map"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default MainScreen;
