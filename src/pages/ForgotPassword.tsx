import * as React from 'react'
import AuthLayout from '../components/auth/AuthLayout'
import AuthTitle from '../components/auth/AuthTitle'
import ForgotPasswordForm from '../components/auth/ForgotPasswordForm'
import useAuth from '../hooks/useAuth'

export default function ForgotPassword() {
	const { forgotPassword, loading } = useAuth()
	return (
		<AuthLayout>
			<>
				<AuthTitle title='Forgot Password' />
				<ForgotPasswordForm
					forgotPassword={forgotPassword}
					loading={loading}
				/>
			</>
		</AuthLayout>
	)
}
