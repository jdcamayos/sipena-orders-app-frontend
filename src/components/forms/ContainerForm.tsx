import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ContainerInfo from './ContainerInfo'
import { ListItemCreateContainer } from '../../types'

type Props = {
	isUpdate?: boolean
	initialValues?: ListItemCreateContainer
}

export default function ContainerForm(props: Props) {
	const { isUpdate, initialValues } = props
	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<>
			{isUpdate && (
				<IconButton onClick={handleClickOpen}>
					<EditIcon />
				</IconButton>
			)}
			{!isUpdate && (
				<Button variant='outlined' startIcon={<AddIcon />} onClick={handleClickOpen}>
					Add Container
				</Button>
			)}
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>{isUpdate ? 'Update Container' : 'Create Container'}</DialogTitle>
				<DialogContent>
					<ContainerInfo handleClose={handleClose} initialValues={initialValues} isUpdate={isUpdate} />
					{/* <UserInfo handleClose={handleClose} /> */}
				</DialogContent>
			</Dialog>
		</>
	)
}
