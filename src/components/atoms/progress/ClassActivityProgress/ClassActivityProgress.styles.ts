import styled from 'styled-components'
import { theme } from '../../../designSystem/theme'

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: min-content;
  gap: ${theme.spacing.nth2};
`

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  svg {
    font-size: 20px;
    color: ${theme.color.gray.nth2};
  }

  @media screen and (min-width: 767px) {
    gap: ${theme.spacing.nth6};
    justify-content: center;

    svg {
      font-size: 24px;
    }
  }
`

export const Progress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.nth4};
`

export const Bar = styled.div`
  width: min-content;
  position: relative;
  display: flex;
  align-items: center;
`
