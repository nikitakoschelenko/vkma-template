import { FC } from 'react';
import { back } from '@itznevikat/router';
import { Alert, NavIdProps } from '@vkontakte/vkui';

export const TestAlert: FC<NavIdProps> = () => {
  return (
    <Alert
      actions={[
        {
          title: 'Отмена',
          autoclose: true,
          mode: 'cancel'
        },
        {
          title: 'Да',
          autoclose: true,
          mode: 'default'
        }
      ]}
      actionsLayout="horizontal"
      onClose={back}
      header="Подтверждение действия"
      text="Вы уверены, что вам стоило открывать это предупреждение?"
    />
  );
};
