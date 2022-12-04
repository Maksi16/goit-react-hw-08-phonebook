import styled from 'styled-components';

const Titel = styled.h1`
  text-align: center;
  margin-top: 50px;
`;

export default function Home() {
  return (
    <div>
      <Titel> Welcome to the PhoneBook! </Titel>
    </div>
  );
}
