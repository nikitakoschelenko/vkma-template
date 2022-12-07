import { FC } from 'react'

import { back, useActionRef } from '@itznevikat/router'
import { ActionSheet, ActionSheetItem, NavIdProps } from '@vkontakte/vkui'

export const TestActionSheet: FC<NavIdProps> = () => {
  const { actionRef } = useActionRef()

  return (
    <ActionSheet
      onClose={back}
      iosCloseItem={
        <ActionSheetItem autoClose mode="cancel">
          Отменить
        </ActionSheetItem>
      }
      toggleRef={actionRef}
    >
      <ActionSheetItem autoClose>Первое действие</ActionSheetItem>
      <ActionSheetItem autoClose>Второе действие</ActionSheetItem>
      <ActionSheetItem autoClose mode="destructive">
        Опасное действие
      </ActionSheetItem>
    </ActionSheet>
  )
}
