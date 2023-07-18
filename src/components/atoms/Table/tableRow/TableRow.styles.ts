import styled, { css } from 'styled-components'
import { theme } from '../../../designSystem/theme'
import { ColumnTemplateResponsive } from '../table/Table'

const CheckedStyle = css`
  background-color: ${theme.color.gray.nth4};

  @media screen and (min-width: 768px) {
    background-color: ${theme.color.gray.nth4};
  }
`

const HasRowClickStyle = css`
  cursor: pointer;

  @media screen and (min-width: 1366px) {
    .showOnHover {
      display: none;
    }
  }

  :hover {
    background-color: ${theme.color.gray.nth4};

    @media screen and (min-width: 768px) {
      background-color: ${theme.color.gray.nth4};
    }

    @media screen and (min-width: 1366px) {
      .showOnHover {
        display: block;
      }
    }
  }
`

const HeaderStyle = css`
  padding-top: 0 !important;

  @media screen and (min-width: 768px) {
    padding-top: ${theme.spacing.nth6} !important;
    padding-bottom: ${theme.spacing.nth2} !important;
  }
`

const LastRowStyle = css`
  padding-bottom: ${theme.spacing.nth2} !important;

  @media screen and (min-width: 768px) {
    padding-bottom: ${theme.spacing.nth6} !important;
  }
`

export const Container = styled.div<{
  isChecked: boolean
  isheader: boolean
  isLastRow: boolean
  hasRowClick: boolean
}>`
  ${({ isChecked, isheader, isLastRow, hasRowClick }) => css`
    display: flex;
    flex-direction: column;
    padding: 0 ${theme.spacing.nth6};

    .row-wrapper {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: ${theme.spacing.nth6};
      padding: ${theme.spacing.nth2} 0;

      ${isheader && HeaderStyle}
      ${isLastRow && LastRowStyle}
    }

    @media screen and (min-width: 768px) {
      background-color: ${theme.color.white.nth1};
      padding: 0 ${theme.spacing.nth6};

      .row-wrapper {
        padding: ${theme.spacing.nth4} 0;
      }
    }

    ${hasRowClick && HasRowClickStyle}
    ${isChecked && CheckedStyle}
  `}
`

export const RowElementsContainer = styled.div<{
  columnTemplate: string | ColumnTemplateResponsive
}>`
  ${({ columnTemplate }) => css`
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: ${
      typeof columnTemplate === 'string'
        ? columnTemplate
        : columnTemplate.mobile
    };

    p {
      margin: 0;
    }

    @media screen and (min-width: 767px) {
      grid-template-columns: ${
        typeof columnTemplate === 'object' && columnTemplate.tablet
      };
    }

    @media screen and (min-width: 1366px) {
      grid-template-columns: ${
        typeof columnTemplate === 'object' && columnTemplate.desktop
      };
    }
    .
  `}
`

const CheckButtonHeaderStyle = css`
  opacity: 0;
  cursor: default !important;
`

export const CheckButtonWrapper = styled.div<{ isheader: boolean }>`
  ${({ isheader }) => css`
    opacity: 1;
    cursor: inherit;

    input {
      margin: 0;
    }

    ${isheader && CheckButtonHeaderStyle}
  `}
`

export const RowDivider = styled.div`
  width: 100%;
  border-bottom: 2px solid ${theme.color.gray.nth4};
  position: relative;
`
