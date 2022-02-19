import { Navigate } from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

//import { PropsWithChildren } from 'react';
//import { ReactNode } from 'react';

type PrivateRoutesProps =  {
  children: JSX.Element;
  authorizationStatus: AuthorizationStatus;
};

function PrivateRoute(props: PrivateRoutesProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
