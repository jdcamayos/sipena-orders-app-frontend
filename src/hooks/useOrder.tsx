import { OrderContext } from '../contexts/OrderContext'
import * as attachmentService from '../services/attachment'
import * as orderService from '../services/order'
import * as React from 'react'

export default function useOrder(orderId?: string) {
	const context = React.useContext(OrderContext)
  const { order, setOrder } = context
	const [loading, setLoading] = React.useState(false)

  if (context === undefined) throw new Error('useOrder must be used within a OrderProvider')

	console.log(orderId)

	React.useEffect(() => {
		if (!order && orderId) {
			fetchOrder(orderId)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const fetchOrder = async (orderId: string) => {
		try {
			setLoading(true)
			const { data } = await orderService.getOrderById(orderId)
			setOrder(data)
			setLoading(false)
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	}

	const addWorkerToOrder = async (orderId: string, userId: string) => {
		try {
			setLoading(true)
			// TODO: Call service
			setLoading(false)
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	}

	const addFileToOrder = async (form: FormData) => {
		try {
			setLoading(true)
			if (!order) {
				setLoading(false)
				return
			}
			const { data } = await attachmentService.addAttachment(order.id, form)
			if (data) {
				fetchOrder(order.id)
			}
			setLoading(false)
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	}

	return { order, loading, addWorkerToOrder, addFileToOrder }
}
