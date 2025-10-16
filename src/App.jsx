import { useState } from 'react'
import { Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom';
import './App.css'
import Formulario from './Views/Formulario.jsx'
import Layout from'./Views/Layout.jsx'
import Dashboard from './Views/Dashboard.jsx'
import Home from './Views/Home.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
     <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Formulario" element={<Formulario />} />
        </Route>
      </Routes>
     </HashRouter>
      
    </>
  )
}

export default App
