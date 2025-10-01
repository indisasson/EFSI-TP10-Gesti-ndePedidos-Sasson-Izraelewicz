import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Formulario from './Views/Formulario.jsx'
import Layout from'./Views/Layout.jsx'
import Dashboard from './Views/Dashboard.jsx'
import Home from './Views/Home.jsx'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Formulario" element={<Formulario />} />
        </Route>
      </Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
