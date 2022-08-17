import * as React from 'react'
// MUI Styles
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
// Others
import useOrder from '../../hooks/useOrder'
import { dateFormat } from '../../utils/dates'
// import ContainerInfo from '../forms/ContainerInfo'
import ContainersTable from '../tables/ContainersTable'

type Props = {
  orderId: string
}

export default function OrderInfo(props: Props) {
  const { order } = useOrder(props.orderId)

  console.log(order)

  if (!order) {
    return null
  }

  return (
    <Grid item xs={12} container spacing={2}>
      <Grid item xs={12}>
        <Typography><strong>Date:</strong> {dateFormat(order.date)}</Typography>
      </Grid>
      {/* <Grid item xs={12}>
        <Typography>
          Containers
        </Typography>
      </Grid> */}
      <Grid item xs={12}>
        <ContainersTable isForm={false} containers={order.containers} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" fontWeight="bold">
          Attachments
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained">Add File</Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" fontWeight="bold">
          Workers
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained">Assign Worker</Button>
      </Grid>
    </Grid>
  )
}
