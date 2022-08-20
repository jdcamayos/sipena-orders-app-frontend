import { config } from '../config'
import axios from 'axios'
import { AttachmentResponse } from '../types'

export const addAttachment = async (orderId: string, formData: FormData) => {
  const token = window.localStorage.getItem('jwt')
  const { data } = await axios.post<AttachmentResponse>(
    config.backendURL + '/order/' + orderId + '/attachment',
    formData,
    {
      headers: {
        authorization: `Bearer ${token}`
      }
    }
  )
  console.log(data.message)
  return data
}
