import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import CustomerInfo from './CustomerInfo'

type Props = {
	isUpdate?: boolean
}

export default function CustomerForm(props: Props) {
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
				<DialogTitle>{isUpdate ? 'Update Customer' : 'Create Customer'}</DialogTitle>
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
