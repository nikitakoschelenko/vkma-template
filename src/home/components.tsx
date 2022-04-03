import { type FC } from 'react';
import {
  Group,
  NavIdProps,
  Panel,
  PanelHeader,
  PanelHeaderBack
} from '@vkontakte/vkui';

import { back } from '@itznevikat/router';
import { VoidPlaceholder, ErrorPlaceholder } from '@/components';

export const Components: FC<NavIdProps> = ({ nav }) => {
  return (
    <Panel nav={nav}>
      <PanelHeader left={<PanelHeaderBack onClick={back} />}>
        Компоненты
      </PanelHeader>

      <Group>
        <VoidPlaceholder />
      </Group>

      <Group>
        <ErrorPlaceholder />
      </Group>
    </Panel>
  );
};
