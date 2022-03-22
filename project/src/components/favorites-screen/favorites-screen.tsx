import { useAppSelector } from '../../hooks';
import CardScreen from './card-screen';
import Footer from '../footer/footer';
import SVGComponent from '../svg-container/svg-container';
import Header from '../header/header';

function FavoritesScreen(): JSX.Element {
  const {offers} = useAppSelector((state)=>state);
  return (
    <>
      <SVGComponent />
      <div className="page">
        <Header />
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#todo">
                        <span>Amsterdam</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {offers.slice(0, 3).map((offer) => (
                      <CardScreen key={offer.id} offer={offer} />
                    ))}
                  </div>
                </li>

                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#todo">
                        <span>Cologne</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {offers.slice(0, 2).map((offer) => (
                      <CardScreen key={offer.id} offer={offer} />
                    ))}
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
export default FavoritesScreen;
