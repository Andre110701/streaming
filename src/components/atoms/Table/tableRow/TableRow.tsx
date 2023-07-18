// import { Checkbutton } from '@cybergenios/check-button'
import { Subtitle } from '../../typography/subtitle/Subtitle'
import { theme } from '../../../designSystem/theme'
import { ColumnTemplateResponsive } from '../table/Table'
import * as S from './TableRow.styles'
import {
  BaseSyntheticEvent,
  ReactNode,
  useEffect,
  useMemo,
  useState
} from 'react'

export type Props = {
  rowContents: ReactNode[]
  hideCheckButton: boolean
  onCheckButtonClick?: (event: BaseSyntheticEvent) => void
  name?: string
  value?: string
  columnTemplate?: string | ColumnTemplateResponsive
  isheader?: boolean
  isLastRow?: boolean
  allChecked?: boolean
  onRowClick?: () => void | undefined
}

export const TableRow = ({
  rowContents,
  onCheckButtonClick,
  name,
  value,
  columnTemplate,
  isheader = false,
  isLastRow = false,
  allChecked = false,
  hideCheckButton,
  onRowClick
}: Props) => {
  const [isChecked, setIsChecked] = useState(false)

  const rowElements = useMemo(
    () =>
      rowContents.map((content, index) =>
        typeof content === 'string' ? (
          <Subtitle
            variant="MD"
            key={index}
            color={isheader ? theme.color.gray.nth3 : theme.color.gray.nth1}>
            {content}
          </Subtitle>
        ) : (
          content
        )
      ),
    [rowContents]
  )

  const columnConfig = columnTemplate ?? '1fr '.repeat(rowContents.length)

  // const handleChange = (event: BaseSyntheticEvent) => {
  //   setIsChecked(event.target.checked)
  //   onCheckButtonClick && onCheckButtonClick(event)
  // }

  useEffect(() => setIsChecked(allChecked), [allChecked])

  return (
    <S.Container
      isChecked={isChecked}
      isheader={isheader}
      isLastRow={isLastRow}
      hasRowClick={!!onRowClick}>
      <div className="row-wrapper">
        {!hideCheckButton && (
          <S.CheckButtonWrapper isheader={isheader}>
            {/* <Checkbutton
              name={name ?? ''}
              value={value ?? ''}
              onChange={
                isheader
                  ? undefined
                  : (event: BaseSyntheticEvent) => handleChange(event)
              }
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              className={isheader ? '' : 'row-checkbox'}
            /> */}
          </S.CheckButtonWrapper>
        )}

        <S.RowElementsContainer
          columnTemplate={columnConfig}
          onClick={onRowClick && onRowClick}>
          {rowElements}
        </S.RowElementsContainer>
      </div>

      {!isLastRow && <S.RowDivider />}
    </S.Container>
  )
}
