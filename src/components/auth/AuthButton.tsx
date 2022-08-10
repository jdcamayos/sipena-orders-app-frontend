import * as React from 'react'
import Button from '@mui/material/Button'

type Props = {
	loading: boolean
	content: string
}

export default function AuthButton(props: Props) {
	const { content, loading } = props
	return (
		<Button
			// {...props}
			disabled={loading}
			fullWidth
			sx={{ mt: 3, mb: 2 }}
			type='submit'
			variant='contained'
		>
			{loading ? 'Loading...' : content}
		</Button>
	)
}
