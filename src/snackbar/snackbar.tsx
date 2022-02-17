import { type FC } from 'react';
import { type SnackbarProps, Snackbar } from '@vkontakte/vkui';
import {
  Icon20CancelCircleFillRed,
  Icon20CheckCircleFillGreen
} from '@vkontakte/icons';

import { useSnackbar } from './snackbar-context';

export const SuccessSnackbar: FC<Omit<SnackbarProps, 'onClose' | 'before'>> = ({
  children,
  ...rest
}) => {
  const { openSnackbar } = useSnackbar();

  return (
    <Snackbar
      onClose={() => openSnackbar(null)}
      before={<Icon20CheckCircleFillGreen width={24} height={24} />}
      {...rest}
    >
      {children}
    </Snackbar>
  );
};

export const ErrorSnackbar: FC<Omit<SnackbarProps, 'onClose' | 'before'>> = ({
  children,
  ...rest
}) => {
  const { openSnackbar } = useSnackbar();

  return (
    <Snackbar
      onClose={() => openSnackbar(null)}
      before={<Icon20CancelCircleFillRed width={24} height={24} />}
      {...rest}
    >
      {children}
    </Snackbar>
  );
};
