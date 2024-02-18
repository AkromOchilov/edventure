import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Comments from './pages/Comments'
import Private from './layout'
import Dashboard from './pages/Dashboard'
import PLP from './pages/PLP'
import GroupMatching from './pages/GroupMatching'
import Vacancies from './pages/Vacancies'
import Health from './pages/Health'
import Profile from './pages/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/comments' element={<Comments />}/>
        <Route path='/' element={<Private />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/plp' element={<PLP />}/>
          <Route path='/group_matching' element={<GroupMatching />}/>
          <Route path='/vacancies' element={<Vacancies />}/>
          <Route path='/health' element={<Health />}/>
          <Route path='/profile' element={<Profile />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
