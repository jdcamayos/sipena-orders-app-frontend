import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
// import Avatar from '@mui/material/Avatar'
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import logo from '../../assets/logoColorHorizontal.png'

import * as React from 'react'
import Copyright from '../misc/Copyright'

type Props = {
	children: React.ReactNode
}

export default function AuthLayout(props: Props) {
	const { children } = props
	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<Box
				sx={{
					backgroundColor: theme =>
						theme.palette.mode === 'light'
							? theme.palette.grey[200]
							: theme.palette.grey[800],
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					p: 4,
				}}
				component={Paper}
				elevation={6}
			>
				{/* <Paper
					sx={{
						backgroundColor: theme =>
							theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
						p: 4,
					}}
					elevation={6}
				> */}
					<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
						<img src={logo} alt='Logo Sipena' height={100} />
					</Box>
					{/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar> */}
					{children}
				{/* </Paper> */}
			</Box>
			<Copyright sx={{ mt: 5 }} />
		</Container>
	)
}
