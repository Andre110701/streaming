import { theme } from '../../designSystem/theme'
import { StylesConfig } from 'react-select'
import styled from 'styled-components'

export const Container = styled.div<{
  fullWidth: boolean
  width?: string
  maxWidth?: string
}>`
  width: ${({ fullWidth, width }) =>
    width || (fullWidth ? '100%' : 'max-content')};
  max-width: ${({ maxWidth }) => maxWidth};
`

const SharedStyles: StylesConfig<{ label: string; value: string }, false> = {
  input: (provided) => ({
    ...provided,
    margin: '0px',
    padding: '8px 0 8px 16px',
    height: '100%',
    color: theme.color.gray.nth2
  }),
  placeholder: (provided, state) => ({
    ...provided,
    margin: 0,
    padding: '8px 0 8px 16px',

    p: {
      color: state.hasValue ? theme.color.primary.nth1 : theme.color.gray.nth2,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }),
  singleValue: (provided) => ({
    ...provided,
    margin: 0,
    padding: '8px 0 8px 16px'
  }),
  valueContainer: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
    fontFamily: 'Poppins',
    fontSize: '14px',
    lineHeight: '21px',

    '@media only screen and (min-width: 767px)': {
      fontSize: '16px',
      lineHeight: '24px'
    }
  })
}

export const DefaultStyles: StylesConfig<
  { label: string; value: string },
  false
> = {
  ...SharedStyles,
  control: (provided, state) => ({
    ...provided,
    flexWrap: 'nowrap',
    border: 'none !important',
    position: 'relative',
    minHeight: 'none',
    height: '36px',
    overflow: 'hidden',
    boxShadow: 'none',
    borderRadius: state.menuIsOpen
      ? `${theme.border.radius.sm} ${theme.border.radius.sm} 0 0`
      : theme.border.radius.sm,
    padding: '0',
    backgroundColor: theme.color.gray.nth4,
    svg: {
      rotate: state.menuIsOpen ? '90deg' : '-90deg'
    },

    '@media only screen and (min-width: 767px)': {
      height: '40px'
    }
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    padding: '8px 16px',
    // color: theme.color.gray.nth2,
    fontSize: '20px',
    cursor: 'pointer',
    color: state.hasValue ? theme.color.primary.nth1 : theme.color.gray.nth2,

    '@media only screen and (min-width: 767px)': {
      fontSize: '32px',
      padding: '4px 16px'
    },
    ':hover': {
      color: 'none'
    }
  })
}

export const RoundedStyles: StylesConfig<
  { label: string; value: string },
  false
> = {
  ...SharedStyles,
  control: (provided, state) => ({
    ...provided,
    flexWrap: 'nowrap',
    border: `${theme.border.width.line} solid ${theme.color.gray.nth2}`,
    position: 'relative',
    minHeight: 'none',
    height: '36px',
    overflow: 'hidden',
    boxShadow: 'none',
    backgroundColor: theme.color.gray.nth3,
    borderRadius: state.menuIsOpen
      ? `${theme.border.radius.md} ${theme.border.radius.md} 0 0`
      : theme.border.radius.md,
    borderBottomColor: state.menuIsOpen ? 'transparent' : theme.color.gray.nth2,
    padding: '0',
    transition: 'none',
    svg: {
      rotate: state.menuIsOpen ? '-90deg' : '180deg'
    },
    ':hover': {
      borderColor: theme.color.gray.nth2,
      borderBottomColor: state.menuIsOpen
        ? 'transparent'
        : theme.color.gray.nth2
    },

    '@media only screen and (min-width: 767px)': {
      height: '40px'
    }
  }),
  placeholder: (provided, state) => ({
    ...provided,
    margin: 0,
    color: theme.color.gray.nth2,
    padding: '8px 0 8px 16px',
    p: {
      color: state.hasValue ? theme.color.primary.nth1 : theme.color.gray.nth2,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: '8px 16px',
    color: theme.color.gray.nth2,
    fontSize: '20px',
    cursor: 'pointer',

    '@media only screen and (min-width: 767px)': {
      fontSize: '32px',
      padding: '4px 16px'
    },
    ':hover': {
      color: 'none'
    }
  })
}

export const OrderStyles: StylesConfig<
  { label: string; value: string },
  false
> = {
  ...SharedStyles,
  control: (provided, state) => ({
    ...provided,
    display: 'flex',
    flexDirection: 'row-reverse',
    border: 'none !important',
    position: 'relative',
    minHeight: 'none',
    height: '36px',
    overflow: 'hidden',
    boxShadow: 'none',
    backgroundColor: theme.color.white.nth1,
    borderRadius: state.menuIsOpen
      ? `${theme.border.radius.sm} ${theme.border.radius.sm} 0 0`
      : theme.border.radius.sm,
    padding: '0',

    '@media only screen and (min-width: 767px)': {
      height: '40px'
    }
  }),
  input: (provided) => ({
    ...provided,
    margin: '0px',
    padding: '8px 16px 8px 0',
    height: '100%',
    color: theme.color.gray.nth2
  }),
  placeholder: (provided, state) => ({
    ...provided,
    margin: 0,
    padding: '8px 16px 8px 0',
    p: {
      whiteSpace: 'nowrap',
      color: state.hasValue ? theme.color.primary.nth1 : theme.color.gray.nth2,
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }),
  singleValue: (provided) => ({
    ...provided,
    margin: 0,
    padding: '8px 16px 8px 0'
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    padding: '8px 8px 8px 16px',
    color: state.hasValue ? theme.color.primary.nth1 : theme.color.gray.nth2,
    fontSize: '20px',
    cursor: 'pointer',

    '@media only screen and (min-width: 767px)': {
      fontSize: '24px',
      padding: '8px 16px'
    },

    ':hover': {
      color: 'none'
    }
  })
}

export const Menu = styled.div<{ isRounded: boolean }>`
  position: absolute;
  top: 35px;
  left: 0;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  background-color: ${({ isRounded }) =>
    isRounded ? theme.color.gray.nth3 : theme.color.white.nth1};
  overflow-x: hidden;
  overflow-y: visible;
  border-radius: 0 0 ${theme.border.radius.sm} ${theme.border.radius.sm};
  border-radius: ${({ isRounded }) =>
    !isRounded
      ? `0 0 ${theme.border.radius.sm} ${theme.border.radius.sm}`
      : `0 0 ${theme.border.radius.md} ${theme.border.radius.md}`};
  border: ${({ isRounded }) =>
    isRounded ? `1px solid ${theme.color.gray.nth2}` : 'none'};
  border-top: transparent;
  z-index: 100;

  @media screen and (min-width: 767px) {
    top: 39px;
  }
`

export const MenuList = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  color: ${theme.color.gray.nth2};

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.color.gray.nth3};
    border-radius: ${theme.border.radius.xl};
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
`

export const Items = styled.option<{
  selectedColor: boolean
  isRounded: boolean
}>`
  font-weight: unset;
  overflow-x: hidden;
  width: 100%;
  padding: 8px 16px;
  color: ${({ selectedColor }) =>
    selectedColor && `${theme.color.primary.nth1} !important`};

  :hover {
    background-color: ${theme.color.gray.nth3};

    color: ${({ isRounded }) => isRounded && `${theme.color.gray.nth1}`};
  }

  @media (pointer) {
    cursor: pointer;
  }
`
