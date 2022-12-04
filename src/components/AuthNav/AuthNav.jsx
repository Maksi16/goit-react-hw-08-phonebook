import { LinkNav, Text, Header } from './AuthNav.stelyd';

export const AuthNav = () => {
  return (
    <Header>
      <LinkNav to="/register">
        <Text>Register</Text>
      </LinkNav>
      <LinkNav to="/login">
        <Text>Log In</Text>
      </LinkNav>
    </Header>
  );
};
