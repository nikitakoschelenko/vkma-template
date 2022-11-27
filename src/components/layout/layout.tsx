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
  VKCOM,
  usePlatform
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
  const platform = usePlatform()
  const { popout } = useParams()
  const { snackbar } = useSnackbar()

  return (
    <Match fallbackURL="/404">
      <SplitLayout
        header={platform !== VKCOM && <PanelHeader separator={false} />}
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
          spaced={platform === VKCOM}
          animate={platform !== VKCOM}
          width={platform === VKCOM ? '650px' : '100%'}
          maxWidth={platform === VKCOM ? '650px' : '100%'}
        >
          <Epic
            nav="/"
            tabbar={
              platform !== VKCOM && (
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

        {platform === VKCOM && (
          <LayoutSidebar>
            <Nav />
          </LayoutSidebar>
        )}
      </SplitLayout>
    </Match>
  )
}
