import { useState } from 'react'
import './App.css'
import UserContextProvider  from './context/userContext'
import Login from './components/Login'
import Profile from './components/Profile'



function App() {
 
  return (
    <UserContextProvider>
     <h1> Hello World !  17-09-2023, Tuesday</h1>
     <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
