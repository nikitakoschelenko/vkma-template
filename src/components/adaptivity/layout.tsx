import { FC } from 'react';
import { Epic, Match } from '@itznevikat/router';
import { useAtomValue } from '@mntm/precoil';
import {
  PanelHeader,
  SplitCol,
  SplitLayout,
  SplitLayoutProps,
  ViewWidth,
  useAdaptivity
} from '@vkontakte/vkui';

import { SnackbarValue, snackbarAtom } from '@/components/snackbar';

import { AdaptivitySidebar } from './sidebar';
import { AdaptivityTabbar } from './tabbar';

import styles from './layout.module.css';

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
  const { viewWidth } = useAdaptivity();

  const snackbar: SnackbarValue = useAtomValue(snackbarAtom);
  const desktop: boolean = viewWidth >= ViewWidth.SMALL_TABLET;

  return (
    <Match initialURL="/" fallbackURL="/404">
      <SplitLayout
        header={!desktop && <PanelHeader separator={false} />}
        className={styles.layout}
        {...rest}
      >
        <SplitCol
          spaced={desktop}
          animate={!desktop}
          width={desktop ? '650px' : '100%'}
          maxWidth={desktop ? '650px' : '100%'}
        >
          <Epic
            nav="/"
            tabbar={
              !desktop && buttons && <AdaptivityTabbar buttons={buttons} />
            }
          >
            {children}
          </Epic>

          {snackbar}
        </SplitCol>

        {desktop && buttons && <AdaptivitySidebar buttons={buttons} />}
      </SplitLayout>
    </Match>
  );
};
