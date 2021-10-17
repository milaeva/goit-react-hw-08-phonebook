import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { authSelectors } from 'redux/auth';

const PrivateRoute = ({ children, redirectedTo = './', ...props }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...props}>
      {isLoggedIn ? children : <Redirect to={redirectedTo} />}
    </Route>
  );
};

export default PrivateRoute;
