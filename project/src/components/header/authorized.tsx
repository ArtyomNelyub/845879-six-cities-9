import { Link } from 'react-router-dom';
import { AppRoute, USER_EMAIL } from '../../const';
import { useAppDispatch } from '../../hooks/index';
import { redirectToRoute } from '../../store/action';
import { logoutAction } from '../../store/api-actions';
import { changeSelectedOfferFavoriteStatus, cleanOffersFavoriteStatus } from '../../store/offers-process/offers-process';

function Authorized(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <>
      <li className="header__nav-item user">
        <Link
          className="header__nav-link header__nav-link--profile"
          to={AppRoute.Favorites}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">
            {localStorage.getItem(USER_EMAIL)}
          </span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          to={AppRoute.SignIn}
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
        >
          <span
            className="header__signout"
            onClick={() => {
              dispatch(changeSelectedOfferFavoriteStatus(false));
              dispatch(cleanOffersFavoriteStatus(false));
              dispatch(redirectToRoute(AppRoute.Main));
            }}
          >
            Sign out
          </span>
        </Link>
      </li>
    </>
  );
}

export default Authorized;
