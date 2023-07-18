import { theme } from '../../../designSystem/theme'
import styled, { css } from 'styled-components'

export const StyledRadioButton = styled.input<{
  variant: 'primary' | 'secondary'
}>`
  ${({ variant }) => css`
    margin: 0;
    appearance: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;
    border: ${variant === 'primary'
      ? `1.5px solid ${theme.color.gray.nth3}`
      : `1.5px solid ${theme.color.gray.nth2}`};
    border-radius: 50%;
    background-color: ${theme.color.white.nth1};

    ::after {
      content: '';
      width: 12px;
      height: 12px;
      background-color: ${variant === 'primary'
        ? theme.color.primary.nth1
        : theme.color.white.nth1};
      border-radius: 50%;
      display: none;
    }

    :checked {
      border-color: ${variant === 'primary'
        ? theme.color.primary.nth1
        : theme.color.white.nth1};
      background-color: ${variant === 'primary'
        ? theme.color.white.nth1
        : theme.color.primary.nth1};

      ::after {
        display: block;
      }
    }

    @media screen and (min-width: 768px) {
      width: 24px;
      height: 24px;

      ::after {
        width: 16px;
        height: 16px;
      }
    }
  `}
`
