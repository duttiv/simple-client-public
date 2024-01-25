import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { Popover } from '@mui/material';

export default function SimplePopper({ trigger, content }) {
  const [anchorEl, setAnchorEl] = useState();

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <IconButton variant="text" onClick={handleClick}>
        {trigger}
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minWidth: 240,
          }}
        >
          {content}
        </Paper>
      </Popover>
    </div>
  );
}
