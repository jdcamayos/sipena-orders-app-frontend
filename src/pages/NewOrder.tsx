import * as React from 'react'
// MUI Styles
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import SendIcon from '@mui/icons-material/Send'
// Date Picker
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
// Components
import DashboardLayout from '../components/dashboard/DashboardLayout'
import ContainersTable from '../components/tables/ContainersTable'
import ContainerForm from '../components/forms/ContainerForm'
import useCreateOrder from '../hooks/useCreateOrder'
import { createOrder } from '../services'
import { useNavigate } from 'react-router-dom'

export default function NewOrder() {
	const { order, setDate } = useCreateOrder()
	const { containers, date } = order
	const navigate = useNavigate()

	const dateHandleChange = (value: Date | null) => {
		if (value instanceof Date) {
			setDate(value)
		} else {
			setDate(new Date())
		}
	}

	const handleSubmit = async () => {
		await createOrder(order)
		navigate('/')
	}

	return (
		<DashboardLayout>
			<Paper sx={{ p: 2 }}>
				<Grid container spacing={3} sx={{ my: 2 }}>
					<Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
						<IconButton>
							<ArrowBackIcon />
						</IconButton>
						<Typography variant='h5' align='center'>
							New order
						</Typography>
						<Button variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}>
							Send Order
						</Button>
					</Grid>
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
					</Grid>
					<Grid item xs={12}>
						<ContainersTable containers={containers} />
					</Grid>
				</Grid>
			</Paper>
		</DashboardLayout>
	)
}
