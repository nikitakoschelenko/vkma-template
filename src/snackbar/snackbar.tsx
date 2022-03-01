import { type FC } from 'preact/compat';
import { useVKPlatform } from '@itznevikat/router';
import { type SnackbarProps, Snackbar, Platform, VKCOM } from '@vkontakte/vkui';
import { classNamesString } from '@vkontakte/vkui/dist/lib/classNames';
import {
  Icon20CancelCircleFillRed,
  Icon20CheckCircleFillGreen
} from '@vkontakte/icons';

import { setSnackbar } from './store';

import { snackbarMobile } from './snackbar.module.css';

type BaseSnackbarProps = Omit<SnackbarProps, 'onClose'>;

export const BaseSnackbar: FC<BaseSnackbarProps> = ({ children, ...rest }) => {
  const platform: Platform = useVKPlatform();

  return (
    <Snackbar
      className={classNamesString(platform !== VKCOM && snackbarMobile)}
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
