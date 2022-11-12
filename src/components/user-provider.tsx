import { UserInfo } from '@vkontakte/vk-bridge'
import { FC, ReactNode, useState } from 'react'
import { UserContext } from '../contexts'

type UserProviderProps = {
  children: ReactNode
}

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserInfo | null>(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
