import { InputHTMLAttributes } from 'react'
import * as S from './RadioButton.styles'

export type Props = {
  value: string
  name: string
  variant?: 'primary' | 'secondary'
} & InputHTMLAttributes<HTMLInputElement>

export const RadioButton = ({
  value,
  name,
  variant = 'primary',
  ...props
}: Props) => {
  return (
    <S.StyledRadioButton
      type="radio"
      variant={variant}
      name={name}
      value={value}
      {...props}
    />
  )
}
