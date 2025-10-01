import { Outlet, Link, useLocation} from "react-router-dom";
import '../Css/Layout.css'
import logo from '../assets/logo.png'

const Layout = () => {
    const location = useLocation();
    
    return(
    <div className={`layout`}>
    <aside className={`sidebar`}>
      <div className="sidebar-header">
        <img src={logo} className='logo' alt="MailAméricas"/>
      </div>
      
      <nav className={'visible'}>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Inicio</Link>
          </li>
          <li className={location.pathname === "/Dashboard" ? "active" : ""}>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>

      
    </aside>

    <main className="content">
      <Outlet /> 
    </main>
  </div>
  )
}
export default Layout