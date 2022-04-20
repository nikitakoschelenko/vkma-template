import { FC } from 'react';
import { back } from '@itznevikat/router';
import {
  Div,
  Group,
  NavIdProps,
  Panel,
  PanelHeader,
  PanelHeaderBack
} from '@vkontakte/vkui';

export const Persik: FC<NavIdProps> = ({ nav }) => {
  return (
    <Panel nav={nav}>
      <PanelHeader left={<PanelHeaderBack onClick={back} />}>
        Персик
      </PanelHeader>

      <Group>
        <Div>
          <img src="/persik.png" />
        </Div>
      </Group>
    </Panel>
  );
};
