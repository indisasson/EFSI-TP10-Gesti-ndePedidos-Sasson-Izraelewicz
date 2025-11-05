import { Routes, Route, HashRouter } from 'react-router-dom'
import './App.css'
import Formulario from './Views/Formulario'
import Layout from './Views/Layout'
import Dashboard from './Views/Dashboard'
import Home from './Views/Home'
import Estadisticas from './Views/Estadisticas'

function App() {
  return (
    <>
     <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Formulario" element={<Formulario />} />
          <Route path="/Estadisticas" element={<Estadisticas />} />
        </Route>
      </Routes>
     </HashRouter>
    </>
  )
}

export default App


