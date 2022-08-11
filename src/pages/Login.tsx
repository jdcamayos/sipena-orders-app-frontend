import * as React from 'react'
import AuthLayout from '../components/auth/AuthLayout'
import AuthTitle from '../components/auth/AuthTitle'
import LoginForm from '../components/auth/LoginForm'
import useAuth from '../hooks/useAuth'

export default function Login() {
	const { auth, loading, signIn } = useAuth()

	if (auth.isAuth) return null

	return (
		<AuthLayout>
			<>
				<AuthTitle title='Login' />
				<LoginForm signIn={signIn} loading={loading} />
			</>
		</AuthLayout>
	)
}
