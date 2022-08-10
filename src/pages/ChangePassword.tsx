import * as React from 'react'
import AuthLayout from '../components/auth/AuthLayout'
import AuthTitle from '../components/auth/AuthTitle'
import ChangePasswordForm from '../components/auth/ChangePasswordForm'
import useAuth from '../hooks/useAuth'

export default function ChangePassword() {
  const { changePassword, loading } = useAuth()
	return (
		<AuthLayout>
			<>
				<AuthTitle title='Change Password' />
				<ChangePasswordForm
          changePassword={changePassword}
          loading={loading}
        />
			</>
		</AuthLayout>
	)
}
