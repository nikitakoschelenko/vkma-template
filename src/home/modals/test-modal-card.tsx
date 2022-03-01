import { type FC } from 'preact/compat';
import { back } from '@itznevikat/router';
import { Button, ModalCard, NavIdProps } from '@vkontakte/vkui';
import { Icon56GhostOutline } from '@vkontakte/icons';

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
