export interface Attachment {
  id: string
  createdAt: Date | string
  updatedAt: Date | string
  uploadBy: string
  fieldname: string
  originalname: string
  encoding: string
  mimetype: string
  size: number
  destination: string
  filename: string
  path: string
  isDelete: boolean
  orderId: string
}