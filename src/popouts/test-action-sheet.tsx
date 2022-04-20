import { FC } from 'react';
import { back, useActionRef } from '@itznevikat/router';
import { ActionSheet, ActionSheetItem, NavIdProps } from '@vkontakte/vkui';

export const TestActionSheet: FC<NavIdProps> = () => {
  const { actionRef } = useActionRef();

  return (
    <ActionSheet
      onClose={back}
      iosCloseItem={
        <ActionSheetItem autoclose mode="cancel">
          Отменить
        </ActionSheetItem>
      }
      toggleRef={actionRef}
    >
      <ActionSheetItem autoclose>Первое действие</ActionSheetItem>
      <ActionSheetItem autoclose>Второе действие</ActionSheetItem>
      <ActionSheetItem autoclose mode="destructive">
        Опасное действие
      </ActionSheetItem>
    </ActionSheet>
  );
};
