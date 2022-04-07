import SVGContainer from '../svg-container/svg-container';
import { Link, Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { FormEvent, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { checkAuthAction, clearErrorAction, loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/types';
import { CITIES } from '../../const';
import { selectCity, setError } from '../../store/app-process/app-process';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function LoginScreen(): JSX.Element {
  const randomCity = CITIES[Math.floor(Math.random() * CITIES.length)];
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const passwordRegExp = /((?=.*\d)(?=.*[a-zA-Z])).{2,}/g;
  const emailRegExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,}/g;

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (
      loginRef.current &&
      passwordRef.current &&
      passwordRegExp.test(passwordRef.current.value) &&
      emailRegExp.test(loginRef.current.value)
    ) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    } else {
      dispatch(setError('Incorrect password or email'));
      dispatch(clearErrorAction());
    }
  };

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <>
      <SVGContainer />

      <div className="page page--gray page--login">
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
            </div>
          </div>
        </header>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form
                className="login__form form"
                action="#"
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    ref={loginRef}
                    className="login__input form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    ref={passwordRef}
                    className="login__input form__input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <button
                  className="login__submit form__submit button"
                  type="submit"
                >
                  Sign in
                </button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div
                className="locations__item"
                onClick={() => {
                  dispatch(
                    selectCity(
                      CITIES.find((city) => city.name === randomCity.name),
                    ),
                  );
                }}
              >
                <Link className="locations__item-link" to={AppRoute.Main}>
                  <span>{randomCity.name}</span>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default LoginScreen;
