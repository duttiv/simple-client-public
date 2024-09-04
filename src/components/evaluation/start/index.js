import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import React, { useState } from 'react';
import Title from '../../dashboard/Title';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const StartEvaluation = () => {
  const [endDate, setEndDate] = useState();
  const navigate = useNavigate();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <Paper sx={{ p: 2 }}>
          <Title>Start evaluation</Title>
          Ight let's gooooo<br/><br/>
          <Button
            variant="contained"
            onClick={() => axios.post('/api/evaluation')
            .then((response) => {
              if (response?.data) {
                navigate(`/${response.data.id}/stakeholders`)
              }
            })}
          >
            Yeehaaw
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}
