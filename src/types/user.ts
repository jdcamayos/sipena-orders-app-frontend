export interface User {
	id: string
	createdAt: string | Date
	updatedAt: string | Date
	email: string
	role: 'admin' | 'customer' | 'worker'
}

export interface AdminUser extends Omit<User, 'id' | 'createdAt' | 'updatedAt'> {
	blocked: boolean
}