import * as React from 'react'
// MUI Styles
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
// Others
import DashboardLayout from '../components/dashboard/DashboardLayout'
import { useParams } from 'react-router-dom'
import OrderInfo from '../components/misc/OrderInfo'

export default function Order() {
  const { orderId } = useParams()

  return (
    <DashboardLayout>
      <Grid container maxWidth="lg" component={Paper} sx={{ p: 2 }}>
        <Grid item xs={12}>
          <Typography variant="h5" fontWeight="bold">
            Order Details
          </Typography>
        </Grid>
        {orderId && <OrderInfo orderId={orderId}/>}
      </Grid>
    </DashboardLayout>
  )
}
