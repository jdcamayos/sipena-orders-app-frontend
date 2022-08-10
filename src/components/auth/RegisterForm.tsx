import { Credentials } from '../../types'
import { Link as LinkRouter } from 'react-router-dom'
import { signUpSchema } from '../../schemas'
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
	signUp: (credentials: Credentials) => void
}

export default function RegisterForm(props: Props) {
	const { signUp, loading } = props
	const formik = useFormik({
		initialValues: {
			// firstName: "",
			// lastName: "",
			email: '',
			password: '',
			rememberMe: false,
		},
		onSubmit: values => {
			signUp(values)
		},
		validationSchema: signUpSchema,
	})

	return (
		<Box component='form' noValidate onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
			<Grid container>
				<Grid item xs={12} sm={6}>
					{/* <TextInput
          autoComplete="given-name"
          autoFocus={true}
          errorMessage={formik.errors.firstName}
          label="First Name"
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextInput
          autoComplete="family-name"
          errorMessage={formik.errors.lastName}
          label="Last Name"
          name="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        /> */}
				</Grid>
				<Grid item xs={12}>
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
				</Grid>
				<Grid item xs={12}>
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
				</Grid>
				{/* <Grid item xs={12}>
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
				</Grid> */}
			</Grid>
			<AuthButton content='Register' loading={loading} />
			<Grid container justifyContent='flex-end'>
				<Grid item xs={12}>
					<Link component={LinkRouter} to='/login' variant='body2'>
						<Typography align='center' sx={{ '&:hover': { textDecoration: 'underline', cursor: 'pointer' } }}>
							Already have an account? Login
						</Typography>
					</Link>
				</Grid>
			</Grid>
		</Box>
	)
}
