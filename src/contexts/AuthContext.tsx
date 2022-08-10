import { createContext, ReactNode, useState } from 'react'
import { User } from '../types'

type Auth = {
  isAuth: boolean,
  token: string | null,
  user: User | null
}

type AuthContextType = {
  auth: Auth
  setAuth: React.Dispatch<React.SetStateAction<Auth>>
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

type Props = {
  children: ReactNode
}

const initialState: Auth = {
  isAuth: false,
  token: null,
  user: null
}

export default function AuthProvider(props: Props) {
  const [auth, setAuth] = useState<Auth>(initialState)

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  )
}