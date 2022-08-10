import * as React from 'react'
import DashboardLayout from '../components/dashboard/DashboardLayout'
import OrdersTable from '../components/dashboard/OrdersTable'
import useOrder from '../hooks/useOrder'

export default function Home() {
	const { orders, loading } = useOrder()
	console.log(orders)
	return (
		<DashboardLayout>
			{loading && "Loading..." }
			{/* {!!orders.length && orders.map(order => <div key={order.id}>{JSON.stringify(order)}</div>)} */}
			<OrdersTable orders={orders} />
		</DashboardLayout>
	)
}
