import { FC, ReactNode } from 'react'

import { Group, List, SplitCol, SplitColProps } from '@vkontakte/vkui'

type LayoutSidebarProps = SplitColProps & {
  children: ReactNode
}

export const LayoutSidebar: FC<LayoutSidebarProps> = ({
  children,
  ...props
}) => {
  return (
    <SplitCol {...props} fixed width={280} maxWidth={280}>
      <Group>
        <List>{children}</List>
      </Group>
    </SplitCol>
  )
}
