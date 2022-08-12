import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import ContainerInfo from './ContainerInfo'

type Props = {
	isUpdate?: boolean
}

export default function ContainerForm(props: Props) {
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
			<Button variant='contained' onClick={handleClickOpen}>
				{isUpdate ? 'Update Container' : 'Add Container'}
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>{isUpdate ? 'Update Container' : 'Create Container'}</DialogTitle>
				<DialogContent>
					<ContainerInfo handleClose={handleClose} />
					{/* <UserInfo handleClose={handleClose} /> */}
				</DialogContent>
			</Dialog>
		</>
	)
}
