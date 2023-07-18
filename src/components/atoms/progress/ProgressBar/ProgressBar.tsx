import type { BarType, ProgressType } from './ProgressBar.styles'
import * as S from './ProgressBar.styles'

type ProgressBarProps = BarType & ProgressType

export const ProgressBar = ({
  progress,
  width,
  height,
  backgroundColor,
  fillColor
}: ProgressBarProps) => {
  return (
    <S.Bar width={width} height={height} backgroundColor={backgroundColor}>
      <S.Progress progress={progress} height={height} fillColor={fillColor} />
    </S.Bar>
  )
}
