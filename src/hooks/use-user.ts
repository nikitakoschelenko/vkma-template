import { useContext } from 'react'

import { UserContext } from '../contexts'

export const useUser = () => useContext(UserContext)
