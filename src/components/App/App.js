import ReactNotification from 'react-notifications-component';
import { useEffect, Suspense, lazy } from 'react';
import 'react-notifications-component/dist/theme.css';
import { Switch, Redirect, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import Header from 'components/Header';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const HomePage = lazy(() => import('../../pages/HomePage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const isGetCurrentUser = useSelector(authSelectors.getIsGetCurrentUser);

  useEffect(() => dispatch(authOperations.getCurrentUser()), [dispatch]);

  return (
    <>
      {!isGetCurrentUser && (
        <>
          <ReactNotification />
          <Header />

          <Suspense fallback={<p>Load...</p>}>
            <Switch>
              <PublicRoute exact path="/">
                <HomePage />
              </PublicRoute>

              <PublicRoute
                exact
                path="/register"
                redirectedTo="/contacts"
                restricted
              >
                <RegisterPage />
              </PublicRoute>

              <PublicRoute
                exact
                path="/login"
                redirectedTo="/contacts"
                restricted
              >
                <LoginPage />
              </PublicRoute>

              <PrivateRoute exact path="/contacts" redirectedTo="/login">
                <ContactsPage />
              </PrivateRoute>

              <Route>
                <Redirect to="/" />
              </Route>
            </Switch>
          </Suspense>
        </>
      )}
    </>
  );
};

export default App;
