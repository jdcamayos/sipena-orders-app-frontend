import * as React from 'react'
import * as orderService from '../services/order'
import { OrderComplete } from '../types'

export default function useOrder(orderId: string) {
  const [order, setOrder] = React.useState<OrderComplete | null>(null)
  const [loading, setLoading] = React.useState(false)

  console.log(orderId)

  React.useEffect(() => {
    if (!order) {
      fetchOrder(orderId)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchOrder = async (orderId: string) => {
    try {
      setLoading(true)
      const { data } = await orderService.getOrderById(orderId)
      setOrder(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const addWorkerToOrder = async (orderId: string, userId: string) => {
    try {
      setLoading(true)
      // TODO: Call service
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const addFileToOrder = async (file: any) => {
    try {
      setLoading(true)
      // TODO: Call service
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  return { order, loading, addWorkerToOrder, addFileToOrder }
}
