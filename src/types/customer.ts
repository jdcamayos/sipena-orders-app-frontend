export interface Customer {
  id: string
  createdAt: Date | string
  updatedAt: Date | string
  companyName: string
  streetAddress: string
  city: string
  state: string
  postalCode: string
  phone: string
  userId: string
}

export interface CreateCustomer extends Omit<Customer, 'id' | 'createdAt' | 'updatedAt' | 'userId'> {}

export interface UpdateCustomer extends Partial<CreateCustomer> {}