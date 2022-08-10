// import { ChangePasswordCredentials } from '../../types'
// import { changePasswordSchema } from '../../schemas'
import { Link as LinkRouter } from 'react-router-dom'
import { useFormik } from 'formik'
import * as React from 'react'
import AuthButton from './AuthButton'
// MUI Styles
import Box from '@mui/material/Box'
// import Checkbox from '@mui/material/Checkbox'
// import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

type Props = {
	loading: boolean
	changePassword: (password: string) => void
}

export default function ChangePasswordForm(props: Props) {
	const { loading, changePassword } = props
	const formik = useFormik({
		initialValues: {
			password: '',
		},
		onSubmit: values => {
			changePassword(values.password)
		},
		// validationSchema: recoveryPasswordSchema,
	})

	return (
		<Box component='form' onSubmit={formik.handleSubmit} noValidate sx={{ mt: 2 }}>
			<TextField
				autoComplete='current-password'
				// error={formik.errors.password}
				fullWidth
				label='Password'
				margin='normal'
				name='password'
				onChange={formik.handleChange}
				required
				type='password'
				value={formik.values.password}
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
			<AuthButton loading={loading} content='Change Password' />
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
