import { FC, ReactNode } from 'react'

import { Tabbar } from '@vkontakte/vkui'

type LayoutTabbarProps = {
  children: ReactNode
}

export const LayoutTabbar: FC<LayoutTabbarProps> = ({ children }) => {
  return <Tabbar mode="vertical">{children}</Tabbar>
}
