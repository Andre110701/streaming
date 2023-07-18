// import { Checkbutton } from '@cybergenios/check-button'
import { Paragraph } from '../../../atoms/typography/paragraph/Paragraph'
import { theme } from '../../../designSystem/theme'
import { Icon } from '@iconify/react'
import { Pagination } from '../pagination/Pagination'
import { TableRow } from '../tableRow/TableRow'
import * as S from './Table.styles'
import {
  BaseSyntheticEvent,
  ReactNode,
  useEffect,
  useMemo,
  useState
} from 'react'

type Content = {
  id: string
  content: ReactNode[]
  onRowClick?: () => void
}

type IconType = {
  iconName: string
  onClick: (selectedRows: string[]) => void
}

export type ColumnTemplateResponsive = {
  mobile: string
  tablet: string
  desktop: string
}

export type Props = {
  contents: Content[]
  totalItems: number
  headers: ReactNode[]
  handleExport?: () => void
  onPageChange: (currentPage: number) => void
  itemsPerPage: number
  icons?: IconType[]
  columnTemplate?: string | ColumnTemplateResponsive
  hideCheckButton?: boolean
  paddingTop?: string
}

/**
 * Build a Table component with pagination support that allows selecting rows and executing corresponding actions
 *
 * @param headers -
 *
 * @param contents - an array that contains all table lines to be rendered
 * * each element should be given an id to identify the row
 * * type = { id: string; content: React.ReactNode[], onRowClick?: () => void }[]
 * * example: { id: 'abc-123'; content: ['element', \<div>element\<div>]; onRowClick: () => router.push(`/`) }
 *
 * @param icons - array of icon config
 * * each icon needs the icon name and an onClick function
 * * icon = { iconName: string; onClick: (selectedRows: string[]) => void }
 * * 'onClick' is called passing selected rows ids as argument
 * * is not needed if hideCheckButton is true
 *
 * @param itemsPerPage - { number } - used for pagination
 *
 * @param totalItems - { number } - used for pagination
 *
 * @param columnTemplate - default value is '1fr 1fr 1fr...' or { mobile: '1fr 1fr', tablet: '1fr 1fr 1fr', desktop: '1fr 1fr 1fr 1fr' }
 *
 * @param handleExport - function to download/export the table
 *
 * @param onPageChange - function that is called when page changes
 * * it passes current page number as parameter
 * * starting index is 1
 * * ex: (page: number) => getUsers(page)
 *
 * @param hideCheckButton - { boolean } - enable selecting rows
 *
 * @param paddingTop - { string } - space above the table, including selected rows count
 * * cannot be inferior to '24' for tablet and desktop, and '48' for mobile
 * @param className - { showOnHover } - class name to be added option to show only on hovered rows
 */

export const Table = ({
  contents,
  totalItems,
  headers,
  handleExport,
  icons,
  columnTemplate,
  onPageChange,
  itemsPerPage,
  hideCheckButton = false,
  paddingTop
}: Props) => {
  const [allChecked, setAllChecked] = useState(false)
  const [selectedRows, setSelectedRows] = useState<string[]>([])

  const handleCheck = (event: BaseSyntheticEvent) => {
    const value = event.target.value as string

    setSelectedRows((prevState) => {
      const stateCopy = Array.from(prevState)

      if (prevState.includes(value)) {
        const index = stateCopy.findIndex((element) => element === value)
        stateCopy.splice(index, 1)
      } else {
        stateCopy.push(value)
      }

      return stateCopy
    })
  }

  const rows = useMemo(() => {
    const numberOfRows = contents.length

    return contents.map((row, index) => {
      const isLastRoll = index === numberOfRows - 1

      return (
        <TableRow
          rowContents={row.content}
          columnTemplate={columnTemplate}
          key={row.id}
          isLastRow={isLastRoll}
          allChecked={allChecked}
          name={row.id}
          value={row.id}
          onCheckButtonClick={handleCheck}
          hideCheckButton={hideCheckButton}
          onRowClick={row.onRowClick}
        />
      )
    })
  }, [contents, allChecked])

  // const handleSelectAllBoxes = () => {
  //   const checkboxes: HTMLCollection =
  //     document.getElementsByClassName('row-checkbox')
  //   const selectAllCheckbox = document.getElementsByName(
  //     'select-all'
  //   )[0] as HTMLInputElement
  //   const isChecked = selectAllCheckbox.checked
  //   setAllChecked(!allChecked)

  //   for (let index = 0; index < checkboxes.length; index++) {
  //     const checkbox = checkboxes[index] as HTMLInputElement
  //     checkbox.checked = isChecked
  //   }

  //   isChecked
  //     ? setSelectedRows(contents.flatMap((content) => content.id))
  //     : setSelectedRows([])
  // }

  useEffect(() => {
    const selectAllCheckbox = document.getElementsByName(
      'select-all'
    )[0] as HTMLInputElement

    if (selectAllCheckbox) {
      if (selectedRows.length === rows.length) {
        selectAllCheckbox.checked = true
        setAllChecked(true)
      } else {
        selectAllCheckbox.checked = false
      }
    }
  }, [selectedRows])

  useEffect(() => {
    const checkboxes: HTMLCollection =
      document.getElementsByClassName('row-checkbox')
    const selectAllCheckbox = document.getElementsByName(
      'select-all'
    )[0] as HTMLInputElement

    if (selectAllCheckbox === undefined) return

    setAllChecked(false)
    selectAllCheckbox.checked = false

    for (let index = 0; index < checkboxes.length; index++) {
      const checkbox = checkboxes[index] as HTMLInputElement
      checkbox.checked = false
    }

    setSelectedRows([])
  }, [onPageChange])

  return (
    <S.Container>
      {!hideCheckButton && (
        <S.TableHeader paddingTop={paddingTop}>
          {selectedRows.length > 0 && (
            <>
              <S.HeaderTextWrapper>
                <Paragraph variant="LG" color={theme.color.primary.nth1}>
                  {selectedRows.length}{' '}
                  {selectedRows.length === 1
                    ? 'aluno selecionado'
                    : 'alunos selecionados'}
                </Paragraph>

                <div className="select-all">
                  {/* <Checkbutton
                    name="select-all"
                    value="select-all"
                    onChange={handleSelectAllBoxes}
                  /> */}
                  <Paragraph variant="LG" color={theme.color.gray.nth1}>
                    Selecionar tudo
                  </Paragraph>
                </div>
              </S.HeaderTextWrapper>

              {icons && (
                <S.IconContainer>
                  {icons.map((icon) => (
                    <Icon
                      icon={icon.iconName}
                      onClick={() => icon.onClick(selectedRows)}
                      key={icon.iconName}
                    />
                  ))}
                </S.IconContainer>
              )}
            </>
          )}
        </S.TableHeader>
      )}

      <S.TableContainer hideCheckbutton={hideCheckButton}>
        <TableRow
          rowContents={headers}
          columnTemplate={columnTemplate}
          hideCheckButton={hideCheckButton}
          isheader={true}
        />
        {rows}
      </S.TableContainer>

      <S.TableFooter>
        <div className="footer-text">
          <Paragraph variant="MD" color={theme.color.gray.nth2}>
            {itemsPerPage} {itemsPerPage === 1 ? 'item' : 'itens'} por página -
            total de {totalItems} {totalItems === 1 ? 'item' : 'itens'}
          </Paragraph>

          {handleExport ? (
            <S.ExportButton onClick={handleExport}>
              <Icon icon="carbon:export" />
              <Paragraph
                variant="MD"
                color={theme.color.primary.nth1}
                className="icon-text">
                Exportar tabela
              </Paragraph>
            </S.ExportButton>
          ) : (
            <div></div>
          )}
        </div>

        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={onPageChange}
        />
      </S.TableFooter>
    </S.Container>
  )
}
