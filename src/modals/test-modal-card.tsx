import { FC } from 'react';

import { back } from '@itznevikat/router';
import { Icon56GhostOutline } from '@vkontakte/icons';
import { Button, ModalCard, NavIdProps } from '@vkontakte/vkui';

export const TestModalCard: FC<NavIdProps> = ({ nav }) => {
  return (
    <ModalCard
      nav={nav}
      onClose={back}
      icon={<Icon56GhostOutline />}
      header="Открывайте новые модальные карточки"
      subheader="Чем больше нажатий, тем меньше смысла"
      actions={
        <Button size="l" mode="primary" onClick={back}>
          Больше не буду
        </Button>
      }
    ></ModalCard>
  );
};
