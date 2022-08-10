import * as React from 'react'
import DashboardLayout from '../components/dashboard/DashboardLayout'
// MUI Styles
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
// Date Picker
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import ContainerInput from '../components/dashboard/ContainerInput'

export default function NewOrder() {
	const [date, setDate] = React.useState<Date | null>(new Date())
	const [containers, setContainers] = React.useState([])

	const initialContainer = {
		type: '20ft',
		contain: '',
		productQuantity: 0,
		productWeight: 0,
		forkliftOperator: false,
		stretchWrap: false,
		additionalInfo: '',
	}

	const dateHandleChange = (value: Date | null) => {
		setDate(value)
	}
	return (
		<DashboardLayout>
			<Paper sx={{ p: 2 }}>
				<Typography variant='h5' align='center'>
					New order
				</Typography>
				<Grid container spacing={3} sx={{ my: 2 }}>
					<Grid item xs={6}>
						<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<MobileDatePicker
									label='Date'
									value={date}
									onChange={dateHandleChange}
									renderInput={params => <TextField variant='standard' {...params} />}
								/>
							</LocalizationProvider>
						</Box>
					</Grid>
					<Grid item xs={6}>
						<ContainerInput />
					</Grid>
				</Grid>
			</Paper>
		</DashboardLayout>
	)
}
