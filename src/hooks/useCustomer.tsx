import * as React from 'react'
import { CustomerContext } from '../contexts/CustomerContext'
import * as customerService from '../services/customer'
import { CreateCustomer } from '../types'

export default function useCustomer() {
	const context = React.useContext(CustomerContext)
	const { customer, setCustomer } = context
	const [loading, setLoading] = React.useState(false)

	if (context === undefined) throw new Error('useCustomer must be used within a CustomerProvider')

	React.useEffect(() => {
		if(!customer) {
			fetchCustomer()
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const fetchCustomer = async () => {
		try {
			setLoading(true)
			const { data } = await customerService.getCustomer()
			setCustomer(data)
			setLoading(false)
		} catch (error) {
			setLoading(false)
		}
	}

	const createCustomer = async (customer: CreateCustomer) => {
		try {
			setLoading(true)
			const { data } = await customerService.createCustomer(customer)
			if (data) {
				await fetchCustomer()
			}
			setLoading(false)
		} catch (error) {
			setLoading(false)
		}
	}

	return { customer, loading, createCustomer }
}
