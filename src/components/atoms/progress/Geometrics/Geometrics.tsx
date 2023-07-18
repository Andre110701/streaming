import { Paragraph } from '../../typography/paragraph/Paragraph'
import * as S from './Geometrics.styles'

export type ProgressStatus = 'finished' | 'inProgress' | 'notStarted'

export type GeometricProps = {
  value?: number | string
  variant: ProgressStatus
}

export const Circle = ({ value, variant }: GeometricProps) => {
  return (
    <S.Circle variant={variant}>
      {value !== undefined && (
        <Paragraph variant="MD" color={variant}>
          {value}
        </Paragraph>
      )}
    </S.Circle>
  )
}

export const Diamond = ({ value, variant }: GeometricProps) => {
  return (
    <S.DiamondWrapper>
      <S.Diamond variant={variant}>
        {value !== undefined && (
          <Paragraph variant="MD" color={variant}>
            {value}
          </Paragraph>
        )}
      </S.Diamond>
    </S.DiamondWrapper>
  )
}

export const Line = () => {
  return <S.Line />
}
