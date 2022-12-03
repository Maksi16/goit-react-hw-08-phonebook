import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <header>
      <NavLink to="/register">
        <p>Register</p>
      </NavLink>
      <NavLink to="/login">
        <p>Log In</p>
      </NavLink>
    </header>
  );
};
