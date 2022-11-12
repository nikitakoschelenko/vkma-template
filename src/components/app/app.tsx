import { FC, useEffect, useState } from 'react'

import { VKUpdateConfigData, send, subscribe } from '@vkontakte/vk-bridge'
import {
  AdaptivityProvider,
  AppRoot,
  Appearance,
  ConfigProvider,
  Platform,
  WebviewType
} from '@vkontakte/vkui'

import { Layout, SnackbarProvider, UserProvider } from "../";
import { currentPlatform } from '../../utils'

import '@vkontakte/vkui/dist/vkui.css'
import './app.css'

export const App: FC = () => {
  const [platform, setPlatform] = useState<Platform>(currentPlatform)
  const [appearance, setAppearance] = useState<Appearance>()

  useEffect(() => {
    const updateConfig = ({
      appearance
    }: VKUpdateConfigData & { appearance?: Appearance }) => {
      if (appearance) {
        setAppearance(appearance)
      }
    }

    send('VKWebAppGetConfig').then((config) => {
      updateConfig(config as VKUpdateConfigData)

      subscribe(({ detail: { type, data } }) => {
        if (type === 'VKWebAppUpdateConfig') {
          updateConfig(data as VKUpdateConfigData)
        }
      })
    })

    send('VKWebAppInit')
  }, [])

  useEffect(() => {
    const onResize = () => {
      setPlatform(currentPlatform)
    }

    window.addEventListener('resize', onResize, false)
    return () => {
      window.removeEventListener('resize', onResize, false)
    }
  }, [])

  return (
    <ConfigProvider
      platform={platform}
      appearance={appearance}
      webviewType={
        platform === Platform.VKCOM ? WebviewType.INTERNAL : WebviewType.VKAPPS
      }
    >
      <AdaptivityProvider>
        <AppRoot noLegacyClasses>
          <SnackbarProvider>
            <UserProvider>
              <Layout />
            </UserProvider>
          </SnackbarProvider>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  )
}
