import { FC, Fragment } from 'react'

import {
  Epic,
  Match,
  ModalRoot,
  View,
  matchPopout,
  useParams
} from '@itznevikat/router'
import { Icon28HomeOutline, Icon28InfoOutline } from '@vkontakte/icons'
import {
  PanelHeader,
  ScreenSpinner,
  SplitCol,
  SplitLayout,
  ViewWidth,
  useAdaptivity
} from '@vkontakte/vkui'

import { Components, Fallback, Home, Info, Persik } from '../../pages'
import { TestModalCard } from '../../modals'
import { TestActionSheet, TestAlert } from '../../popouts'
import { useSnackbar } from '../../hooks'

import { LayoutButton } from './button'
import { LayoutSidebar } from './sidebar'
import { LayoutTabbar } from './tabbar'

const Nav: FC = () => (
  <Fragment>
    <LayoutButton story="/" before={<Icon28HomeOutline />}>
      Главная
    </LayoutButton>
    <LayoutButton story="/info" before={<Icon28InfoOutline />}>
      О приложении
    </LayoutButton>
  </Fragment>
)

export const Layout: FC = () => {
  const { viewWidth } = useAdaptivity()
  const { popout } = useParams()
  const { snackbar } = useSnackbar()

  const desktop = viewWidth >= ViewWidth.SMALL_TABLET

  return (
    <Match fallbackURL="/404">
      <SplitLayout
        header={!desktop && <PanelHeader separator={false} />}
        modal={
          <ModalRoot>
            <TestModalCard nav="test-modal-card" />
          </ModalRoot>
        }
        /* eslint-disable react/jsx-key */
        popout={matchPopout(popout, [
          <ScreenSpinner id="screen-spinner" />,
          <TestActionSheet nav="test-action-sheet" />,
          <TestAlert nav="test-alert" />
        ])}
        style={{
          justifyContent: 'center'
        }}
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
              !desktop && (
                <LayoutTabbar>
                  <Nav />
                </LayoutTabbar>
              )
            }
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
          </Epic>

          {snackbar}
        </SplitCol>

        {desktop && (
          <LayoutSidebar>
            <Nav />
          </LayoutSidebar>
        )}
      </SplitLayout>
    </Match>
  )
}
