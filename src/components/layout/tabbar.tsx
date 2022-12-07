import { FC, ReactNode } from 'react'

import { Tabbar, TabbarProps } from '@vkontakte/vkui'

type LayoutTabbarProps = TabbarProps & {
  children: ReactNode
}

export const LayoutTabbar: FC<LayoutTabbarProps> = ({ children, ...props }) => {
  return (
    <Tabbar {...props} mode="vertical">
      {children}
    </Tabbar>
  )
}
