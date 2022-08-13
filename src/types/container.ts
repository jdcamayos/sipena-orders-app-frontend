export interface Container {
  id: string
  createdAt: Date | string
  updatedAt: Date | string
  type: '20ft' | '40ft'
  contain: string
  productQuantity: number
  productWeight: number
  forkliftOperator: boolean
  stretchWrap: boolean
  additionalInfo: string
  orderId: string
}

export interface CreateContainer extends Omit<Container, 'id' | 'createdAt' | 'updatedAt' | 'orderId'> {}

export interface ListItemCreateContainer extends CreateContainer { id: number }

export interface UpdateCreateContainer extends Partial<ListItemCreateContainer> {}