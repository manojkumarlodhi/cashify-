import { useState } from 'react'
import Login from './Components/Login'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Home from './Components/Home'
import Header from './Components/Header'
import Signup from './Components/Signup'
import Profile from './Components/Profile'


function App() {
 
  
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='login' element= {<Login />} />
          <Route path='signup' element= {<Signup/>} />
          <Route path='profile' element= {<Profile/>} />
          

        </Routes>
      </Router>
    </>
  )
}

export default App
