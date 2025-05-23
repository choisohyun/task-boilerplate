import styled from 'styled-components';

interface HelloProps {
  name: string;
}

const Header = styled.h1`
  color: blue;
  font-size: 24px;
  text-align: center;
`;

export const Hello = ({ name }: HelloProps) => {
  return <Header>Hello, {name}!</Header>;
};
