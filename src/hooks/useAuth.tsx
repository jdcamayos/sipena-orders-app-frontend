import * as React from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import * as authService from '../services/auth'
import type { Credentials } from '../types'

export default function useAuth() {
	const navigate = useNavigate()
	const context = React.useContext(AuthContext)
	const { auth, setAuth } = context
	const [loading, setLoading] = React.useState(false)

	if (context === undefined) throw new Error('useAuth must be used within an AuthProvider')

	React.useEffect(() => {
		if (!auth.isAuth) {
			const localToken = window.localStorage.getItem('jwt')
			if (localToken) {
				getMe(localToken)
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const forgotPassword = async (email: string) => {
		try {
			setLoading(true)
			// const response = await authService.forgotPassword(email)
			setLoading(false)
		} catch (error) {
			setLoading(false)
		}
	}

	const changePassword = async (password: string) => {
		try {
			setLoading(true)

			setLoading(false)
		} catch (error) {
			setLoading(false)
		}
	}

	const getMe = async (token: string) => {
		try {
			setLoading(true)
			const { data: user } = await authService.getMe(token)
			setAuth(prev => ({
				...prev,
				isAuth: true,
				token,
				user,
			}))
			setLoading(false)
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	}

	const signIn = async (credentials: Credentials) => {
		try {
			setLoading(true)
			const {
				data: { token, user },
			} = await authService.signIn(credentials)
			setAuth(prev => ({
				...prev,
				isAuth: true,
				token,
				user,
			}))
			window.localStorage.setItem('jwt', token)
			navigate('/')
			setLoading(false)
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	}

	const signUp = async (credentials: Credentials) => {
		try {
			setLoading(true)
			const {
				data: { token, user },
			} = await authService.signUp(credentials)
			setAuth(prev => ({
				...prev,
				isAuth: true,
				token: token,
				user,
			}))
			window.localStorage.setItem('jwt', token)
			navigate('/')
			setLoading(false)
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	}

	const signOut = async () => {
		setLoading(true)
		setAuth({
			isAuth: false,
			token: null,
			user: null,
		})
		window.localStorage.removeItem('jwt')
		setLoading(false)
		navigate('/login')
	}

	return {
		auth,
		loading,
		changePassword,
		forgotPassword,
		signIn,
		signUp,
		signOut,
	}
}
