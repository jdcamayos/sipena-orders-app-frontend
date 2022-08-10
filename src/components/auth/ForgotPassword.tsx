// import { ForgortPasswordCredentials } from '../../types'
import { Link as LinkRouter } from 'react-router-dom'
import { forgotPasswordSchema } from '../../schemas'
import { useFormik } from 'formik'
import * as React from 'react'
import AuthButton from './AuthButton'
// MUI Styles
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Link'

type Props = {
	loading: boolean
	forgotPassword: (email: string) => void
}

export default function ForgotPassword(props: Props) {
	const { loading, forgotPassword } = props
	const formik = useFormik({
		initialValues: {
			email: '',
		},
		onSubmit: values => {
			forgotPassword(values.email)
		},
		validationSchema: forgotPasswordSchema,
	})
	return (
		<Box component='form' onSubmit={formik.handleSubmit} noValidate sx={{ mt: 2 }}>
			<TextField
				autoComplete='email'
				autoFocus
				// error={formik.errors.email}
				fullWidth
				label='Email Address'
				margin='normal'
				name='email'
				onChange={formik.handleChange}
				required
				type='email'
				value={formik.values.email}
			/>
			{/* <FormControlLabel
				control={
					<Checkbox
						name='rememberMe'
						checked={formik.values.rememberMe}
						onChange={formik.handleChange}
						color='primary'
					/>
				}
				label='Remember me'
			/> */}
			<AuthButton loading={loading} content='Login' />
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Link component={LinkRouter} to='/login' variant='body2'>
						<Typography align='center' sx={{ '&:hover': { textDecoration: 'underline', cursor: 'pointer' } }}>
							Back to login
						</Typography>
					</Link>
				</Grid>
				{/* <Grid item xs={12} md={6}>
					<Link component={LinkRouter} to='/register' variant='body2'>
						<Typography align='center' sx={{ '&:hover': { textDecoration: 'underline', cursor: 'pointer' } }}>
							{"Don't have an account? Register"}
						</Typography>
					</Link>
				</Grid> */}
			</Grid>
		</Box>
	)
}
