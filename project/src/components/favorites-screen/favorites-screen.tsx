import { offers } from '../../mocks/offers';
import Card from './card';
import Footer from '../footer/footer';
import SVGComponent from '../SVG-component/SVG-component';
import Header from '../header/header';

function FavoritesScreen(): JSX.Element {
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
                    {offers.map((card) => (
                      <Card key={card.id} card={card} />
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
                    {offers.map((itemL) => (
                      <Card key={itemL.id} card={itemL} />
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
