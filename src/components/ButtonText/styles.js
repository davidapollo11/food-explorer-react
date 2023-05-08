import styled from 'styled-components'

export const Container = styled.button`
  display: flex;

  align-items: center;

  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
`