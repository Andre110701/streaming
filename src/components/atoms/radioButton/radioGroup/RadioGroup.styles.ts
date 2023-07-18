import styled, { css } from 'styled-components'

export const Container = styled.div<{ inputInputGap?: number }>`
  ${({ inputInputGap }) => css`
    display: flex;
    flex-direction: column;
    gap: ${inputInputGap ?? 8}px;
  `}
`
