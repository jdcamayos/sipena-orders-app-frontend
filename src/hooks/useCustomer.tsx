import * as React from 'react'
import * as customerService from '../services/customer'
import { Customer } from '../types'

export default function useCustomer() {
	const [customer, setCustomer] = React.useState<Customer | null>(null)
	const [loading, setLoading] = React.useState(false)

	React.useEffect(() => {
		fetchCustomer()
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

	return { customer, loading }
}
