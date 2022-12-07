import { FC } from 'react'

import { Icon28LinkOutline, Icon28QrCodeOutline } from '@vkontakte/icons'
import {
  Group,
  Link,
  NavIdProps,
  Panel,
  PanelHeader,
  SimpleCell
} from '@vkontakte/vkui'

export const Info: FC<NavIdProps> = (props) => {
  return (
    <Panel {...props}>
      <PanelHeader>О приложении</PanelHeader>

      <Group>
        <Link
          target="_blank"
          href="https://github.com/ItzNeviKat/vkma-template"
          style={{ textDecoration: 'none' }}
        >
          <SimpleCell
            before={<Icon28QrCodeOutline />}
            after={<Icon28LinkOutline />}
          >
            Шаблон на Github
          </SimpleCell>
        </Link>
      </Group>
    </Panel>
  )
}
