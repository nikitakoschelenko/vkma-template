import { UserInfo } from '@vkontakte/vk-bridge'
import { createContext } from 'react'

export const UserContext = createContext<{
  user: UserInfo | null
  setUser: (newUser: UserInfo | null) => void
}>({
  user: null,
  setUser: () => void 0
})
