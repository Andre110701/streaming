import styled, { css } from 'styled-components'
import { theme } from '../../../designSystem/theme'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const HiddenCheckbuttonStyle = css`
  margin-top: 0 !important;
`

export const TableContainer = styled.div<{ hideCheckbutton: boolean }>`
  ${({ hideCheckbutton }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-sizing: border-box;
    margin: ${theme.spacing.nth4} 0 ${theme.spacing.nth2} 0;

    @media screen and (min-width: 768px) {
      box-shadow: ${theme.shadow.nth2};
      border-radius: ${theme.border.radius.md};
      margin: ${theme.spacing.nth2} 0 ${theme.spacing.nth6} 0;
      background-color: ${theme.color.white.nth1};
    }

    ${hideCheckbutton && HiddenCheckbuttonStyle}
  `}
`

export const TableHeader = styled.div<{ paddingTop?: string }>`
  ${({ paddingTop }) => css`
    height: ${paddingTop ?? 'auto'};
    min-height: 44px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${theme.spacing.nth6};

    @media screen and (min-width: 768px) {
      justify-content: flex-start;
      align-items: flex-end;
      min-height: 24px;
      padding: 0;
      gap: ${theme.spacing.nth8};
    }
  `}
`

export const HeaderTextWrapper = styled.div`
  min-width: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.spacing.nth2};

  .select-all {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing.nth2};

    > p {
      margin: 0;
    }

    input {
      margin: 0;
    }
  }

  > p {
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: ${theme.spacing.nth8};
    margin-right: 0;
  }
`

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: ${theme.spacing.nth4};

  svg {
    width: 32px;
    height: 32px;
    color: ${theme.color.gray.nth2};
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    svg {
      width: 24px;
      height: 24px;
    }
  }
`

export const TableFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing.nth2};
  padding: 0 ${theme.spacing.nth6};

  .footer-text {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  && p {
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 0;
    gap: 0;

    .footer-text {
      flex-direction: row;
      justify-content: start;
      gap: ${theme.spacing.nth6};
    }
  }
`

export const ExportButton = styled.div`
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    color: ${theme.color.primary.nth1};
  }

  .icon-text {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${theme.spacing.nth2};

    svg {
      width: 16px;
      height: 16px;
    }

    .icon-text {
      display: block;
    }
  }
`
