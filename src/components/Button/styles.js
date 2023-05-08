import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  height: 48px;
  border: 0;
  padding: 12px 24px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  font-size: 16px;

  white-space: nowrap;

  &:disabled {
    opacity: 0.5;
  }
`