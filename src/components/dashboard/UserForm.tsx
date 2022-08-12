import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import EditIcon from '@mui/icons-material/Edit'
import IconButton from '@mui/material/IconButton'
import UserInfo from './UserInfo'

export default function UserForm() {
	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<>
			<IconButton onClick={handleClickOpen}>
				<EditIcon />
			</IconButton>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Update User</DialogTitle>
				<DialogContent>
					<UserInfo handleClose={handleClose} />
				</DialogContent>
			</Dialog>
		</>
	)
}
