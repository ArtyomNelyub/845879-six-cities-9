import Authorized from './authorized';
import Unauthorized from './unauthorized';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import {memo} from 'react';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.Main}>
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.Auth ? (
                <Authorized />
              ) : (
                <Unauthorized />
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
