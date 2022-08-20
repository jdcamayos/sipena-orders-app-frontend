import { Attachment } from "./attachment"
import { Container, ListItemCreateContainer } from "./container"
import { Customer } from "./customer"
import { Worker } from "./worker"

export interface Order {
  id: string
  createdAt: Date | string
  updatedAt: Date | string
  date: Date | string
  customerId: string
}

export interface OrderResponseArray extends Order {
  customer: Customer,
  _count: {
    attachments: number,
    containers: number
    workers: number,
  }
}

export interface OrderComplete extends Order {
  containers: Container[]
  workers: Worker[],
  attachments: Attachment[]
}


export interface CreateOrder extends Omit<Order, 'id' | 'createdAt' | 'updatedAt' | 'customerId'> {
  containers: ListItemCreateContainer[]
}