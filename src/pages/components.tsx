import { FC } from 'react'
import { back } from '@itznevikat/router'
import {
  Group,
  NavIdProps,
  Panel,
  PanelHeader,
  PanelHeaderBack
} from '@vkontakte/vkui'

import { ErrorPlaceholder, VoidPlaceholder } from '../components'

export const Components: FC<NavIdProps> = (props) => {
  return (
    <Panel {...props}>
      <PanelHeader before={<PanelHeaderBack onClick={back} />}>
        Компоненты
      </PanelHeader>

      <Group>
        <VoidPlaceholder />
      </Group>

      <Group>
        <ErrorPlaceholder />
      </Group>
    </Panel>
  )
}
