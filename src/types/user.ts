export interface User {
	id: string
	createdAt: string | Date
	updatedAt: string | Date
	email: string
	role: 'admin' | 'customer' | 'worker'
}

export interface AdminUser extends User {
	blocked: boolean
}

export interface UpdateAdminUser extends Omit<AdminUser, 'id' | 'createdAt' | 'updatedAt'> {}