import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
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
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<img
					src={logo}
					alt="Logo Sipena"
					height={100}
				/>
				{/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar> */}
        {children}
			</Box>
			<Copyright sx={{ mt: 5 }} />
		</Container>
	)
}
