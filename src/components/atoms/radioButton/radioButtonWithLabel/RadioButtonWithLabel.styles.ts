import { theme } from '../../../designSystem/theme'
import styled, { css } from 'styled-components'

export const StyledRadioButton = styled.input`
  margin: 0;
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;
  border: 1.5px solid ${theme.color.gray.nth3};
  border-radius: 50%;
  background-color: ${theme.color.white};

  ::after {
    content: '';
    top: 2.5px;
    left: 2.5px;
    width: 12px;
    height: 12px;
    background-color: ${theme.color.primary.nth1};
    border-radius: 50%;
    display: none;
  }

  :checked {
    border-color: ${theme.color.primary.nth1};

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
`

const fullWidthStyle = css`
  width: 100%;
  justify-content: space-between;
  gap: unset;
`

export const StyledLabel = styled.label<{
  inputLabelGap?: number
  reverseOrder: boolean
  fullWidth: boolean
}>`
  ${({ inputLabelGap, reverseOrder, fullWidth }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;

    gap: ${inputLabelGap ?? 8}px;

    > p {
      margin: 0;
    }

    > input {
      order: ${reverseOrder ? 1 : 0};
    }

    ${fullWidth && fullWidthStyle}
  `}
`
