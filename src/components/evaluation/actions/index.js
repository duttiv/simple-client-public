import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';
import Title from '../../dashboard/Title';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { stringAvatar } from '../../../helpers';
import { Autocomplete, Avatar, Stack, TextField } from '@mui/material';
import Button from '@mui/material/Button';

export const EvaluationActions = () => {
  const { evaluationId } = useParams();
  const [evaluationPeriodId, setEvaluationPeriodId] = useState();
  const [actions, setActions] = useState([]);
  const [newActions, setNewActions] = useState([]);
  const [addedAction, setAddedAction] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!evaluationPeriodId) {
      axios.get(`/api/evaluation-period?evaluationId=${evaluationId}`).then((response) => {
        if (response.status === 200 && response.data && response.data.length > 0) {
          setEvaluationPeriodId(response.data[0].evaluationPeriodId);
        } else {
          setEvaluationPeriodId(2);
        }
      })
    }
  }, []);

  useEffect(() => {
    if (evaluationPeriodId) {
      const endpoints = [
        `/api/users`,
        `/api/evaluation/actions?evaluationPeriodId=${evaluationPeriodId}`,
      ];
      const requests = endpoints.map((url) => axios.get(url));
      axios.all(requests).then((response) => {
        const usersResponse = response[0].data;
        const actionsResponse = response[1].data;
        setUsers(usersResponse);
        setActions(actionsResponse);
      })
    }
  }, [evaluationPeriodId]);

  const allActions = [...actions, ...newActions];

  const getStakeholder = (action) => {
    if (action.userId) {
      const found = users.find((stakeholder) => stakeholder.id === action.userId);
      if (found) {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar {...stringAvatar(found)} />
            &nbsp;
            {found.firstName} {found.lastName}
          </div>
        )
      }
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <Paper sx={{ p: 2 }}>
          <Title>Evaluation actions</Title>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell width="60%">Action</TableCell>
                <TableCell width="30%">Assignee</TableCell>
                <TableCell width="10%">&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allActions.map((action) => (
                <TableRow key={action.id}>
                  <TableCell>
                    {action.activity}
                  </TableCell>
                  <TableCell>
                    {getStakeholder(action)}
                  </TableCell>
                  <TableCell>
                    {action.status}
                  </TableCell>
                </TableRow>
              ))}
              {Object.keys(addedAction).length > 0 && (
                <TableRow>
                  <TableCell>
                    <TextField
                      required
                      fullWidth
                      label="Insert activity description..."
                      onBlur={(e) => setAddedAction({
                        ...addedAction,
                        activity: e.target.value
                      })}
                    />
                  </TableCell>
                  <TableCell>
                    <Autocomplete
                      disablePortal
                      options={users.map((user) => ({
                        id: user.id,
                        label: `${user.firstName} ${user.lastName}`
                      }))}
                      onChange={(e, user) => {
                        if (user) {
                          setAddedAction({ ...addedAction, userId: user.id });
                        }
                      }}
                      sx={{ width: 300 }}
                      renderInput={(params) =>
                        <TextField {...params} label="Select assignee..."/>}
                    />
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => {
                      setNewActions([...newActions, addedAction]);
                      setAddedAction({});
                    }}>
                      Add!
                    </Button>
                  </TableCell>
                </TableRow>
              )}
              <br />
              <Stack direction="row" justifyContent="start">
                <Button
                  variant="contained"
                  onClick={() => setAddedAction({ activity: '', userId: null})}
                >
                  Add action..
                </Button>
              </Stack>
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    </Grid>
  );
}
