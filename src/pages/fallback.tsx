import { FC } from 'react'
import { back } from '@itznevikat/router'
import {
  Group,
  NavIdProps,
  Panel,
  PanelHeader,
  PanelHeaderBack
} from '@vkontakte/vkui'

import { VoidPlaceholder } from '../components'

export const Fallback: FC<NavIdProps> = (props) => {
  return (
    <Panel {...props}>
      <PanelHeader before={<PanelHeaderBack onClick={back} />}>404</PanelHeader>

      <Group>
        <VoidPlaceholder />
      </Group>
    </Panel>
  )
}
