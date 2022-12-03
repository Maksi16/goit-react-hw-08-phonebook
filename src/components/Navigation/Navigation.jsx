import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/">
        <p>Home</p>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <p>Contacts</p>
        </NavLink>
      )}
    </nav>
  );
};
