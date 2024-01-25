import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Deposits from '../dashboard/Deposits';
import Orders from '../dashboard/Orders';
import React, { useState } from 'react';

export const Main = () => {
  const [selectedStakeholders, setSelectedStakeholders] = useState([]);
  return (
    <Grid container spacing={3}>
      {/* Wat */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          Wat
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <Deposits/>
        </Paper>
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Orders/>
        </Paper>
      </Grid>
    </Grid>
  );
}
