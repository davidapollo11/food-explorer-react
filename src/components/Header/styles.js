import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  height: 104px;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  justify-content: space-between;
  padding: 0 123px;
  align-items: center;
  gap: 32px;

  .logo {
    display: flex;
    justify-content: flex-start;

    width: 197px;
  }

  .button > button {
    width: 200px;
  }

  .logOut {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;
  }
  
`