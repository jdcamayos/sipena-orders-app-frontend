import * as React from 'react'
import { OrderContext } from '../contexts/OrderContext'
import { CreateContainer, ListItemCreateContainer } from '../types'


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
        {
          id: prev.containers.length === 0
            ? prev.containers.length
            : prev.containers[prev.containers.length - 1].id + 1,
          ...container
        }
      ]
    }))
  }

  const editContainer = (container: ListItemCreateContainer) => {
    return setOrder(prev => ({
      ...prev,
      containers: [
        ...prev.containers.filter(c => c.id !== container.id),
        container
      ].sort((a,b) => a.id - b.id)
    }))
  }

  const removeContainer = (id: number) => {
    return setOrder(prev => ({
      ...prev,
      containers: [
        ...prev.containers.filter(c => c.id !== id)
      ]
    }))
  }

  return { order, setDate, addContainer, editContainer, removeContainer }
}