import '@vkontakte/vkui/dist/vkui.css';
import '@/app.css';

import { type FC } from 'react';
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

export const App: FC = () => {
  const platform: PlatformType = useVKPlatform();

  return (
    <ConfigProvider
      platform={platform}
      webviewType={
        platform === VKCOM ? WebviewType.INTERNAL : WebviewType.VKAPPS
      }
    >
      <AdaptivityProvider>
        <AppRoot>
          <Layout />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
