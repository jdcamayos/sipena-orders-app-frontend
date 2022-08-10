import { Customer } from './customer'
import { OrderComplete, OrderResponseArray } from './order'
import { User } from './user'

interface Response {
	message: string
}

export interface Meta {
	pagination: {
		page: number,
		pageSize: number,
		pageCount: number,
		total: number
	}
}

export interface AuthResponse extends Response {
	data: {
		token: string
		user: User
	}
}

export interface MeResponse extends Response {
	data: User
}

export interface OrdersResponse extends Response {
	data: OrderResponseArray[],
	meta: Meta
}

export interface CustomerResponse extends Response {
	data: Customer
}

export interface OrderResponse extends Response {
	data: OrderComplete
}