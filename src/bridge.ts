import { isEmbedded, send } from '@vkontakte/vk-bridge';

export const initVKBridge = (): void => {
  if (!isEmbedded()) return;

  const root: HTMLElement = document.getElementById('root')!;
  root.style.opacity = '0';

  send('VKWebAppGetConfig').then(({ scheme }) => {
    document.body.setAttribute('scheme', scheme as string);

    root.style.opacity = '1';
  });
  send('VKWebAppInit');
};
