import '@vkontakte/vkui/dist/vkui.css';
import '@vkontakte/vkui/dist/unstable.css';
import '@/app.css';

import { type FC, useState } from 'react';
import {
  ConfigProvider,
  AdaptivityProvider,
  AppRoot,
  PlatformType,
  WebviewType,
  VKCOM
} from '@vkontakte/vkui';
import { useVKPlatform } from '@itznevikat/router';

import { Layout } from '@/layout';
import { SnackbarContext, SnackbarValue } from '@/snackbar';

export const App: FC = () => {
  const platform: PlatformType = useVKPlatform();

  const [snackbar, openSnackbar] = useState<SnackbarValue>(null);

  return (
    <ConfigProvider
      platform={platform}
      webviewType={
        platform === VKCOM ? WebviewType.INTERNAL : WebviewType.VKAPPS
      }
    >
      <AdaptivityProvider>
        <AppRoot>
          <SnackbarContext.Provider value={{ snackbar, openSnackbar }}>
            <Layout />
          </SnackbarContext.Provider>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
