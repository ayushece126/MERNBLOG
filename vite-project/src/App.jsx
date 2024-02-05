import {React, Lazy, Suspense} from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import SignUp from './Pages/SignUp'
import Projects from './Pages/Projects'
import DashBoard from './Pages/DashBoard'
import About from './Pages/About'
import Headers  from './components/Header'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path='/projects' element={<Projects/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
