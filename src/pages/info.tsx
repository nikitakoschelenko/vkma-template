import { FC } from 'react';
import { Icon28LinkOutline, Icon28QrCodeOutline } from '@vkontakte/icons';
import {
  Group,
  Link,
  NavIdProps,
  Panel,
  PanelHeader,
  SimpleCell
} from '@vkontakte/vkui';

export const Info: FC<NavIdProps> = ({ nav }) => {
  return (
    <Panel nav={nav}>
      <PanelHeader>О приложении</PanelHeader>

      <Group>
        <Link
          target="_blank"
          href="https://github.com/ItzNeviKat/vkma-template"
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
  );
};
