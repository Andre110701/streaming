import { Icon } from '@iconify/react'
import { Diamond, Circle, Line, GeometricProps } from '../Geometrics/Geometrics'
import * as S from './ClassActivityProgress.styles'

export type Activity = GeometricProps & {
  icon: string
  type: 'circle' | 'diamond'
}

type ClassActivityProgressProps = {
  activity: Activity[]
}

function getRandomKey(value: string) {
  return `${value}-${Math.random()}`
}

/**
 * Generate image to show class activity progress
 * @param activity Data to ClassActivityProgress
 * @property {string} icon                                      - The icon showed by iconify.
 * @property {'circle' | 'diamond'} type                        - The geometric showed.
 * @property {string | number} value                            - The value showed in geometric.
 * @property {'notStated' | 'inProgress' | 'finished'} variant  - Activity status.
 * @returns component with progress values
 */

export const ClassActivityProgress = ({
  activity
}: ClassActivityProgressProps) => {
  return (
    <S.ProgressContainer>
      <S.Icons>
        {activity.map(({ icon }, index) => (
          <Icon key={getRandomKey(icon + index)} icon={icon} />
        ))}
      </S.Icons>
      <S.Bar>
        <Line />
        <S.Progress>
          {activity.map(({ type, value, variant }, index) => {
            return type === 'circle' ? (
              <Circle
                key={getRandomKey(type + index)}
                variant={variant}
                value={value}
              />
            ) : (
              <Diamond
                key={getRandomKey(type + index)}
                variant={variant}
                value={value}
              />
            )
          })}
        </S.Progress>
      </S.Bar>
    </S.ProgressContainer>
  )
}
