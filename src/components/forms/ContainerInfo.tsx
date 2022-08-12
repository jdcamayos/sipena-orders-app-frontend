import { useFormik } from 'formik'
import * as React from 'react'
import { CreateContainer } from '../../types'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import TextField from '@mui/material/TextField'
import useCreateOrder from '../../hooks/useCreateOrder'

type Props = {
	initialValues?: CreateContainer
	isForm?: boolean
	isUpdate?: boolean
	handleClose?: () => void
}

export default function ContainerInfo(props: Props) {
	const { initialValues, isUpdate, handleClose } = props
	const { addContainer } = useCreateOrder()

	const formik = useFormik({
		initialValues: initialValues
			? initialValues
			: {
					type: '20ft',
					contain: '',
					productQuantity: 0,
					productWeight: 0,
					forkliftOperator: false,
					stretchWrap: false,
					additionalInfo: '',
			  },
		onSubmit: async (values: CreateContainer) => {
			// console.log(values)
			addContainer(values)
      handleClose && handleClose()
		},
	})

	return (
		<Grid container spacing={2} sx={{ py: 2 }} component='form' onSubmit={formik.handleSubmit}>
			<Grid item xs={12}>
				<FormControl>
					<FormLabel id='container-type-group'>Type</FormLabel>
					<RadioGroup row aria-labelledby='container-type-group' defaultValue='20ft' name='type'>
						<FormControlLabel value='20ft' control={<Radio />} label='20 ft' />
						<FormControlLabel value='40ft' control={<Radio />} label='40 ft' />
					</RadioGroup>
				</FormControl>
			</Grid>
			<Grid item xs={12}>
				<TextField
					label='Contain'
					required
					name='contain'
					value={formik.values.contain}
					onChange={formik.handleChange}
					fullWidth
					multiline
					rows={2}
					placeholder='Coffe, Toys, Tools...'
					variant='standard'
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</Grid>
			<Grid item xs={6}>
				<TextField
					name='productQuantity'
					value={formik.values.productQuantity}
					onChange={formik.handleChange}
					fullWidth
					label='Quantity'
					type='number'
					variant='standard'
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</Grid>
			<Grid item xs={6}>
				<TextField
					name='productWeight'
					value={formik.values.productWeight}
					onChange={formik.handleChange}
					fullWidth
					label='Weight'
					type='number'
					variant='standard'
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</Grid>
			<Grid item xs={6}>
				<FormControlLabel control={<Checkbox />} label='Forklift Operator' />
			</Grid>
			<Grid item xs={6}>
				<FormControlLabel control={<Checkbox />} label='Strech Wrap' />
			</Grid>
			<Grid item xs={12}>
				<TextField
					name='additionalInfo'
					value={formik.values.additionalInfo}
					onChange={formik.handleChange}
					label='Additional Info'
					fullWidth
					multiline
					rows={2}
					variant='standard'
				/>
			</Grid>
			<Grid item xs={12} sx={{ display: 'flex', gap: 3, justifyContent: 'flex-end' }}>
				<Button onClick={handleClose}>Go back</Button>
				<Button type='submit' variant='contained'>
					{isUpdate ? 'Update' : 'Create'}
				</Button>
			</Grid>
		</Grid>
	)
}
