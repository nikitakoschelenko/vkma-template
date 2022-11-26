import { FC, useEffect, useState } from 'react'

import { send, subscribe } from '@vkontakte/vk-bridge'
import type { AppearanceType, VKUpdateConfigData } from '@vkontakte/vk-bridge'
import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  Platform,
  WebviewType
} from '@vkontakte/vkui'

import { Layout, SnackbarProvider, UserProvider } from '../'
import { currentPlatform } from '../../utils'

import '@vkontakte/vkui/dist/vkui.css'
import './app.css'

export const App: FC = () => {
  const [platform, setPlatform] = useState<Platform>(currentPlatform)
  const [appearance, setAppearance] = useState<AppearanceType>()

  useEffect(() => {
    const updateAppearance = (config: VKUpdateConfigData) => {
      if (config.appearance) {
        setAppearance(config.appearance)
      }
    }

    send('VKWebAppGetConfig').then((config) => {
      updateAppearance(config as VKUpdateConfigData)

      subscribe(({ detail: { type, data } }) => {
        if (type === 'VKWebAppUpdateConfig') {
          updateAppearance(data as VKUpdateConfigData)
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
