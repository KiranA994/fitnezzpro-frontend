import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import OnlineClass from './pages/OnlineClass'
import MemberShip from './pages/MemberShip'
import Trainers from './pages/Trainers'
import Contact from './pages/Contact'
import Payment from './pages/Payment'
import Admin from './pages/Admin'
import Auth from './pages/Auth'

function App() {

  return (
    <>
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/online-class' element={<OnlineClass />} />
        <Route path='/membership' element={<MemberShip />} />
        <Route path='/trainers' element={<Trainers />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register/>} />
      </Routes>
    </>
  )
}

export default App
