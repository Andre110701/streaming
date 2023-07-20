import styled, { css } from 'styled-components'

export const Container = styled.form`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
  `}
`