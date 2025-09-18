import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Formulario from './Views/Formulario.jsx'
import Layout from'./Views/Layout.jsx'
import Dashboard from './Views/Dashboard.jsx'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Formulario/" element={<Formulario />} />
        </Route>
      </Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
