import { type JSX, type FC } from 'preact/compat';
import { useAtomValue } from '@mntm/precoil';
import { Match, Epic, Root, useVKPlatform } from '@itznevikat/router';
import {
  type SplitLayoutProps,
  PanelHeader,
  Platform,
  SplitCol,
  SplitLayout,
  VKCOM
} from '@vkontakte/vkui';

import { snackbarAtom, SnackbarValue } from '@/snackbar';
import { AdaptivitySidebar } from './sidebar';
import { AdaptivityTabbar } from './tabbar';

import { layout } from './layout.module.css';

export type AdaptivityButton = {
  story: string;
  icon: JSX.Element;
  text: string;
};

type AdaptivityLayoutProps = SplitLayoutProps & {
  buttons?: AdaptivityButton[];
};

export const AdaptivityLayout: FC<AdaptivityLayoutProps> = ({
  children,
  buttons,
  ...rest
}) => {
  const platform: Platform = useVKPlatform();
  const snackbar: SnackbarValue = useAtomValue(snackbarAtom);

  return (
    <Match initialURL="/" fallbackURL="/404">
      <SplitLayout
        header={platform !== VKCOM && <PanelHeader separator={false} />}
        className={layout}
        {...rest}
      >
        <SplitCol
          spaced={platform === VKCOM}
          animate={platform !== VKCOM}
          width={platform === VKCOM ? '650px' : '100%'}
          maxWidth={platform === VKCOM ? '650px' : '100%'}
        >
          {platform === VKCOM ? (
            <Root nav="/">{children}</Root>
          ) : (
            <Epic
              nav="/"
              tabbar={buttons && <AdaptivityTabbar buttons={buttons} />}
            >
              {children}
            </Epic>
          )}

          {snackbar}
        </SplitCol>

        {platform === VKCOM && buttons && (
          <AdaptivitySidebar buttons={buttons} />
        )}
      </SplitLayout>
    </Match>
  );
};
