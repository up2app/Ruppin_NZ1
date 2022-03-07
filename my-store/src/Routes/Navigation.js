import React from 'react';
import {Routes, Route} from 'react-router-dom';
import UserContextProvider from '../Context/UserContext';
import Login from '../Pages/Login';
import Profile from '../Pages/Profile';

export default function Navigation() {
  return (
    <Routes>
        <Route exact path="/" element={
            <UserContextProvider>
                <Login/>
            </UserContextProvider>
        }/>
        <Route path="/profile" element={
            <UserContextProvider>
                <Profile/>
            </UserContextProvider>
        }/>
    </Routes>
  )
}
