import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => (
  <>
    <NavLink to="/login" className={s.button}>
      LogIn
    </NavLink>
    <NavLink to="/register" className={s.button}>
      SignUp
    </NavLink>
  </>
);

export default AuthNav;
