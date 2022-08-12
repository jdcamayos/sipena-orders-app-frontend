import * as React from 'react'
import { CreateOrder } from '../types'

type OrderContextType = {
  order: CreateOrder
  setOrder: React.Dispatch<React.SetStateAction<CreateOrder>>
}

export const OrderContext = React.createContext<OrderContextType>({} as OrderContextType)

type Props = {
  children: React.ReactNode
}

const initialState: CreateOrder = {
  date: new Date(),
  containers: []
}

export default function OrderProvider(props: Props) {
  const [order, setOrder] = React.useState<CreateOrder>(initialState)

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {props.children}
    </OrderContext.Provider>
  )
}