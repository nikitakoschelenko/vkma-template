import { useContext } from 'react'

import { SnackbarContext } from '../contexts'

export const useSnackbar = () => useContext(SnackbarContext)
