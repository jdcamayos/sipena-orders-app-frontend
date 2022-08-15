import axios from "axios"
import { config } from "../config"
import { AdminUserResponse } from "../types"

export const getUsers = async () => {
  const token = window.localStorage.getItem('jwt')
  const { data } = await axios.get<AdminUserResponse>(
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

export const updateUser = async () => {
  const token = window.localStorage.getItem('jwt')
  const { data } = await axios.get(
    config.backendURL + '/user',
    {
      headers: {
        authorization: `Bearer ${token}`,
      }
    }
  )
  return data
}