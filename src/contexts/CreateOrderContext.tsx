import * as React from 'react'
import { CreateOrder } from '../types'

type CreateOrderContextType = {
  order: CreateOrder
  setOrder: React.Dispatch<React.SetStateAction<CreateOrder>>
}

export const CreateOrderContext = React.createContext<CreateOrderContextType>({} as CreateOrderContextType)

type Props = {
  children: React.ReactNode
}

const initialState: CreateOrder = {
  date: new Date(),
  containers: []
}

export default function CreateOrderProvider(props: Props) {
  const [order, setOrder] = React.useState<CreateOrder>(initialState)

  return (
    <CreateOrderContext.Provider value={{ order, setOrder }}>
      {props.children}
    </CreateOrderContext.Provider>
  )
}