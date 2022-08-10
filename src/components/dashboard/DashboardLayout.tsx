import * as React from 'react'
import Copyright from '../misc/Copyright'
import Header from './Header'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'

type Props = {
	children: React.ReactNode
}

export default function DashboardLayout(props: Props) {
	return (
		<>
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<Header />
				<Box
					component='main'
					sx={{
						backgroundColor: theme =>
							theme.palette.mode === 'light'
								? theme.palette.grey[200]
								: theme.palette.grey[800],
						flexGrow: 1,
						height: '100vh',
						overflow: 'auto',
					}}
				>
					<Toolbar />
					<Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
						{props.children}
					</Container>
					<Copyright />
				</Box>
			</Box>
		</>
	)
}
