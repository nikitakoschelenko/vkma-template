import { type ReactElement, type FC } from 'react';
import { ModalRoot, useParams, View } from '@itznevikat/router';
import { ScreenSpinner } from '@vkontakte/vkui';
import { getNavId } from '@vkontakte/vkui/dist/lib/getNavId';
import { Icon28HomeOutline, Icon28InfoOutline } from '@vkontakte/icons';

import { AdaptivityLayout } from '@/adaptivity';
import {
  Home,
  Persik,
  Components,
  Fallback,
  TestModalCard,
  TestActionSheet,
  TestAlert
} from '@/home';
import { Info } from '@/info';

function matchPopout(popout: string | null, elements: ReactElement[]) {
  return popout
    ? elements.find(({ props }) => getNavId(props) === popout)
    : null;
}

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
