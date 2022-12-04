import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  justify-items: center;
  margin-right: auto;
  margin-left: auto;
  padding: 16px;
  text-align: center;
`;
export const Input = styled.input`
  width: 200px;
  height: 24px;
  margin-top: 8px;
  border: 1px solid grey;
  border-radius: 4px;
  :hover {
    border-color: green;
  }
`;
export const Button = styled.button`
  width: 100px;
  padding: 4px;
  margin-top: 16px;
  border: 1px solid grey;
  background-color: transparent;
  border-radius: 4px;
  box-shadow: 5px 3px 3px black;
  cursor: pointer;
  :hover {
    scale: 1.1;
    background-color: grey;
    color: white;
  }
`;
