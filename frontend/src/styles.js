import styled from 'styled-components';

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.white};
`;
Title.displayName = 'Title';
