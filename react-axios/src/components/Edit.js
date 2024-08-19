import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { Box, Container, TextField, Button, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Edit = () => {
  const { id } = useParams();
  const { users, updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
    phonenumber: '',
    website: '',
    company: ''
  });

  useEffect(() => {
    const userId = parseInt(id);
    const user = users.find(user => user.id === userId);
    if (user) {
      setCurrentUser(user);
    }
  }, [users, id]);

  const handleChange = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phonenumber, website, company } = currentUser;
    if (!name || !email || !phonenumber || !website || !company) {
      alert("All fields are required!");
      return;
    }
    updateUser(id, currentUser);
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
        <Button
          variant="contained"
          startIcon={<ArrowBackIosNewIcon />}
          onClick={() => navigate(-1)}
          sx={{ mb: 2 }}
        >
          Back
        </Button>
        <Typography variant="h4" gutterBottom>
          Edit Contact Details
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Name"
            name="name"
            value={currentUser.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={currentUser.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Phone Number"
            name="phonenumber"
            value={currentUser.phonenumber}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Website"
            name="website"
            value={currentUser.website}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Company"
            name="company"
            value={currentUser.company}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            fullWidth
          >
            Update Contact
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Edit;
