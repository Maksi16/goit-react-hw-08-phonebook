import { useSelector } from 'react-redux';
import { Nav, Text, LinkNav } from './Navigation.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Nav>
      <LinkNav to="/">
        <Text>Home</Text>
      </LinkNav>
      {isLoggedIn && (
        <LinkNav to="/contacts">
          <Text>Contacts</Text>
        </LinkNav>
      )}
    </Nav>
  );
};
