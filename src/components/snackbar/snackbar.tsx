import { FC } from 'react';
import {
  Icon20CancelCircleFillRed,
  Icon20CheckCircleFillGreen
} from '@vkontakte/icons';
import {
  Snackbar,
  SnackbarProps,
  ViewWidth,
  useAdaptivity
} from '@vkontakte/vkui';
import { classNamesString } from '@vkontakte/vkui/dist/lib/classNames';

import { setSnackbar } from './store';

import styles from './snackbar.module.css';

type BaseSnackbarProps = Omit<SnackbarProps, 'onClose'>;

export const BaseSnackbar: FC<BaseSnackbarProps> = ({ children, ...rest }) => {
  const { viewWidth } = useAdaptivity();

  const desktop: boolean = viewWidth >= ViewWidth.SMALL_TABLET;

  return (
    <Snackbar
      className={classNamesString(!desktop && styles.snackbarMobile)}
      onClose={() => setSnackbar(null)}
      {...rest}
    >
      {children}
    </Snackbar>
  );
};

export const SuccessSnackbar: FC<BaseSnackbarProps> = ({
  children,
  ...rest
}) => (
  <BaseSnackbar
    before={<Icon20CheckCircleFillGreen width={24} height={24} />}
    {...rest}
  >
    {children}
  </BaseSnackbar>
);

export const ErrorSnackbar: FC<BaseSnackbarProps> = ({ children, ...rest }) => (
  <BaseSnackbar
    before={<Icon20CancelCircleFillRed width={24} height={24} />}
    {...rest}
  >
    {children}
  </BaseSnackbar>
);
