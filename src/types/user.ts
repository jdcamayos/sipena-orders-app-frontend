export interface User {
	id: string
	createdAt: string | Date
	updatedAt: string | Date
	email: string
	role: 'admin' | 'customer' | 'worker'
}