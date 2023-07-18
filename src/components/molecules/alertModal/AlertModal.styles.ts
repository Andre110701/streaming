import styled, { css } from 'styled-components'
import { theme } from '../../designSystem/theme'

export const Container = styled.div<{ isOpen: boolean; zIndex: number }>`
  ${({ isOpen, zIndex }) => css`
    display: ${isOpen ? 'flex' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: ${zIndex || 20};
    align-items: center;
    justify-content: center;
    background: rgba(49, 49, 49, 0.6);
    @media (max-width: 767px) {
      align-items: flex-end;
    }
  `}
`
export const ModalContent = styled.div<{
  variant?: string
  widthSize?: string
  zIndex: number
}>`
  ${({ variant, widthSize, zIndex }) => css`
    width: ${widthSize === 'small'
      ? '352px'
      : widthSize === 'medium'
      ? '388px'
      : '593px'};
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing.nth4};
    background: ${theme.color.white.nth1};
    border-radius: ${theme.border.radius.md};
    box-shadow: ${theme.shadow.nth2};
    padding: ${theme.spacing.nth6} ${theme.spacing.nth14};
    z-index: ${zIndex + 1};
    .icon {
      width: ${theme.spacing.nth10};
      height: ${theme.spacing.nth10};
      color: ${variant === 'success'
        ? theme.color.alert.nth1
        : variant === 'error'
        ? theme.color.alert.nth2
        : variant === 'warning'
        ? theme.color.alert.nth3
        : theme.color.primary.nth1};
    }
    .closeIcon {
      position: absolute;
      width: ${theme.spacing.nth6};
      height: ${theme.spacing.nth6};
      cursor: pointer;
      top: 20px;
      right: 20px;
    }
    @media (max-width: 767px) {
      border-radius: ${theme.border.radius.md} ${theme.border.radius.md} 0 0;
      padding: ${theme.spacing.nth6};
      width: 100%;
      min-width: 0px;
    }
  `}
`
export const ContentContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing.nth2};
    > p {
      margin: 0px;
      text-align: center;
    }
  `}
`
export const ButtonContainer = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.nth6};
    margin: 8px;
    > p {
      margin: 0px;
    }
  `}
`
