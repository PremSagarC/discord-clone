import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Hero'
import Channels from './pages/Channels'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/channels' element={<Channels />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
