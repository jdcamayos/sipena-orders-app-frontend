import * as React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Context
import AdminProvider from '../contexts/AdminContext'
import AuthProvider from '../contexts/AuthContext'
import CreateOrderProvider from '../contexts/CreateOrderContext'
import CustomerProvider from '../contexts/CustomerContext'
import OrderProvider from '../contexts/OrderContext'
import ThemeProvider from '../contexts/ThemeContext'
// Pages
import Admin from '../pages/Admin'
import ChangePassword from '../pages/ChangePassword'
import ForgotPassword from '../pages/ForgotPassword'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NewOrder from '../pages/NewOrder'
import Order from '../pages/Order'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
// Routes
import AdminRoutes from './AdminRoutes'
import NoAuthRoutes from './NoAuthRoutes'
import PrivateRoutes from './PrivateRoutes'

export default function App() {
	return (
		<ThemeProvider>
			<AuthProvider>
				<Router>
					<Routes>
						<Route element={<PrivateRoutes />}>
							<Route
								path='/'
								element={
									<CustomerProvider>
										<Home />
									</CustomerProvider>
								}
							/>
							<Route
								path='/profile'
								element={
									<CustomerProvider>
										<Profile />
									</CustomerProvider>
								}
							/>
							<Route
								path='/order/new'
								element={
									<CreateOrderProvider>
										<NewOrder />
									</CreateOrderProvider>
								}
							/>
							<Route
								path='/order/:orderId'
								element={
									<OrderProvider>
										<Order />
									</OrderProvider>
								}
							/>
							<Route element={<AdminRoutes />}>
								<Route
									path='/admin'
									element={
										<AdminProvider>
											<Admin />
										</AdminProvider>
									}
								/>
							</Route>
						</Route>
						<Route element={<NoAuthRoutes />}>
							<Route path='/login' element={<Login />} />
							<Route path='/register' element={<Register />} />
							<Route path='/forgot-password' element={<ForgotPassword />} />
							<Route path='/change-password' element={<ChangePassword />} />
						</Route>
					</Routes>
				</Router>
			</AuthProvider>
		</ThemeProvider>
	)
}
