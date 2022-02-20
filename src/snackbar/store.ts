import { type ReactNode } from 'react';
import { atom } from '@mntm/precoil';

export type SnackbarValue = ReactNode | null;

export const snackbarAtom = atom<SnackbarValue>(null);

export const setSnackbar = (snackbar: SnackbarValue) =>
  snackbarAtom.set(snackbar);
