import { config } from '../config'
import axios from 'axios'
import { CreateCustomer, CustomerResponse, UpdateCustomer } from '../types'

export const getCustomer = async () => {
	const token = window.localStorage.getItem('jwt')
	const { data } = await axios.get<CustomerResponse>(
    config.backendURL + '/customer',
    {
		  headers: {
			  authorization: `Bearer ${token}`,
		  },
	  }
  )
	console.log(data.message)
	return data
}

export const createCustomer = async (customer: CreateCustomer) => {
	const token = window.localStorage.getItem('jwt')
	console.log(token)
	const { data } = await axios.post<CustomerResponse>(
    config.backendURL + '/customer',
    customer,
    {
		  headers: {
			  authorization: `Bearer ${token}`,
		  },
	  }
  )
	console.log(data.message)
	return data
}

export const updateCustomer = async (customer: UpdateCustomer) => {
	const token = window.localStorage.getItem('jwt')
	const { data } = await axios.post<CustomerResponse>(config.backendURL + '/customer', 
    customer,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  )
	console.log(data.message)
	return data
}
