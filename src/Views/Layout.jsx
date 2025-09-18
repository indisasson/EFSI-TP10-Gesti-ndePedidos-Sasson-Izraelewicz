import { Outlet, Link, useLocation} from "react-router-dom";
import { useState } from "react";
import { LogOut, ChevronLeft, ChevronRight } from "lucide-react"; // si usás este ícono
import '../Css/Layout.css'
import logo from '../assets/logo.png'

const Layout = () => {
    const location = useLocation(); // para saber en qué ruta estás
    const [sidebarExpanded, setSidebarExpanded] = useState(true);
  
    const toggleSidebar = () => {
      setSidebarExpanded(!sidebarExpanded);
    };
    
    return(
    <div className={`layout ${sidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
    <aside className={`sidebar ${sidebarExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="sidebar-header">
        <img src={logo} className='logo'/>
        <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
          {sidebarExpanded ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      
      <nav className={sidebarExpanded ? 'visible' : 'hidden'}>
        <ul>
          <li className={location.pathname === "/Dashboard" ? "active" : ""}>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li className={location.pathname === "/Formulario" ? "active" : ""}>
            <Link to="/Formulario">Formulario</Link>
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