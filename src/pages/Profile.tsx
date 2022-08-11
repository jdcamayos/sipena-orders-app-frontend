import * as React from 'react'
import DashboardLayout from '../components/dashboard/DashboardLayout'
import CustomerForm from '../components/misc/CustomerForm'
import CustomerInfo from '../components/misc/CustomerInfo'
import useAuth from '../hooks/useAuth'
import useCustomer from '../hooks/useCustomer'
// MUI Styles
import Avatar from '@mui/material/Avatar'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import UserInfo from '../components/misc/UserInfo'

export default function Profile() {
	const { auth } = useAuth()
	const { customer } = useCustomer()

	const customerSection = () => {
		if (customer === null)
			return (
				<Grid item xs={12} sx={{ display: 'grid', placeContent: 'center', py: 2  }}>
					<CustomerForm />
				</Grid>
			)

		return <CustomerInfo initialValues={customer} />
	}

	return (
		<DashboardLayout>
			<Paper sx={{ p: 3 }}>
				<Grid container maxWidth='lg'>
					<Grid item xs={12} md={6} sx={{ display: 'grid', placeContent: 'center' }}>
						<Avatar
							alt='Remy Sharp'
							sx={{
								width: { xs: 120, md: 200 },
								height: { xs: 120, md: 200 },
							}}
						/>
					</Grid>
					{auth.user && <UserInfo user={auth.user} />}
					{auth.user?.role === 'customer' && customerSection()}
				</Grid>
			</Paper>
		</DashboardLayout>
	)
}
