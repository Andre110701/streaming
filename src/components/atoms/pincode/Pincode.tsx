import * as S from './Pincode.styles'

export type Props = {
  error?: string
  hiddenError?: boolean
  onChange: (event: string) => void
}

export const Pincode = ({ error, hiddenError = false, onChange }: Props) => {
  return (
    <S.Container>
      <S.CodeInputStyled
        name="pincode"
        inputMode="numeric"
        fields={6}
        onChange={onChange}
        error={error}
      />

      {!hiddenError && <S.Error>{error}</S.Error>}
    </S.Container>
  )
}
