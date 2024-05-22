import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Projects from './pages/Projects'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />

        
      </Routes>
    
    </BrowserRouter>
      )
}
