import { config } from '../config'
import axios from 'axios'
import { CreateOrder, OrderResponse, OrdersResponse } from '../types'

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
  console.log(data.message)
  return data
}

export const createOrder = async (order: CreateOrder) => {
  const token = window.localStorage.getItem('jwt')
  const newOrder = { ...order, containers: order.containers.map(container => {
    const { id, ...rest } = container
    return rest
  })}
  const { data } = await axios.post<OrderResponse>(config.backendURL + '/order', newOrder, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  console.log(data.message)
  return data
}