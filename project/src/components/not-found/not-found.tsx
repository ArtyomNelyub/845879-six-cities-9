import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFound(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1
              className="login__title"
              style={{ fontStyle: 'normal', fontSize: '120px' }}
            >
              404
            </h1>
            <h2> Oops! Page not Found</h2>
            <Link
              to={AppRoute.Main}
              className="login__submit form__submit button"
              type="submit"
              style={{ textAlign: 'left' }}
            >
              Go back to HOMEPAGE
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
