import { Subtitle } from '../typography/subtitle/Subtitle'
import { Icon } from '@iconify/react'
import * as S from './Menutab.styles'
import { Dispatch, SetStateAction } from 'react'

export type Props = {
  tabItems: {
    name: string
    icon: string
    text: string
    component?: any
  }[]
  active: string
  setActive: Dispatch<SetStateAction<string>>
}

export const Menutab = ({ tabItems, active, setActive }: Props) => {
  return (
    <S.Container>
      <S.TabsWrapper>
        {tabItems.map((item, index) => (
          <S.TabItem
            key={index}
            isActive={active === item.name}
            onClick={() => setActive(item.name)}>
            <Icon icon={item.icon} />
            <Subtitle variant="MD">{item.text}</Subtitle>
          </S.TabItem>
        ))}
      </S.TabsWrapper>
    </S.Container>
  )
}
