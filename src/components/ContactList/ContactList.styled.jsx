import styled from 'styled-components';

export const List = styled.ul`
  margin-left: auto;
  margin-right: auto;
  padding: 4px;
  width: 350px;
  text-align: center;
  /* border: 1px solid black; */
  background-color: #fafafa;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px dashed grey;
`;
export const Button = styled.button`
  margin-left: 12px;
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
export const Titel = styled.h1`
  text-align: center;
`;
