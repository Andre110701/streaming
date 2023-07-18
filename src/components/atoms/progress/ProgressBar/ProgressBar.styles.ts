import styled, { css } from 'styled-components'
import { theme } from '../../../designSystem/theme'

export type BarType = {
  width?: string
  height?: string
  backgroundColor?: string
}

export const Bar = styled.div<BarType>`
  ${({ width, height, backgroundColor }) => css`
    height: ${height || '5px'};
    border-radius: ${theme.border.radius.md};
    width: ${width || '100%'};
    background-color: ${backgroundColor || theme.color.gray.nth3};
  `}
`

export type ProgressType = {
  progress: number
  fillColor?: string
  height?: string
}

export const Progress = styled.div<ProgressType>`
  ${({ progress, fillColor, height }) => css`
    height: ${height || '5px'};
    border-radius: ${theme.border.radius.md};
    width: ${`${progress}%`};
    background-color: ${fillColor || theme.color.primary.nth1};
  `}
`
