import '@vkontakte/vkui/dist/vkui.css';
import '@/app.css';

import { type FC, useState, useEffect } from 'preact/compat';
import { send, subscribe } from '@vkontakte/vk-bridge';
import {
  ConfigProvider,
  AdaptivityProvider,
  AppRoot,
  WebviewType,
  Platform,
  Appearance,
  platform,
  Scheme
} from '@vkontakte/vkui';
import { SMALL_TABLET_SIZE } from '@vkontakte/vkui/dist/components/AdaptivityProvider/AdaptivityProvider';

import { Layout } from '@/layout';

export const App: FC = () => {
  const [platform, setPlatform] = useState<Platform>(getPlatform);
  const [appearance, setAppearance] = useState<Appearance>();

  useEffect(() => {
    send('VKWebAppGetConfig').then(({ scheme }) => {
      function updateAppearance(scheme: unknown): void {
        const appearanceRec: Record<Scheme, Appearance> = {
          bright_light: Appearance.LIGHT,
          space_gray: Appearance.DARK,
          client_light: Appearance.LIGHT,
          client_dark: Appearance.DARK,
          vkcom: Appearance.LIGHT,
          vkcom_light: Appearance.LIGHT,
          vkcom_dark: Appearance.DARK
        };

        setAppearance(appearanceRec[scheme as Scheme] ?? Appearance.LIGHT);
      }
      updateAppearance(scheme);

      subscribe(({ detail: { type, data } }) => {
        if (type === 'VKWebAppUpdateConfig' && data.scheme)
          updateAppearance(data.scheme);
      });
    });

    send('VKWebAppInit');
  }, []);

  useEffect(() => {
    function onResize(): void {
      setPlatform(getPlatform);
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
        <AppRoot>
          <Layout />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

function getPlatform(): Platform {
  if (window.innerWidth >= SMALL_TABLET_SIZE) return Platform.VKCOM;

  return platform() as Platform;
}
