import { useAppSelector } from '../../hooks';
import Footer from '../footer/footer';
import SVGComponent from '../svg-container/svg-container';
import Header from '../header/header';
import CityCardList from './city-card-list';
import Empty from './empty';
import { useEffect, useState } from 'react';
import { store } from '../../store';
import { fetchLoadFavorites } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';

function FavoritesScreen(): JSX.Element {
  const offersState = useAppSelector((state) => state.OFFERS);

  const [isCardRemoved, setIsCardRemoved] = useState(false);

  const handleIsCardRemoved = function (isRemoved: boolean): void {
    setIsCardRemoved(isRemoved);
  };

  useEffect(() => {
    setIsCardRemoved(false);
    store.dispatch(fetchLoadFavorites());
  }, [isCardRemoved]);

  if (!offersState.isFavoritesLoaded) {
    return <LoadingScreen />;
  }

  return (
    <>
      <SVGComponent />
      <div
        className={
          offersState.favoriteOffers.length === 0
            ? 'page page--favorites-empty'
            : 'page'
        }
      >
        <Header />
        {offersState.favoriteOffers.length === 0 ? (
          <Empty />
        ) : (
          <CityCardList
            favoritesOffers={offersState.favoriteOffers}
            handleIsCardRemoved={handleIsCardRemoved}
          />
        )}
        <Footer />
      </div>
    </>
  );
}
export default FavoritesScreen;

