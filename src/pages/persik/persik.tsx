import { FC } from 'react'

import { back } from '@itznevikat/router'
import {
  Div,
  Group,
  NavIdProps,
  Panel,
  PanelHeader,
  PanelHeaderBack
} from '@vkontakte/vkui'

import './persik.css'

export const Persik: FC<NavIdProps> = (props) => {
  return (
    <Panel {...props}>
      <PanelHeader before={<PanelHeaderBack onClick={back} />}>
        Персик
      </PanelHeader>

      <Group>
        <Div>
          <img className="Persik" src="/persik.png" />
        </Div>
      </Group>
    </Panel>
  )
}
