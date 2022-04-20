import { FC } from 'react';
import { ModalRoot, View, matchPopout, useParams } from '@itznevikat/router';
import { Icon28HomeOutline, Icon28InfoOutline } from '@vkontakte/icons';
import { ScreenSpinner } from '@vkontakte/vkui';

import { AdaptivityLayout } from '@/components';
import { TestModalCard } from '@/modals';
import { Components, Fallback, Home, Info, Persik } from '@/pages';
import { TestActionSheet, TestAlert } from '@/popouts';

/* eslint-disable react/jsx-key */
export const Layout: FC = () => {
  const { popout = null } = useParams();

  return (
    <AdaptivityLayout
      modal={
        <ModalRoot>
          <TestModalCard nav="test-modal-card" />
        </ModalRoot>
      }
      popout={matchPopout(popout, [
        <ScreenSpinner id="screen-spinner" />,
        <TestActionSheet nav="test-action-sheet" />,
        <TestAlert nav="test-alert" />
      ])}
      buttons={[
        {
          icon: <Icon28HomeOutline />,
          story: '/',
          text: 'Главная'
        },
        {
          icon: <Icon28InfoOutline />,
          story: '/info',
          text: 'О приложении'
        }
      ]}
    >
      <View nav="/">
        <Home nav="/" />
        <Persik nav="/persik" />
        <Components nav="/components" />

        <Fallback nav="/404" />
      </View>

      <View nav="/info">
        <Info nav="/" />
      </View>
    </AdaptivityLayout>
  );
};
