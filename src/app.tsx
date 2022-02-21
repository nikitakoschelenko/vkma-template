import '@vkontakte/vkui/dist/vkui.css';
import '@vkontakte/vkui/dist/unstable.css';
import '@/app.css';

import { type FC } from 'react';
import { AdaptivityProvider } from '@vkontakte/vkui';

import { Layout } from '@/layout';

export const App: FC = () => (
  <AdaptivityProvider>
    <Layout />
  </AdaptivityProvider>
);
