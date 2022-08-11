import * as React from 'react'
import AuthLayout from '../components/auth/AuthLayout'
import AuthTitle from '../components/auth/AuthTitle'
import RegisterForm from '../components/auth/RegisterForm'
import useAuth from '../hooks/useAuth'

export default function Register() {
	const { auth, loading, signUp } = useAuth()

	if (auth.isAuth) return null

	return (
		<AuthLayout>
			<>
				<AuthTitle title='Register' />
				<RegisterForm signUp={signUp} loading={loading} />
			</>
		</AuthLayout>
	)
}
