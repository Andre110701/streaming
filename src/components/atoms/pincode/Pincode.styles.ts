import ReactCodeInput from 'react-code-input'
import styled, { css } from 'styled-components'
import { theme } from '../../designSystem/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`

const errorStyles = css`
  border: ${theme.border.width.line} solid ${theme.color.alert.nth1};
  color: ${theme.color.alert.nth1};
`

export const CodeInputStyled = styled(ReactCodeInput)<{ error?: string }>`
  ${({ error }) => css`
    display: flex !important;
    gap: ${theme.spacing.nth2};
    width: 100%;
    margin: 0 auto;

    input {
      box-sizing: border-box;
      width: 32px;
      height: 32px;
      border: none;
      border-radius: ${theme.border.radius.sm};
      background: ${theme.color.gray.nth3};
      color: ${theme.color.gray.nth1};
      outline: none;
      font-size: 16px;
      text-align: center;
      -webkit-appearance: none;

      @media screen and (min-width: 767px) {
        width: 40px;
        height: 40px;
      }

      :focus {
        border: 2px solid ${theme.color.primary.nth1};
        background: #ffff;
      }

      ${error && errorStyles}
    }

    @media screen and (min-width: 767px) {
      gap: ${theme.spacing.nth4};
    }
  `}
`

export const Error = styled.span`
  color: ${theme.color.alert.nth1};
  font-size: 10px;
  font-family: ${theme.font.family.brand};
  line-height: 15px;
  min-height: 15px;
  text-align: start;

  @media screen and (min-width: 767px) {
    font-size: 12px;
    line-height: 18px;
    min-height: 18px;
  }
`
