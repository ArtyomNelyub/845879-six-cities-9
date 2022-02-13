import MainScreen from '../main-screen/main-screen';
//import MainEmptyScreen from '../main-screen/main-empty-screen';
//import LoginScreen from '../login-screen/login-screen';
//import FavoritesEmptySreen from '../favorites-screen/favorites-empty-screen';
//import FavoritesSreen from '../favorites-screen/favorites-screen';
//import PropertyNotLoggedScreen from '../property-screen/property-not-logged-screen';
//import PropertyScreen from '../property-screen/property-screen';


type AppScreenProps = {
  quantityOffers : number,
}


function App( appScreenProps : AppScreenProps ): JSX.Element {
  return <MainScreen quantityOffers = {appScreenProps.quantityOffers}/>;
}

export default App;
