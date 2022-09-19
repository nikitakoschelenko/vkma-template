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

import styles from './persik.module.css';

export const Persik: FC<NavIdProps> = ({ nav }) => {
  return (
    <Panel nav={nav}>
      <PanelHeader left={<PanelHeaderBack onClick={back} />}>
        Персик
      </PanelHeader>

      <Group>
        <Div>
          <img className={styles.persik} src="/persik.png" />
        </Div>
      </Group>
    </Panel>
  );
};
