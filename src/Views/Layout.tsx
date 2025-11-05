import { Outlet, Link, useLocation } from 'react-router-dom'
import '../Css/Layout.css'
import Dashboard, { OrdersProvider } from './Dashboard'
import Footer from '../components/Footer'

const Layout = () => {
    const location = useLocation()
    
    return (
    <div className={`layout layout-top`}>
      <header className="topbar">
        <div className="container">
          <div className="brand">
            <span className="brand-name">MailAméricas</span>
          </div>
          <nav>
            <ul>
              <li className={location.pathname === "/" ? "active" : ""}>
                <Link to="/">Inicio</Link>
              </li>
              <li className={location.pathname === "/Dashboard" ? "active" : ""}>
                <Link to="/Dashboard">Dashboard</Link>
              </li>
              <li className={location.pathname === "/Estadisticas" ? "active" : ""}>
                <Link to="/Estadisticas">Estadísticas</Link>
              </li>
              <li className={location.pathname === "/Formulario" ? "active" : ""}>
                <Link to="/Formulario" className="btn primary">Nuevo Pedido</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <OrdersProvider>
        <main className="content container">
          <Outlet /> 
        </main>
        <Footer />
      </OrdersProvider>
    </div>
  )
}
export default Layout


