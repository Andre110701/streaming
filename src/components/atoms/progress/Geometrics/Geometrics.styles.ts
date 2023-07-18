import styled, { css } from 'styled-components'
import { theme } from '../../../designSystem/theme'
import { GeometricProps as Props } from './Geometrics'

type GeometricProps = Omit<Props, 'number'>

const Finished = css`
  background-color: ${theme.color.progress.nth5};

  p {
    color: ${theme.color.white.nth1};
  }
`

const InProgress = css`
  background-color: ${theme.color.progress.nth4};

  p {
    color: ${theme.color.white.nth1};
  }
`

const NotStarted = css`
  background-color: ${theme.color.white.nth1};
  border: 2px solid ${theme.color.gray.nth3};

  p {
    color: ${theme.color.gray.nth3};
  }
`

export const Circle = styled.div<GeometricProps>`
  ${({ variant }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    height: 24px;
    width: 24px;
    border-radius: 100%;
    box-sizing: border-box;

    ${variant === 'finished' && Finished}
    ${variant === 'inProgress' && InProgress}
    ${variant === 'notStarted' && NotStarted}

    @media screen and (min-width: 767px) {
      height: 32px;
      width: 32px;
    }
  `}
`

export const DiamondWrapper = styled.div`
  position: relative;
  height: 24px;
  width: 24px;

  @media screen and (min-width: 767px) {
    height: 32px;
    width: 32px;
  }
`

export const Diamond = styled.div<GeometricProps>`
  ${({ variant }) => css`
    position: absolute;
    top: 2px;
    left: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    border-radius: 4px;
    z-index: 1;
    box-sizing: border-box;
    margin: 0 ${theme.spacing.nth3};
    -ms-transform: rotate(45deg); /* Internet Explorer */
    -moz-transform: rotate(45deg); /* Firefox */
    -webkit-transform: rotate(45deg); /* Safari et Chrome */
    -o-transform: rotate(45deg); /* Opera */

    p {
      -ms-transform: rotate(-45deg); /* Internet Explorer */
      -moz-transform: rotate(-45deg); /* Firefox */
      -webkit-transform: rotate(-45deg); /* Safari et Chrome */
      -o-transform: rotate(-45deg); /* Opera */
    }

    ${variant === 'finished' && Finished}
    ${variant === 'inProgress' && InProgress}
    ${variant === 'notStarted' && NotStarted}

    @media screen and (min-width: 767px) {
      top: 3px;
      left: -8px;
      height: 26px;
      width: 26px;
    }
  `}
`

export const Line = styled.span`
  position: absolute;
  left: 16px;
  z-index: 0;
  height: 3px;
  width: calc(100% - 16px - 16px);
  align-self: center;
  background-color: ${theme.color.gray.nth3};
`
