import { User } from "./user"

export interface Worker {
  id: string
  createdAt: Date | string
  updatedAt: Date | string
  assignedBy: string
  orderId: string
  userId: string
  user: User
}