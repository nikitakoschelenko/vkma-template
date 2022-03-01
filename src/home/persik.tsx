import { type FC } from 'preact/compat';
import {
  Div,
  Group,
  NavIdProps,
  Panel,
  PanelHeader,
  PanelHeaderBack
} from '@vkontakte/vkui';

import { back } from '@itznevikat/router';

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
