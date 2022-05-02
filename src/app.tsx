import { FC, useEffect, useState } from 'react';
import { send, subscribe } from '@vkontakte/vk-bridge';
import {
  AdaptivityProvider,
  AppRoot,
  Appearance,
  ConfigProvider,
  Platform,
  WebviewType,
  platform
} from '@vkontakte/vkui';
import { SMALL_TABLET_SIZE } from '@vkontakte/vkui/dist/components/AdaptivityProvider/AdaptivityProvider';

import { Layout } from '@/layout';

import '@/app.css';
import '@vkontakte/vkui/dist/vkui.css';

export const App: FC = () => {
  const [platform, setPlatform] = useState<Platform>(currentPlatform);
  const [appearance, setAppearance] = useState<Appearance>();

  useEffect(() => {
    function updateAppearance(data: { appearance?: string; scheme?: string }) {
      if (data.appearance) {
        setAppearance(data.appearance as Appearance);
      } else if (data.scheme) {
        // https://github.com/VKCOM/vk-bridge/issues/299
        document.body.setAttribute('scheme', data.scheme as string);
      }
    }

    send('VKWebAppGetConfig').then((config) => {
      updateAppearance(config);

      subscribe(({ detail: { type, data } }) => {
        if (type === 'VKWebAppUpdateConfig') updateAppearance(data);
      });
    });

    send('VKWebAppInit');
  }, []);

  useEffect(() => {
    function onResize(): void {
      setPlatform(currentPlatform);
    }

    window.addEventListener('resize', onResize, false);
    return () => window.removeEventListener('resize', onResize, false);
  }, []);

  return (
    <ConfigProvider
      platform={platform}
      appearance={appearance}
      webviewType={
        platform === Platform.VKCOM ? WebviewType.INTERNAL : WebviewType.VKAPPS
      }
    >
      <AdaptivityProvider>
        <AppRoot noLegacyClasses>
          <Layout />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

function currentPlatform(): Platform {
  if (window.innerWidth >= SMALL_TABLET_SIZE) return Platform.VKCOM;

  return platform() as Platform;
}
