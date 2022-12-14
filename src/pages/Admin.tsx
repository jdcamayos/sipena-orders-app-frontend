import * as React from 'react'
import DashboardLayout from '../components/dashboard/DashboardLayout'
import UsersTable from '../components/tables/UsersTable'

export default function Admin() {
	return (
		<DashboardLayout>
			<UsersTable />
		</DashboardLayout>
	)
}
