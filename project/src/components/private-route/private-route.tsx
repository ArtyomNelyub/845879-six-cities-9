import { Navigate } from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import { useAppSelector } from '../../hooks';

type PrivateRoutesProps =  {
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRoutesProps): JSX.Element {
  const {children} = props;
  const {authorizationStatus} = useAppSelector((state) => state.USER);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
