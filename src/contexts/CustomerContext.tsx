import * as React from 'react'
import { Customer } from '../types'

type CustomerContextType = {
  customer: Customer | null
  setCustomer: React.Dispatch<React.SetStateAction<Customer | null>>
}

export const CustomerContext = React.createContext<CustomerContextType>({} as CustomerContextType)

type Props = {
  children: React.ReactNode
}

export default function CustomerProvider(props: Props) {
  const [customer, setCustomer] = React.useState<Customer | null>(null)

  return (
    <CustomerContext.Provider value={{ customer, setCustomer }}>
      {props.children}
    </CustomerContext.Provider>
  )
}