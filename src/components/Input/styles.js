import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};

  border-radius: 8px;

  > svg {
    margin-left: 16px;
  }

  > input {
    width: 100%;
    font-size: 16px;
    height: 48px;
    width: 100%;

    padding: 12px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: transparent;
    border: none;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`