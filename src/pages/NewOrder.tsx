import * as React from 'react'
import DashboardLayout from '../components/dashboard/DashboardLayout'
// MUI Styles
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
// Date Picker
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
// import ContainerInput from '../components/dashboard/ContainerInput'
import ContainersTable from '../components/tables/ContainersTable'
// import { CreateContainer } from '../types'
// import OrderProvider from '../contexts/OrderContext'
import useCreateOrder from '../hooks/useCreateOrder'
import ContainerForm from '../components/forms/ContainerForm'

export default function NewOrder() {
	const { order, setDate } = useCreateOrder()
	const { containers, date } = order

	// const initialContainer: CreateContainer = {
	// 	type: '20ft',
	// 	contain: '',
	// 	productQuantity: 0,
	// 	productWeight: 0,
	// 	forkliftOperator: false,
	// 	stretchWrap: false,
	// 	additionalInfo: '',
	// }

	const dateHandleChange = (value: Date | null) => {
		if (value instanceof Date) {
			setDate(value)
		} else {
			setDate(new Date())
		}
	}

	return (
		<DashboardLayout>
			<Paper sx={{ p: 2 }}>
				<Typography variant='h5' align='center'>
					New order
				</Typography>
				<Grid container spacing={3} sx={{ my: 2 }}>
					<Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<MobileDatePicker
								label='Date'
								value={date}
								onChange={dateHandleChange}
								renderInput={params => <TextField variant='standard' {...params} />}
							/>
						</LocalizationProvider>
					</Grid>
					<Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<ContainerForm />
						{/* <ContainerInput /> */}
					</Grid>
					<Grid item xs={12}>
						<ContainersTable containers={containers} />
					</Grid>
				</Grid>
			</Paper>
		</DashboardLayout>
	)
}
