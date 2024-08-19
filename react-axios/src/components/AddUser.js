import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { Box, Container, TextField, Button, Typography } from '@mui/material';

const AddUser = () => {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    phonenumber: '',
    website: '',
    company: ''
  });

  const { addUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(newUser);
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          mt: 8, 
          p: 3, 
          boxShadow: 3, 
          borderRadius: 2 
        }}
      >
        <Typography variant="h4" gutterBottom>
          Add Contact
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField 
            label="Name" 
            name="name" 
            value={newUser.name} 
            onChange={handleChange} 
            fullWidth 
            required 
            margin="normal" 
          />
          <TextField 
            label="Email" 
            name="email" 
            type="email" 
            value={newUser.email} 
            onChange={handleChange} 
            fullWidth 
            required 
            margin="normal" 
          />
          <TextField 
            label="Phone Number" 
            name="phonenumber" 
            value={newUser.phonenumber} 
            onChange={handleChange} 
            fullWidth 
            required 
            margin="normal" 
          />
          <TextField 
            label="Website" 
            name="website" 
            value={newUser.website} 
            onChange={handleChange} 
            fullWidth 
            margin="normal" 
          />
          <TextField 
            label="Company" 
            name="company" 
            value={newUser.company} 
            onChange={handleChange} 
            fullWidth 
            margin="normal" 
          />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            sx={{ mt: 2 }}
            fullWidth
          >
            Save
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default AddUser;
