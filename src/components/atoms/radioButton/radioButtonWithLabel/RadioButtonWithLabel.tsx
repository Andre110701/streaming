import { HTMLAttributes, ReactNode } from 'react'
import { Paragraph } from '../../typography/paragraph/Paragraph'
import { RadioButton } from '../radioButton/RadioButton'
import * as S from './RadioButtonWithLabel.styles'

export type Props = {
  value: string
  name: string
  label?: string
  labelComponent?: ReactNode
  inputLabelGap?: number
  reverseOrder?: boolean
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
} & HTMLAttributes<HTMLInputElement>

/**
 * Radio button and its label (both clickable)
 *
 * @param value - { string } - radio value when checked
 *
 * @param name - { string } - radio name (for grouping purposes)
 *
 * @param label - { string } - text description that follows the radio button
 *
 * @param labelComponent - { ReactNode } - a component that works as label
 *
 * @param inputLabelGap - { number } - spacing between the label and the radio button
 *
 * @param fullWidth - { boolean } - if the component should use all avaiable space
 * * default: false
 *
 * @param reverseOrder - { boolean } - if true, the radio button comes first and the label second
 * * default: false
 */

export const RadioButtonWithLabel = ({
  value,
  name,
  label,
  labelComponent,
  inputLabelGap,
  reverseOrder = false,
  fullWidth = false,
  variant
}: Props) => {
  return (
    <S.StyledLabel
      inputLabelGap={inputLabelGap}
      reverseOrder={reverseOrder}
      fullWidth={fullWidth}>
      <RadioButton variant={variant} name={name} value={value} />
      {labelComponent || <Paragraph variant="LG">{label}</Paragraph>}
    </S.StyledLabel>
  )
}
