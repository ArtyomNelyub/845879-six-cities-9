import Footer from '../footer/footer';
import SVGComponent from '../svg-container/svg-container';
import Header from '../header/header';
import CityCardList from './city-card-list';
import Empty from './empty';
import LoadingScreen from '../loading-screen/loading-screen';
import { useEffect, useState } from 'react';
import { fetchLoadFavorites } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoriteOffers, getIsFavoritesLoaded } from '../../store/offers-process/selectors';

function FavoritesScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const isFavoritesLoaded = useAppSelector(getIsFavoritesLoaded);
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  const [isCardRemoved, setIsCardRemoved] = useState(false);

  const handleIsCardRemoved = function (isRemoved: boolean): void {
    setIsCardRemoved(isRemoved);
  };

  useEffect(() => {
    setIsCardRemoved(false);
    dispatch(fetchLoadFavorites());
  }, [dispatch, isCardRemoved]);

  if (isFavoritesLoaded) {
    return <LoadingScreen />;
  }

  return (
    <>
      <SVGComponent />
      <div
        className={
          favoriteOffers.length === 0
            ? 'page page--favorites-empty'
            : 'page'
        }
      >
        <Header />
        {favoriteOffers.length === 0 ? (
          <Empty />
        ) : (
          <CityCardList
            favoritesOffers={favoriteOffers}
            handleIsCardRemoved={handleIsCardRemoved}
          />
        )}
        <Footer />
      </div>
    </>
  );
}
export default FavoritesScreen;

