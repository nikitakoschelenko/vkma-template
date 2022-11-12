import { FC, ReactNode } from 'react'

import { Group, List, SplitCol } from '@vkontakte/vkui'

type LayoutSidebarProps = {
  children: ReactNode
}

export const LayoutSidebar: FC<LayoutSidebarProps> = ({ children }) => {
  return (
    <SplitCol fixed width="280px" maxWidth="280px">
      <Group>
        <List>{children}</List>
      </Group>
    </SplitCol>
  )
}
