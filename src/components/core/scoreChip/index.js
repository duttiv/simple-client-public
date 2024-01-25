import React  from 'react';
import { Avatar } from '@mui/material';
import { green, red, yellow } from '@mui/material/colors';

export const ScoreAvatar = ({ score, max }) => {
  let color = green;
  if (score < max * 0.7) {
    color = yellow;
  }
  if (score < max * 0.3) {
    color = red;
  }
  return (
    <Avatar
      sx={{ bgcolor: color[500], marginLeft: 'auto', marginRight: 'auto' }}>
      {score}
    </Avatar>
  )
};
