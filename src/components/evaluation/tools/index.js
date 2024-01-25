import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';
import Title from '../../dashboard/Title';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import axios from 'axios';
import { Autocomplete, Stack, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from "react-router-dom";

export const EvaluationTools = () => {
  const { evaluationId } = useParams();
  const [autoCompleteValue, setAutoCompleteValue] = useState([]);
  const [tools, setTools] = useState([]);
  const [selected, setSelected] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
/*    const endpoints = [
      '/api/tools',
      `/api/evaluation/tools?evaluationId=${evaluationId}`
    ];
    const requests = endpoints.map((url) => axios.get(url));
    axios.all(requests).then((response) => {
      const processesResponse = response[0].data;
      const selectedProcessesResponse = response[1].data;
      setTools(processesResponse);
      setSelected(selectedProcessesResponse.map((process) => process.id));
      if (selectedProcessesResponse.length === 0) {
        setDisabled(false);
      }
    })*/
  }, []);

  const next = () => navigate(`/${evaluationId}/assessment`);

  const postTools = () => {
    axios.post('/api/evaluation/tools', {
      evaluationId,
      tools: selected
    }).then((response) => {
      next();
    })
  };

  const removeSelected = (selectedId) => {
    const newSelected = [...selected.filter((selId) => selId !== selectedId)];
    setSelected(newSelected);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={7} lg={7}>
        <Paper
          sx={{
            p: 2,
          }}
        >
          <Title>Tools</Title>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colspan={3}>Tools</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selected.map((id) => {
                const process = tools.find((sh) => sh.id === id);
                return (
                  <TableRow key={process.id}>
                    <TableCell>{process.name}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        disabled={disabled}
                        color="error"
                        onClick={() => removeSelected(process.id)}
                      >
                        <DeleteIcon/>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <br/>
          <Autocomplete
            disabled={disabled}
            value={autoCompleteValue}
            disableClearable
            disablePortal
            options={tools
            .filter((process) => selected.indexOf(process.id) < 0)
            .map((process) => ({
              id: process.id,
              label: process.name
            }))}
            onChange={(e, value) => {
              if (value) {
                setSelected([...selected, value.id]);
                setAutoCompleteValue([]);
              }
            }}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Add..."/>}
          />
          <Stack direction="row" justifyContent="end">
            <Button
              variant="contained"
              onClick={disabled ? next : postTools}
            >
              Next
            </Button>
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={12} md={5} lg={5}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <img src="https://simple.duttiv.com/fw/tools.png"/>
        </Paper>
      </Grid>
    </Grid>
  );
}
