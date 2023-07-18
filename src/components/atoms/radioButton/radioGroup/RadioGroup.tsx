import * as S from './RadioGroup.styles'
import { RadioButtonWithLabel } from '../radioButtonWithLabel/RadioButtonWithLabel'
import {
  BaseSyntheticEvent,
  ComponentType,
  Fragment,
  HTMLAttributes,
  ReactNode
} from 'react'

type WrapperProps = {
  children: ReactNode
}

type InputConfig = {
  value: string
  label?: string
  labelComponent?: ReactNode
}

export type Props = {
  formik?: any
  inputs: InputConfig[]
  name: string
  inputInputGap?: number
  inputLabelGap?: number
  reverseOrder?: boolean
  fullWidth?: boolean
  Wrapper?: ComponentType<WrapperProps>
  onChange?: (event: BaseSyntheticEvent) => void
  defaultValue?: string
} & HTMLAttributes<HTMLInputElement>

/**
 * A group of radio buttons (only one can be checked at any given time)
 *
 * @param formik - let formik handle the state change
 *
 * @param onChange - { (event: React.BaseSyntheticEvent) => void } - custom state management
 *
 * @param inputs - { InputConfig[] } - array with input labels and values
 * * InputConfig = { value: string; label?: string; labelComponent?: ReactNode }
 * * Use either label or labelComponent
 * * Label renders a <Paragraph variant='LG' />
 *
 * @param name - { string } - radio group name
 *
 * @param inputInputGap - { number } - vertical gap between inputs
 *
 * @param inputLabelGap - { number } - spacing between the label and the radio button
 *
 * @param reverseOrder - { boolean } - if true, the radio button comes first and the label second
 * * default: false
 *
 * @param fullWidth - { boolean } - if the component should use all avaiable space
 * * default: false
 *
 * @param Wrapper - { ComponentType } - Wrapper for the RadioButtonWithLabel component
 *
 * @param defaultValue - { string } - a value to start checked when rendering the group
 */
export const RadioGroup = ({
  inputs,
  name,
  formik,
  inputInputGap,
  inputLabelGap,
  reverseOrder,
  fullWidth,
  Wrapper,
  onChange,
  defaultValue,
  ...props
}: Props) => {
  const hasWrapper = !!Wrapper

  return (
    <S.Container
      inputInputGap={inputInputGap}
      onChange={
        onChange ??
        ((event: BaseSyntheticEvent) =>
          formik.setFieldValue(name, event?.target.value))
      }>
      {inputs &&
        inputs.map((input) => (
          <Fragment key={input.value}>
            {hasWrapper ? (
              <Wrapper key={input.value}>
                <RadioButtonWithLabel
                  key={input.value}
                  name={name}
                  value={input.value}
                  label={input.label}
                  inputLabelGap={inputLabelGap}
                  reverseOrder={reverseOrder}
                  fullWidth={fullWidth}
                  labelComponent={input.labelComponent}
                  defaultChecked={defaultValue === input.value}
                  {...props}
                />
              </Wrapper>
            ) : (
              <RadioButtonWithLabel
                key={input.value}
                name={name}
                value={input.value}
                label={input.label}
                inputLabelGap={inputLabelGap}
                reverseOrder={reverseOrder}
                fullWidth={fullWidth}
                labelComponent={input.labelComponent}
                defaultChecked={defaultValue === input.value}
                {...props}
              />
            )}
          </Fragment>
        ))}
    </S.Container>
  )
}
