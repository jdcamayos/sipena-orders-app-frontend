import * as React from 'react'
import Typography from '@mui/material/Typography'

type Props = {
	title: string
}

export default function AuthTitle(props: Props) {
	const { title } = props
	return (
		<Typography component='h1' variant='h5'>
			{title ? title : ''}
		</Typography>
	)
}
