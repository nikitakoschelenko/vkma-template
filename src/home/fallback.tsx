import { type FC } from 'react';
import {
  Group,
  NavIdProps,
  Panel,
  PanelHeader,
  PanelHeaderBack
} from '@vkontakte/vkui';

import { back } from '@itznevikat/router';
import { VoidPlaceholder } from '@/components';

export const Fallback: FC<NavIdProps> = ({ nav }) => {
  return (
    <Panel nav={nav}>
      <PanelHeader left={<PanelHeaderBack onClick={back} />}>404</PanelHeader>

      <Group>
        <VoidPlaceholder />
      </Group>
    </Panel>
  );
};
