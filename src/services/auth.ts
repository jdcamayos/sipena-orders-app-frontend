import { config } from "../config"
import axios from 'axios'
import type { Credentials } from "../types"
import { AuthResponse, MeResponse } from "../types/response"

export const signIn = async (credentials: Credentials) => {
  const { data } = await axios.get<AuthResponse>(config.backendURL + '/auth/sign-in', {
    auth: {
      username: credentials.email,
      password: credentials.password
    }
  })
  console.log(data.message)
  return data
}

export const signUp = async (credentials: Credentials) => {
  const { data } = await axios.post<AuthResponse>(config.backendURL + '/auth/sign-up', {
    email: credentials.email,
    password: credentials.password
  })
  console.log(data.message)
  return data
}

export const getMe = async (token: string) => {
  const { data } = await axios.get<MeResponse>(config.backendURL + '/auth/me', {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  console.log(data.message)
  return data
}
