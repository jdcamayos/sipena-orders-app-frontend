import axios from "axios"
import { config } from "../config"
import { AdminUserArrayResponse, AdminUserResponse, UpdateAdminUser } from "../types"

export const getUsers = async () => {
  const token = window.localStorage.getItem('jwt')
  const { data } = await axios.get<AdminUserArrayResponse>(
    config.backendURL + '/user',
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  )
  console.log(data.message)
  return data
}

export const updateUser = async (id: string, user: UpdateAdminUser) => {
  const { role, blocked } = user
  const updateData = { role, blocked }
  const token = window.localStorage.getItem('jwt')
  const { data } = await axios.put<AdminUserResponse>(
    config.backendURL + '/user/' + id,
    updateData,
    {
      headers: {
        authorization: `Bearer ${token}`,
      }
    }
  )
  return data
}