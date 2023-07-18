import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.nth6};
    margin-bottom: ${theme.spacing.nth8};

    @media screen and (min-width: 767px) {
      border-radius: ${theme.border.radius.md};
      background-color: ${theme.color.white.nth1};
      box-shadow: ${theme.shadow.nth3};
      padding: ${theme.spacing.nth6};
      margin-bottom: ${theme.spacing.nth4};
      height: calc(100% - 16px);
    }

    @media screen and (min-width: 1366px) {
      margin-bottom: 0;
      height: 100%;
    }
  `}
`

export const LegendWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.nth2};

    > div {
      display: flex;
      align-items: center;
      gap: ${theme.spacing.nth4};

      span {
        height: 2px;
        width: 35px;
      }
    }
  `}
`
