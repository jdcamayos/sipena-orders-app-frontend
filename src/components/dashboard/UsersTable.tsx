import * as React from 'react'
// import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
// import EditIcon from '@mui/icons-material/Edit'
import UserForm from './UserForm'

export default function UsersTable() {
	const users = [
		{
			email: 'jd.camayo@gmail.com',
			role: 'admin',
			blocked: false,
		},
		{
			email: 'example@undefined.sh',
			role: 'customer',
			blocked: false,
		},
	]
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
			<Typography variant='h5' sx={{ mb: 2 }}>
				Users
			</Typography>
			<TableContainer component={Paper} sx={{ maxWidth: 650 }}>
				<Table size='small' aria-label='users table'>
					<TableHead>
						<TableRow>
							<TableCell align='center'>Status</TableCell>
							<TableCell align='left'>Email</TableCell>
							<TableCell align='center'>Role</TableCell>
							<TableCell align='center'>Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{users.map(user => (
							<TableRow key={user.email} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell align='center'>
									{user.blocked ? (
										<Box sx={{ margin: '0 auto', width: 20, height: 20, borderRadius: 20, backgroundColor: 'red' }} />
									) : (
										<Box sx={{ margin: '0 auto', width: 20, height: 20, borderRadius: 20, backgroundColor: 'green' }} />
									)}
								</TableCell>
								<TableCell align='left'>{user.email}</TableCell>
								<TableCell align='center'>{user.role}</TableCell>
								<TableCell align='center'>
									<UserForm />
									{/* <IconButton>
										<EditIcon />
									</IconButton> */}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	)
}
