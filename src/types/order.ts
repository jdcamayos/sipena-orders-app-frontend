import { Attachment } from "./attachment"
import { Container } from "./container"
import { Worker } from "./worker"

export interface Order {
  id: string
  createdAt: Date | string
  updatedAt: Date | string
  date: Date | string
  customerId: string
}

export interface OrderResponseArray extends Order {
  _count: {
    containers: number
    workers: number
  }
}

export interface OrderComplete extends Order {
  containers: Container[]
  workers: Worker[]
  attachments: Attachment[]
}