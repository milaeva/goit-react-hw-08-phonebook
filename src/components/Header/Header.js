import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';

import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';

import { authSelectors } from 'redux/auth';
import s from './Header.module.css';

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div className={s.wrapper}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <nav className={s.nav}>
              <NavLink
                to="/"
                exact
                className={s.link}
                activeClassName="activeLink"
              >
                Home
              </NavLink>

              {isLoggedIn && (
                <NavLink
                  to="/contacts"
                  exact
                  className={s.link}
                  activeClassName="activeLink"
                >
                  Contacts
                </NavLink>
              )}
            </nav>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
