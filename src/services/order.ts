import { config } from '../config'
import axios from 'axios'
import { OrderResponse, OrdersResponse } from '../types'

export const getOrders = async () => {
  const token = window.localStorage.getItem('jwt')
  const { data } = await axios.get<OrdersResponse>(config.backendURL + '/order', {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  console.log(data.message)
  return data
}

export const getOrderById = async (orderId: string) => {
  const token = window.localStorage.getItem('jwt')
  const { data } = await axios.get<OrderResponse>(config.backendURL + '/order/' + orderId, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  console.log(data.data)
  console.log(data.message)
  return data
}