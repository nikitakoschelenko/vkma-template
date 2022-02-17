import {
  type VKBridgeEvent,
  isEmbedded,
  send,
  subscribe
} from '@vkontakte/vk-bridge';

export const initVKBridge = (): void => {
  const root: HTMLElement = document.getElementById('root')!;
  if (isEmbedded()) root.style.opacity = '0';

  subscribe((e: VKBridgeEvent<any>) => {
    switch (e.detail.type) {
      case 'VKWebAppUpdateConfig': {
        const scheme: string = e.detail.data.scheme || 'client_light';
        document.body.setAttribute('scheme', scheme);

        root.style.opacity = '1';

        break;
      }
      default:
        return;
    }
  });
  send('VKWebAppInit');
};
