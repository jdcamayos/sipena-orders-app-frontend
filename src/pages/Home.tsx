import * as React from 'react'
// MUI Styles
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
// Others
import DashboardLayout from '../components/dashboard/DashboardLayout'
import OrdersTable from '../components/tables/OrdersTable'
import useCustomer from '../hooks/useCustomer'
import CustomerForm from '../components/forms/CustomerForm'

export default function Home() {
	const { customer, loading } = useCustomer()

	if (loading) return (
		<Backdrop
			sx={{ color: 'primary.ligth', zIndex: (theme) => theme.zIndex.drawer + 1 }}
			open={loading}
			// onClick={handleClose}
		>
			<CircularProgress color="inherit" />
		</Backdrop>
	)

	return (
		<DashboardLayout>
			{!customer && (
				<Paper sx={{ p: 2 }}>
					<Typography variant="h5" fontWeight="bold" align="center" sx={{ marginBottom: 2 }}>Welcome,</Typography>
					<Typography variant="body1" align="center">
						to create your first order, you need to create a profile.
					</Typography>
					<Grid item xs={12} sx={{ display: 'grid', placeContent: 'center', py: 2  }}>
						<CustomerForm />
					</Grid>
				</Paper>
			)}
			{!!customer && <OrdersTable />}
		</DashboardLayout>
	)
}
