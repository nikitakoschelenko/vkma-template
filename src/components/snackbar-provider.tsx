import { FC, ReactNode, useState } from 'react'

import { SnackbarContext } from '../contexts'

type SnackbarProviderProps = {
  children: ReactNode
}

export const SnackbarProvider: FC<SnackbarProviderProps> = ({ children }) => {
  const [snackbar, setSnackbar] = useState<ReactNode | null>(null)

  return (
    <SnackbarContext.Provider value={{ snackbar, setSnackbar }}>
      {children}
    </SnackbarContext.Provider>
  )
}
