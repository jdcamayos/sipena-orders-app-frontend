import * as React from 'react'
import * as orderService from '../services/order'
import { Meta, OrderResponseArray } from '../types'

export default function useOrders() {
	const [orders, setOrders] = React.useState<OrderResponseArray[]>([] as OrderResponseArray[])
	const [loading, setLoading] = React.useState(false)
	const [meta, setMeta] = React.useState({} as Meta)

	React.useEffect(() => {
		fetchOrders()
	}, [])

	const fetchOrders = async () => {
		try {
			setLoading(true)
			const { data, meta } = await orderService.getOrders()
			setOrders(data)
			setMeta(meta)
			setLoading(false)
		} catch (error) {
			setLoading(false)
		}
	}

	return { orders, loading, meta }
}
