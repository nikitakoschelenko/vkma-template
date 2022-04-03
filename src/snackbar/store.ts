import { atom } from '@mntm/precoil';

export type SnackbarValue = JSX.Element | null;

export const snackbarAtom = atom<SnackbarValue>(null);

export const setSnackbar = (snackbar: SnackbarValue) =>
  snackbarAtom.set(snackbar);
