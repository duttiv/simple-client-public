import React, { useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

export default function Evaluation() {
  const [customId, setCustomId] = useState();
  const { evaluationId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      {evaluationId
        ? <Outlet/>
        : (<div>
          <TextField
            value={customId}
            onChange={(e) => setCustomId(e.target.value)}
          />
          <Button
            onClick={() => navigate(`/${customId}`)}
          >
            Go
          </Button>
        </div>)
      }
    </div>
  );
}
