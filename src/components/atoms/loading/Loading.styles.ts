import styled, { css } from 'styled-components'
import { theme } from '../../designSystem/theme'

const OnlyAnimationStyle = css`
  position: unset;
  height: max-content;
  top: auto;
  left: auto;
  background-color: unset;
`

export const Container = styled.div<{
  width?: string
  height?: string
  zIndex: number
  onlyAnimation: boolean
  disableFullWidth: boolean
}>`
  ${({ width, height, zIndex, onlyAnimation, disableFullWidth }) => css`
    width: ${disableFullWidth ? 'max-content' : '100%'};
    height: 100%;

    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;

    background-color: ${theme.color.overlay.nth1};
    z-index: ${zIndex};

    .animation-player {
      width: ${width ?? '32px'};
      height: ${height ?? '32px'};
      color: red;
    }

    @media screen and (min-width: 768px) {
      .animation-player {
        width: ${width ?? '64px'};
        height: ${height ?? '64px'};
      }
    }

    ${onlyAnimation && OnlyAnimationStyle}
  `}
`
