import { FC } from 'react'

import {
  Icon20CancelCircleFillRed,
  Icon20CheckCircleFillGreen
} from '@vkontakte/icons'
import { Snackbar, SnackbarProps } from '@vkontakte/vkui'

import { useSnackbar } from '../../hooks'

import './snackbar.css'

type ParentSnackbarProps = Omit<SnackbarProps, 'onClose'>

export const ParentSnackbar: FC<ParentSnackbarProps> = ({
  children,
  ...rest
}) => {
  const { setSnackbar } = useSnackbar()

  return (
    <Snackbar onClose={() => setSnackbar(null)} {...rest}>
      {children}
    </Snackbar>
  )
}

export const SuccessSnackbar: FC<ParentSnackbarProps> = ({
  children,
  ...rest
}) => (
  <ParentSnackbar
    before={<Icon20CheckCircleFillGreen width={24} height={24} />}
    {...rest}
  >
    {children}
  </ParentSnackbar>
)

export const ErrorSnackbar: FC<ParentSnackbarProps> = ({
  children,
  ...rest
}) => (
  <ParentSnackbar
    before={<Icon20CancelCircleFillRed width={24} height={24} />}
    {...rest}
  >
    {children}
  </ParentSnackbar>
)
