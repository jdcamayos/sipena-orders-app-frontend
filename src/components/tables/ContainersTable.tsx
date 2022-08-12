import * as React from 'react'
// MUI Styles
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { CreateContainer } from '../../types'

type Props = {
	containers: CreateContainer[]
}

export default function ContainersTable(props: Props) {
	const { containers } = props
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
			<Typography variant='h5' sx={{ mb: 2 }}>
				Containers
			</Typography>
			<TableContainer component={Paper}>
				<Table size='small' aria-label='container table'>
					<TableHead>
						<TableRow>
							<TableCell align='center'>Action</TableCell>
							<TableCell align='center'>Type</TableCell>
							<TableCell align='center'>Contain</TableCell>
							<TableCell align='center'>Qty</TableCell>
							<TableCell align='center'>Weight x Product</TableCell>
							<TableCell align='center'>Forklift Operator</TableCell>
							<TableCell align='center'>Stretch Wrap</TableCell>
							<TableCell align='center'>Additional Info</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{!containers.length && (
							<TableRow>
								<TableCell colSpan={8} align="center">Not containers yet</TableCell>
							</TableRow>
						)}
						{!!containers.length && containers.map((container, i) => (
							<TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell align='center'>
									<IconButton>
										<EditIcon />
									</IconButton>
									<IconButton>
										<DeleteIcon />
									</IconButton>
								</TableCell>
								<TableCell align='center'>{container.type}</TableCell>
								<TableCell align='center'>{container.contain}</TableCell>
								<TableCell align='center'>{container.productQuantity}</TableCell>
								<TableCell align='center'>{container.productWeight}</TableCell>
								<TableCell align='center'>{container.forkliftOperator ? 'Yes' : 'No'}</TableCell>
								<TableCell align='center'>{container.stretchWrap ? 'Yes' : 'No'}</TableCell>
								<TableCell align='center'>{container.additionalInfo}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	)
}
