import * as React from 'react'
import Button from '@mui/material/Button'
// import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
// import Grid from '@mui/material/Grid'
// import Typography from '@mui/material/Typography'
// import { CreateCustomer } from '../../types'
// import { useFormik } from 'formik'
// import { createCustomer } from '../../services'
import CustomerInfo from './CustomerInfo'

// type CustomerInfoProps = {
// 	initialValues?: CreateCustomer
// 	isForm?: boolean
// 	isUpdate?: boolean
// 	handleClose?: () => void
// 	// setCustomer?: React.Dispatch<React.SetStateAction<Customer>>
// 	// handleSubmit?: React.FormEventHandler<HTMLFormElement>
// }

// const CustomerInfo = (props: CustomerInfoProps) => {
// 	const { initialValues, isForm, isUpdate, handleClose } = props

// 	const formik = useFormik({
// 		initialValues: initialValues
// 			? initialValues
// 			: {
// 					companyName: '',
// 					streetAddress: '',
// 					city: '',
// 					state: '',
// 					postalCode: '',
// 					phone: '',
// 			  },
// 		onSubmit: async values => {
//       try {
//         console.log(values)
//         const data = await createCustomer(values)
//         console.log(data)
//         if (handleClose) {
//           handleClose()
//         }
//       } catch (error) {
//         console.log(error)
//       }
// 		},
// 	})
// 	// const form = React.useRef<HTMLFormElement | null>(null)

// 	// const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
// 	// 	event.preventDefault()
// 	// 	if (isForm && handleClose) {
// 	// 		const data = new FormData(event.currentTarget)
// 	// 		const customerData = {
// 	// 			companyName: data.get('companyName'),
// 	// 			streetAddress: data.get('streetAddress'),
// 	// 			city: data.get('city'),
// 	// 			state: data.get('state'),
// 	// 			postalCode: data.get('postalCode'),
// 	// 			phone: data.get('phone'),
// 	// 		}
// 	// 		console.log(customerData)
// 	// 		handleClose()
// 	// 	}
// 	// }

// 	// React.useEffect(() => {
// 	// 	if (initialValues && form.current) {
// 	//     console.log(initialValues)
// 	//     console.log('heyyy')
// 	// 		const data = new FormData(form.current)
// 	// 		data.set('companyName', initialValues.companyName)
// 	// 		data.set('streetAddress', initialValues.streetAddress)
// 	// 		data.set('city', initialValues.city)
// 	// 		data.set('state', initialValues.state)
// 	// 		data.set('postalCode', initialValues.postalCode)
// 	// 		data.set('phone', initialValues.phone)
// 	// 	}
// 	// }, [initialValues])

// 	return (
// 		<Grid
// 			item
// 			xs={12}
// 			component='form'
// 			// ref={form}
// 			onSubmit={formik.handleSubmit}
// 			container
// 			spacing={2}
// 			sx={{ py: 2 }}
// 		>
// 			{!isForm && (
// 				<Grid item xs={12}>
// 					<Typography variant='h5' align='center'>
// 						Customer info
// 					</Typography>
// 				</Grid>
// 			)}
// 			<Grid item xs={12} md={6}>
// 				<TextField
// 					label='Company Name'
// 					name='companyName'
// 					value={formik.values.companyName}
// 					type='text'
// 					onChange={formik.handleChange}
// 					fullWidth
// 					disabled={!isForm}
// 				/>
// 			</Grid>
// 			<Grid item xs={12} md={6}>
// 				<TextField
// 					label='Street Address'
// 					name='streetAddress'
// 					value={formik.values.streetAddress}
// 					type='text'
// 					onChange={formik.handleChange}
// 					fullWidth
// 					disabled={!isForm}
// 				/>
// 			</Grid>
// 			<Grid item xs={12} md={6}>
// 				<TextField
// 					label='City'
// 					name='city'
// 					value={formik.values.city}
// 					type='text'
// 					onChange={formik.handleChange}
// 					fullWidth
// 					disabled={!isForm}
// 				/>
// 			</Grid>
// 			<Grid item xs={12} md={6}>
// 				<TextField
// 					label='State'
// 					name='state'
// 					value={formik.values.state}
// 					type='text'
// 					onChange={formik.handleChange}
// 					fullWidth
// 					disabled={!isForm}
// 				/>
// 			</Grid>
// 			<Grid item xs={12} md={6}>
// 				<TextField
// 					label='Postal Code'
// 					name='postalCode'
// 					value={formik.values.postalCode}
// 					type='text'
// 					onChange={formik.handleChange}
// 					fullWidth
// 					disabled={!isForm}
// 				/>
// 			</Grid>
// 			<Grid item xs={12} md={6}>
// 				<TextField
// 					label='Phone'
// 					name='phone'
// 					value={formik.values.phone}
// 					type='text'
// 					onChange={formik.handleChange}
// 					fullWidth
// 					disabled={!isForm}
// 				/>
// 			</Grid>
// 			{isForm && (
// 				<Grid item xs={12} sx={{ display: 'flex', gap: 3, justifyContent: 'flex-end' }}>
// 					<Button onClick={handleClose}>Go back</Button>
// 					<Button type='submit' variant='contained'>
// 						{isUpdate ? 'Update' : 'Create'}
// 					</Button>
// 				</Grid>
// 			)}
// 		</Grid>
// 	)
// }

type CustomerFormProps = {
	isUpdate?: boolean
}

export default function CustomerForm(props: CustomerFormProps) {
	const { isUpdate } = props
	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<>
			<Button variant='outlined' onClick={handleClickOpen}>
				{isUpdate ? 'Update Customer' : 'Create Customer'}
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Create Customer</DialogTitle>
				<DialogContent>
					<CustomerInfo
						// initialValues={{
						// 	companyName: 'Test Name',
						// 	streetAddress: '123 Happy St',
						// 	city: 'Los Angeles',
						// 	state: 'California',
						// 	postalCode: '90001',
						// 	phone: '123-456-7890',
						// }}
						isForm={true}
						isUpdate={isUpdate}
						handleClose={handleClose}
					/>
					{/* Content */}
				</DialogContent>
			</Dialog>
		</>
	)
}
