import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { AuthProvider } from 'utils/auth';

import NavBar from './components/Navbar';
import HomePage from './pages/homepage';
import LoginPage from './pages/loginpage';
import ProfilePage from './pages/profilepage';
import RegisterPage from 'pages/registerpage';
import EventPage from 'pages/eventspage';

import 'semantic-ui-css/semantic.min.css';
import './App.css';


function App() {
  return (
    <AuthProvider>
      <Container>
        <Router>
          <NavBar/>
        <Routes>
          <Route path = "/" element={<HomePage />}/>
          <Route path = "/login" element = {<LoginPage />}/>
          <Route path = "/profiles" element = {<ProfilePage />}/>
          <Route path = "/events" element = {<EventPage />}/>
          <Route path = "/register" element = {<RegisterPage />}/>
        </Routes>
        </Router>
      </Container>
    </AuthProvider>
  );
}

export default App;
