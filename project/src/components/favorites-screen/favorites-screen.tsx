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
  const cityState = useAppSelector((state) => state.CITY);

  const [isCardRemoved, setIsCardRemoved] = useState(false);

  const handleIsCardRemoved = function (isRemoved: boolean): void {
    setIsCardRemoved(isRemoved);
  };

  useEffect(() => {
    setIsCardRemoved(false);
    store.dispatch(fetchLoadFavorites());
  }, [isCardRemoved]);

  if (!cityState.isFavoritesLoaded) {
    return <LoadingScreen />;
  }

  return (
    <>
      <SVGComponent />
      <div
        className={
          cityState.favoriteOffers.length === 0
            ? 'page page--favorites-empty'
            : 'page'
        }
      >
        <Header />
        {cityState.favoriteOffers.length === 0 ? (
          <Empty />
        ) : (
          <CityCardList
            favoritesOffers={cityState.favoriteOffers}
            handleIsCardRemoved={handleIsCardRemoved}
          />
        )}
        <Footer />
      </div>
    </>
  );
}
export default FavoritesScreen;

