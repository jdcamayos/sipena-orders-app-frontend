import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function NoAuthRoutes() {
	const { auth } = useAuth()

	return !auth.isAuth ? <Outlet /> : <Navigate to='/' />
}
