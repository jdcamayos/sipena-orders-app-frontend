import * as React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Context
import AuthProvider from '../contexts/AuthContext'
import OrderProvider from '../contexts/OrderContext'
import ThemeProvider from '../contexts/ThemeContext'
import Admin from '../pages/Admin'
// Pages
import ChangePassword from '../pages/ChangePassword'
import ForgotPassword from '../pages/ForgotPassword'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NewOrder from '../pages/NewOrder'
import Order from '../pages/Order'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
import AdminRoutes from './AdminRoutes'
import NoAuthRoutes from './NoAuthRoutes'
import PrivateRoutes from './PrivateRoutes'

export default function App() {
	return (
		<ThemeProvider>
			<AuthProvider>
				<Router>
					<Routes>
						<Route element={<NoAuthRoutes />}>
							<Route path='/login' element={<Login />} />
							<Route path='/register' element={<Register />} />
							<Route path='/forgot-password' element={<ForgotPassword />} />
							<Route path='/change-password' element={<ChangePassword />} />
						</Route>
						<Route element={<PrivateRoutes />}>
							<Route path='/' element={<Home />} />
							<Route path='/profile' element={<Profile />} />
							<Route
								path='/order/new'
								element={
									<OrderProvider>
										<NewOrder />
									</OrderProvider>
								}
							/>
							<Route path='/order/:orderId' element={<Order />} />
							<Route element={<AdminRoutes />}>
								<Route path='/admin' element={<Admin />} />
							</Route>
						</Route>
					</Routes>
				</Router>
			</AuthProvider>
		</ThemeProvider>
	)
}
