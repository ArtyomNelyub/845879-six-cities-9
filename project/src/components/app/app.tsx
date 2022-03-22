import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import PropertyScreen from '../property-screen/property-screen';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../loading-screen/loading-screen';
import { AuthorizationStatus } from '../../const';
import {store} from '../../store/index';
import {fetchOffers} from '../../store/api-actions';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/';

type AppScreen = {
  authorizationStatus:  AuthorizationStatus;
};

function App(props: AppScreen): JSX.Element {
  const { authorizationStatus} = props;

  const isDataLoaded = useAppSelector((state)=> state.isDataLoaded);
  store.dispatch(fetchOffers());

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen />}
        />
        <Route path={AppRoute.SignIn} element={<LoginScreen />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Room}>
          <Route index element={<PropertyScreen />} />
          <Route path=":id" element={<PropertyScreen />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
