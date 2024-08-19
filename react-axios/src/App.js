import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import UserList from './components/UserList';
import Edit from './components/Edit';
import Navbar from './components/Navbar';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AddUser from './components/AddUser';



function App() {
  const [mode, setMode] = useState('light');

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <UserProvider>
        <div className="App">
          <Navbar  setMode={setMode} mode={mode} /> 
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/add-contact" element={<AddUser />} />
          </Routes>
        </div>
      </UserProvider>
    </Router>
    </ThemeProvider>
  );
}

export default App;

