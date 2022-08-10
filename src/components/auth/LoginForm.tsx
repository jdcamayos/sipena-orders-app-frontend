import { Credentials } from '../../types'
import { Link as LinkRouter } from 'react-router-dom'
import { signInSchema } from '../../schemas'
import { useFormik } from 'formik'
import * as React from 'react'
import AuthButton from './AuthButton'
// MUI Styles
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

type Props = {
	loading: boolean
	signIn: (credentials: Credentials) => void
}

export default function LoginForm(props: Props) {
	const { loading, signIn } = props
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			rememberMe: false,
		},
		onSubmit: values => {
			signIn(values)
		},
		validationSchema: signInSchema,
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
			<FormControlLabel
				control={
					<Checkbox
						name='rememberMe'
						checked={formik.values.rememberMe}
						onChange={formik.handleChange}
						color='primary'
					/>
				}
				label='Remember me'
			/>
      <AuthButton
        loading={loading}
        content="Login"
      />
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<Link component={LinkRouter} to='/forgot-password' variant='body2'>
						<Typography align='center' sx={{ '&:hover': { textDecoration: 'underline', cursor: 'pointer' } }}>
							Forgot password?
						</Typography>
					</Link>
				</Grid>
				<Grid item xs={12} md={6}>
					<Link component={LinkRouter} to='/register' variant='body2'>
						<Typography align='center' sx={{ '&:hover': { textDecoration: 'underline', cursor: 'pointer' } }}>
							{"Don't have an account? Register"}
						</Typography>
					</Link>
				</Grid>
			</Grid>
		</Box>
	)
}
