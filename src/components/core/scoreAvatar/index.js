import React from 'react';
import { Chip } from '@mui/material';
import { green, lightGreen, yellow, orange, red } from '@mui/material/colors';

export const ScoreAvatar = ({ score, max }) => {
  let color = green['A700'];
  let finalScore = 'excellent';
  if (score < max * 0.9) {
    color = lightGreen['A700']
    finalScore = 'good';
  }
  if (score < max * 0.8) {
    color = yellow[700]
    finalScore = 'average';
  }
  if (score < max * 0.6) {
    color = orange[800];
    finalScore = 'fair';
  }
  if (score < max * 0.33) {
    color = red[900];
    finalScore = 'poor';
  }
  return (
    <Chip
      sx={{
        bgcolor: color,
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
      }} label={finalScore}
    />
  )
};
