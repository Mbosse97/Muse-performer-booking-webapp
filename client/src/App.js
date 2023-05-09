import React, {Fragment, useContext} from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { AuthProvider, AuthContext } from 'utils/auth';
import AuthRoute from 'utils/AuthRoute';


import NavBar from './components/Navbar';
import HomePage from './pages/homepage';
import LoginPage from './pages/loginpage';
import ProfilePage from './pages/profilepage';
import RegisterPage from 'pages/registerpage';
import EventPage from 'pages/eventspage';
import Footer from './components/Footer'

import 'semantic-ui-css/semantic.min.css';
import './App.css';
import SingleProfilePage from 'pages/singleProfilePage';


function App() {
  const {user} = useContext(AuthContext);

  return (
    <AuthProvider>
        <Router >
          <NavBar/>
          <Routes>
           <Route path = "/" element={<HomePage />}/>
          </Routes>
          <Container style={{minHeight:'100vh'}}>
            <Routes>
              <Route path = "/profiles" element = {<ProfilePage />}/>
              <Route path = "/events" element = {<EventPage />}/>
              <Route path = "/login" element = { user ? <Navigate to ="/" replace /> : <LoginPage />}/>
              <Route path = "/register" element = { user ? (<Navigate to ="/" replace/>) : (<RegisterPage />)}/>
              <Route path = '/myprofile' element = {<SingleProfilePage/>}/>
            </Routes>
          </Container>
        </Router>
          <Footer/>
    </AuthProvider>
  );
}

export default App;
