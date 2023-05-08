import styled from 'styled-components'

export const Container = styled.footer`
grid-area: footer;

display: flex;
justify-content: space-between;
align-items: center;

padding: 0 123px;

background-color: ${({ theme }) => theme.COLORS.DARK_600};
`