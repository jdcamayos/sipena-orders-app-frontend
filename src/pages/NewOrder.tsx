import * as React from 'react'
// MUI Styles
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
// Date Picker
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
// Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import SendIcon from '@mui/icons-material/Send'
// Others
import { createOrder } from '../services'
import { useNavigate } from 'react-router-dom'
import ContainerForm from '../components/forms/ContainerForm'
import ContainersTable from '../components/tables/ContainersTable'
import DashboardLayout from '../components/dashboard/DashboardLayout'
import useCreateOrder from '../hooks/useCreateOrder'

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
			<Paper sx={{ p: 2, pt: 0 }}>
				<Grid container spacing={3} sx={{ my: 2 }}>
					<Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
							<IconButton>
								<ArrowBackIcon />
							</IconButton>
							<Typography variant='h5' sx={{ textAlign: { xs: 'left', md: 'center' }}}>
								New order
							</Typography>
							<Button sx={{ display: { xs: 'none', sm: 'flex' } }} variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}>
								Send Order
							</Button>
							<IconButton sx={{ display: { xs: 'block', sm: 'none' } }} onClick={handleSubmit} color="primary">
								<SendIcon />
							</IconButton>
					</Grid>
					<Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<MobileDatePicker
								label='Date'
								value={date}
								onChange={dateHandleChange}
								renderInput={params => <TextField {...params} />}
							/>
						</LocalizationProvider>
					</Grid>
					<Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<ContainerForm />
					</Grid>
					<Grid item xs={12}>
						<ContainersTable isForm={true} containers={containers} />
					</Grid>
				</Grid>
			</Paper>
		</DashboardLayout>
	)
}
