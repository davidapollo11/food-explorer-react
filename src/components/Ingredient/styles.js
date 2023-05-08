import styled from 'styled-components'

export const Container = styled.div`
  height: 32px;

  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  font-family: 'Poppins';
  font-size: 14px;

  padding: 4px 8px;

  border-radius: 6px;
`