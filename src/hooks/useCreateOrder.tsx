import * as React from 'react'
import { OrderContext } from '../contexts/OrderContext'
import { CreateContainer } from '../types'


export default function useCreateOrder() {
  const context = React.useContext(OrderContext)
  const { order, setOrder } = context

  if (context === undefined) throw new Error('useCreateOrder must be used within a OrderProvider')

  const setDate = (date: string | Date) => {
    return setOrder(prev => ({
      ...prev,
      date: new Date(date)
    }))
  }

  const addContainer = (container: CreateContainer) => {
    return setOrder(prev => ({
      ...prev,
      containers: [
        ...prev.containers,
        container
      ]
    }))
  }

  return { order, setDate, addContainer }
}