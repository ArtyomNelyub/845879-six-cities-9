import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
//import { useParams } from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import PropertyNotLoggedScreen from '../property-screen/property-not-logged-screen';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { AuthorizationStatus } from '../../const';

type AppScreenProps = {
  countOffers: number;
}

function App(appScreenProps: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen countOffers={appScreenProps.countOffers} />}
        />
        <Route path={AppRoute.SignIn} element={<LoginScreen />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Room}>
          <Route index element={<PropertyNotLoggedScreen />} />
          <Route path=":id" element={<PropertyNotLoggedScreen />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
