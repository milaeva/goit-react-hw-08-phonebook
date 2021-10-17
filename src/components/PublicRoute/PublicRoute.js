import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { authSelectors } from 'redux/auth';

const PublicRoute = ({
  children,
  restricted = false,
  redirectedTo = './',
  ...props
}) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...props}>
      {isLoggedIn && restricted ? <Redirect to={redirectedTo} /> : children}
    </Route>
  );
};

export default PublicRoute;
