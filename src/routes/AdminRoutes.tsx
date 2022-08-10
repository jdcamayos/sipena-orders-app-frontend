import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function AdminRoutes() {
	const { auth } = useAuth()

	return auth.isAuth && auth.user?.role === 'admin' ? <Outlet /> : <Navigate to='/' />
}
