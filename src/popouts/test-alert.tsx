import { FC } from 'react'

import { back } from '@itznevikat/router'
import { Alert, NavIdProps } from '@vkontakte/vkui'

export const TestAlert: FC<NavIdProps> = () => {
  return (
    <Alert
      actions={[
        {
          title: 'Отмена',
          autoClose: true,
          mode: 'cancel'
        },
        {
          title: 'Да',
          autoClose: true,
          mode: 'default'
        }
      ]}
      actionsLayout="horizontal"
      onClose={back}
      header="Подтверждение действия"
      text="Вы уверены, что вам стоило открывать это предупреждение?"
    />
  )
}
