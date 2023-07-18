import { Paragraph } from '../typography/paragraph/Paragraph'
import { Subtitle } from '../typography/subtitle/Subtitle'
import ReactSelect, {
  SingleValue as SingleValueProps,
  components
} from 'react-select'
import { Icon } from '@iconify/react'
import { theme } from '../../designSystem/theme'
import * as S from './Select.styles'

export type Option = {
  label: string
  value: string
}

type Props = {
  id?: string
  formik?: any
  fullWidth?: boolean
  width?: string
  maxWidth?: string
  variant?: 'default' | 'order' | 'rounded'
  placeholder?: string | null
  noOptionsMessage?: string
  options: Option[] | undefined
  defaultValue?: Option
  value?: Option
  onChangeOption?: (option: SingleValueProps<Option>) => void
}

export const Select = ({
  variant = 'default',
  id,
  fullWidth = true,
  width,
  maxWidth,
  formik,
  options,
  defaultValue,
  placeholder,
  noOptionsMessage,
  value,
  onChangeOption
}: Props) => {
  const isDefault = variant === 'default'
  const isOrder = variant === 'order'
  const isRounded = variant === 'rounded'

  function Option(props: any) {
    const { ...newInnerProps } = props.innerProps

    return (
      <S.Items
        buttonRef={props.innerRef}
        component="div"
        isRounded={isRounded}
        selectedColor={props.isSelected}
        {...newInnerProps}>
        {props.children}
      </S.Items>
    )
  }

  function MenuList(props: any) {
    return (
      <S.MenuList>
        <Paragraph variant="LG" fontWeight="medium">
          {props.children}
        </Paragraph>
      </S.MenuList>
    )
  }

  function Menu(props: any) {
    return (
      <S.Menu {...props.innerProps} isRounded={isRounded}>
        {props.children}
      </S.Menu>
    )
  }

  const DropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <Icon icon="eva:arrow-ios-back-outline" />
      </components.DropdownIndicator>
    )
  }

  const OrderIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <Icon icon="ri:order-play-fill" />
      </components.DropdownIndicator>
    )
  }

  const SingleValue = (props: any) => {
    return (
      <components.SingleValue {...props}>
        <Subtitle
          variant="MD"
          color={isRounded ? theme.color.gray.nth2 : theme.color.primary.nth1}>
          {props.children}
        </Subtitle>
      </components.SingleValue>
    )
  }

  return (
    <S.Container fullWidth={fullWidth} width={width} maxWidth={maxWidth}>
      <ReactSelect
        styles={
          isDefault
            ? S.DefaultStyles
            : isOrder
            ? S.OrderStyles
            : S.RoundedStyles
        }
        defaultValue={defaultValue}
        value={value}
        id={id}
        options={options}
        onChange={(option) => {
          if (onChangeOption) return onChangeOption(option)

          option
            ? formik.setFieldValue(id, option?.value)
            : formik.setFieldValue(id, '')
        }}
        components={{
          IndicatorSeparator: () => null,
          Menu,
          MenuList,
          Option,
          DropdownIndicator: isOrder ? OrderIndicator : DropdownIndicator,
          SingleValue
        }}
        isSearchable={!isOrder}
        // controlShouldRenderValue={!isOrder}
        placeholder={<Subtitle variant="MD">{placeholder}</Subtitle>}
        noOptionsMessage={() => (
          <Paragraph variant="MD" color={theme.color.gray.nth2}>
            {noOptionsMessage}
          </Paragraph>
        )}
      />
    </S.Container>
  )
}
