import * as React from 'react'
import { OrderComplete } from '../types'

type OrderContextType = {
  order: OrderComplete | null,
  setOrder: React.Dispatch<React.SetStateAction<OrderComplete| null>>
}

export const OrderContext = React.createContext<OrderContextType>({} as OrderContextType)

type Props = {
  children: React.ReactNode
}

export default function OrderProvider(props: Props) {
  const [order, setOrder] = React.useState<OrderComplete | null>(null)

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {props.children}
    </OrderContext.Provider>
  )
}