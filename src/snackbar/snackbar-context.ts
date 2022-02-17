import { type ReactNode, createContext, useContext } from 'react';

export type SnackbarValue = ReactNode | null;

export const SnackbarContext = createContext<{
  snackbar: SnackbarValue;
  openSnackbar: (snackbar: SnackbarValue) => void;
}>({
  snackbar: null,
  openSnackbar: () => void 0
});

export const useSnackbar = () => useContext(SnackbarContext);
