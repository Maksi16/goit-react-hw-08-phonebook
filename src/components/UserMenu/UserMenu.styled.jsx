import styled from 'styled-components';

export const Text = styled.p`
  margin-right: 10px;
  font-weight: 500;
  font-size: 18px;
`;
export const Button = styled.button`
  margin: 10px;
  padding: 6px;
  border-radius: 16px;
  border: 1px solid grey;
  box-shadow: 5px 3px 3px black;
  cursor: pointer;
  :hover {
    scale: 1.1;
    background-color: grey;
    color: white;
  }
`;
