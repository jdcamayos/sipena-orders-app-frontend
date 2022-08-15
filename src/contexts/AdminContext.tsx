import * as React from 'react'
import { AdminUser } from '../types'

type AdminContextType = {
  users: AdminUser[]
  setUsers: React.Dispatch<React.SetStateAction<AdminUser[]>>
}

export const AdminContext = React.createContext<AdminContextType>({} as AdminContextType)

type Props = {
  children: React.ReactNode
}

export default function AdminProvider(props: Props) {
  const [users, setUsers] = React.useState<AdminUser[]>([] as AdminUser[])

  return (
    <AdminContext.Provider value={{ users, setUsers }}>
      {props.children}
    </AdminContext.Provider>
  )
}