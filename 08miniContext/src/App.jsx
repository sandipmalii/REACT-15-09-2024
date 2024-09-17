import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContext from './context/userContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h1> Hello World !  17-09-2023, Tuesday</h1>
    </UserContextProvider>
  )
}

export default App
