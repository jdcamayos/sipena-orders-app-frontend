import * as React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import logo from '../../assets/logo2.svg'
// MUI Styles
import Box from '@mui/material/Box'

type Props = {
	isMobile?: boolean
}

export default function BrandLink({ isMobile = false }: Props) {
	return (
		<>
			<Box
        component={RouterLink}
        to='/'
				sx={{
					display: {
						xs: isMobile ? 'flex' : 'none',
						md: isMobile ? 'none' : 'flex',
					},
					mr: 1,
          flexGrow: isMobile ? 1 : 0,
				}}
			>
				<img src={logo} alt='Logo sipena' height={60} />
			</Box>
		</>
	)
}
