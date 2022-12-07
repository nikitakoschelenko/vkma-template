import { FC } from 'react'

import {
  Epic,
  Match,
  ModalRoot,
  View,
  matchPopout,
  useParams
} from '@itznevikat/router'
import {
  PanelHeader,
  Platform,
  ScreenSpinner,
  SplitCol,
  SplitLayout,
  usePlatform
} from '@vkontakte/vkui'

import { Components, Fallback, Home, Info, Persik } from '../../pages'
import { TestModalCard } from '../../modals'
import { TestActionSheet, TestAlert } from '../../popouts'
import { useSnackbar } from '../../hooks'

import { LayoutNav } from './nav'
import { LayoutSidebar } from './sidebar'
import { LayoutTabbar } from './tabbar'

import './layout.css'

export const Layout: FC = () => {
  const platform = usePlatform()
  const { popout } = useParams()
  const { snackbar } = useSnackbar()

  return (
    <Match fallbackURL="/404">
      <SplitLayout
        header={
          platform !== Platform.VKCOM && <PanelHeader separator={false} />
        }
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
      >
        <SplitCol autoSpaced width={650} maxWidth={650}>
          <Epic
            nav="/"
            tabbar={
              platform !== Platform.VKCOM && (
                <LayoutTabbar>
                  <LayoutNav mode="tabbarItem" />
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

        {platform === Platform.VKCOM && (
          <LayoutSidebar>
            <LayoutNav mode="cell" />
          </LayoutSidebar>
        )}
      </SplitLayout>
    </Match>
  )
}
