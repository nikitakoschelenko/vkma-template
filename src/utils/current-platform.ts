import { Platform, platform } from '@vkontakte/vkui'
import { SMALL_TABLET_SIZE } from '@vkontakte/vkui/dist/components/AdaptivityProvider/AdaptivityProvider'

export const currentPlatform = () => {
  if (
    window.innerWidth >= SMALL_TABLET_SIZE &&
    window.matchMedia('(orientation: landscape)').matches
  )
    return Platform.VKCOM

  return platform() as Platform
}
