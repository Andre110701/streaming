import styled, { css } from 'styled-components'
import { theme } from '../../designSystem/theme'

export const Container = styled.div`
  ${() => css`
    display: flex;
    width: 100%;
    white-space: nowrap;
    overflow-y: hidden;
    overflow-x: scroll;
    border-bottom: 2px solid ${theme.color.gray.nth3};

    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 767px) {
      margin: 32px 0px 24px;
    }

    @media (min-width: 768px) and (max-width: 1365px) {
      margin: 52px 0px 40px;
    }

    @media (min-width: 1366px) {
      margin: 32px 0px 40px;
    }
  `}
`
export const TabsWrapper = styled.div`
  ${() => css`
    display: flex;
    width: 100%;
    border-bottom: 2px solid ${theme.color.gray.nth3};
    margin-bottom: -1px;
  `}
`

export const TabItem = styled.div<{ isActive: boolean }>`
  ${({ isActive }) => css`
    cursor: pointer;
    margin-bottom: -2px;
    > svg {
      color: ${theme.color.gray.nth2};
      width: 24px;
      height: 24px;
    }

    > p {
      color: ${theme.color.gray.nth2};
      margin: 0px;
    }

    ${isActive
      ? css`
          border-bottom: 4px solid ${theme.color.primary.nth1};
          > svg {
            color: ${theme.color.primary.nth1};
          }

          > p {
            color: ${theme.color.primary.nth1};
          }
        `
      : undefined};
    @media (max-width: 767px) {
      margin-right: ${theme.spacing.nth4};
      padding: ${theme.spacing.nth2} 0;
      display: flex;
      justify-content: center;
      width: 100%;
      > p {
        display: none;
      }
      > svg {
        width: 24px;
        height: 24px;
      }
    }

    @media (min-width: 768px) and (max-width: 1365px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: ${theme.spacing.nth12};
      padding: ${theme.spacing.nth1} ${theme.spacing.nth2};

      > svg {
        min-height: 16px;
        min-width: 16px;
        margin-bottom: 8px;
      }

      > p {
        word-break: break-all;
        text-align: center;
      }
    }

    @media (min-width: 1366px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-right: ${theme.spacing.nth12};
      padding: ${theme.spacing.nth2} ${theme.spacing.nth2};
      > svg {
        margin-right: ${theme.spacing.nth2};
        font-size: ${theme.spacing.nth3};
      }
      cursor: pointer;
      > p {
        white-space: nowrap;
        text-align: left;
      }
    }
  `}
`
