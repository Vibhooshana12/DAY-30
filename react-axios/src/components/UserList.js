import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Card, CardContent, Typography, IconButton, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom'; 

const UserList = () => {
  const { users, deleteUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleEditClick = (usersId) => {
    navigate(`/edit/${usersId}`);
  }

  return (
    <div>
      <h2>User List</h2>
      <Grid container spacing={4}>
        {users.map(user => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: {user.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Phone: {user.phonenumber}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Website: {user.website}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Company: {user.company}
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '10px' }}>
                  <IconButton color="primary" onClick={() => handleEditClick(user.id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => deleteUser(user.id)}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default UserList;
