import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  margin-right: 30px;
  font-weight: 700;
  font-size: 20px;
`;
export const LinkNav = styled(NavLink)`
  text-decoration: none;
  color: black;
`;
