import { theme } from '../../../designSystem/theme'
import styled from 'styled-components'

export const PaginationItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  user-select: none;
  gap: 16px;

  .item,
  svg {
    cursor: pointer;
  }

  .selected {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
    background-color: ${theme.color.primary.nth1};
    border-radius: 4px;
    color: ${theme.color.white.nth1};
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${theme.color.primary.nth1};

    @media screen and (min-width: 768px) {
      width: 32px;
      height: 32px;
    }
  }

  .disabled {
    color: ${theme.color.gray.nth3};
    cursor: default;
  }
`
