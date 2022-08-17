import * as React from 'react'
import * as userService from '../services/user'
import { AdminContext } from '../contexts/AdminContext'
import { UpdateAdminUser } from '../types'

export default function useAdmin() {
	const context = React.useContext(AdminContext)
	const { users, setUsers } = context
	const [loading, setLoading] = React.useState(false)

	if (context === undefined) throw new Error('useAdmin must be used within a AdminProvider')

	React.useEffect(() => {
		if (!users.length) {
			fetchUsers()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const fetchUsers = async () => {
		try {
			setLoading(true)
			const { data } = await userService.getUsers()
			setUsers(data)
			setLoading(false)
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	}

	const updateUser = async (id: string, user: UpdateAdminUser) => {
		try {
			setLoading(true)
      const { data } = await userService.updateUser(id, user)
			if (data) {
				await fetchUsers()
			}
			setLoading(false)
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	}

	return { users, loading, updateUser }
}
