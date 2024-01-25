import React from 'react';
import { Chip } from '@mui/material';
import { green, red, yellow } from '@mui/material/colors';

export const ScoreAvatar = ({ score, max }) => {
  let color = green;
  let finalScore = 'high';
  if (score < max * 0.7) {
    color = yellow;
    finalScore = 'medium';
  }
  if (score < max * 0.3) {
    color = red;
    finalScore = 'low';
  }
  return (
    <Chip
      sx={{
        bgcolor: color[500],
        fontSize: 14,
      }} label={finalScore}
    />
  )
};
