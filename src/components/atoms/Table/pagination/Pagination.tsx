import { Subtitle } from '../../../atoms/typography/subtitle/Subtitle'
import { theme } from '../../../designSystem/theme'
import { Icon } from '@iconify/react'
import * as S from './Pagination.styles'
import { useEffect, useMemo, useState } from 'react'

export type Props = {
  totalItems: number
  itemsPerPage: number
  onPageChange?: (currentPage: number) => void
  siblingsCount?: number
}

export const Pagination = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  siblingsCount = 0
}: Props) => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const handleLeftClick = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1)
  }

  const handleRightClick = () => {
    currentPage < totalPages && setCurrentPage(currentPage + 1)
  }

  const printPaginationItems = (start: number, end: number) => {
    const items: JSX.Element[] = []

    for (let index = start; index <= end; index++) {
      const isSelected = currentPage === index

      items.push(
        <Subtitle
          className={isSelected ? 'item selected' : 'item'}
          variant="MD"
          fontWeight="regular"
          color={theme.color.gray.nth2}
          key={index}
          onClick={() => setCurrentPage(index)}>
          {index}
        </Subtitle>
      )
    }

    return items
  }

  const printDot = (key: number) => {
    const dot = (
      <Subtitle
        variant="MD"
        fontWeight="regular"
        color={theme.color.gray.nth2}
        key={key}>
        ...
      </Subtitle>
    )

    return dot
  }

  const paginationItems = useMemo(() => {
    const noDots = totalPages <= 5 + 2 * siblingsCount

    if (noDots) {
      return printPaginationItems(1, totalPages)
    }

    if (currentPage <= 3 + siblingsCount) {
      return [
        ...printPaginationItems(1, 3 + 2 * siblingsCount),
        printDot(totalPages - 1),
        printPaginationItems(totalPages, totalPages)
      ]
    }

    if (currentPage > totalPages - (3 + siblingsCount)) {
      return [
        printPaginationItems(1, 1),
        printDot(2),
        ...printPaginationItems(
          totalPages - 2 * (1 + siblingsCount),
          totalPages
        )
      ]
    }

    return [
      printPaginationItems(1, 1),
      printDot(2),
      ...printPaginationItems(
        currentPage - siblingsCount,
        currentPage + siblingsCount
      ),
      printDot(totalItems - 1),
      printPaginationItems(totalPages, totalPages)
    ]
  }, [currentPage, totalPages, siblingsCount])

  useEffect(() => {
    onPageChange && onPageChange(currentPage)
  }, [currentPage])

  return (
    <S.PaginationItemsContainer>
      <Icon
        className={currentPage > 1 ? '' : 'disabled'}
        icon="eva:arrow-ios-back-outline"
        onClick={() => handleLeftClick()}
      />

      {paginationItems}

      <Icon
        className={currentPage < totalPages ? '' : 'disabled'}
        icon="eva:arrow-ios-forward-outline"
        onClick={() => handleRightClick()}
      />
    </S.PaginationItemsContainer>
  )
}
