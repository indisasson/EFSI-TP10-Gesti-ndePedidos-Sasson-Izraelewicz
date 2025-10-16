import { Link } from 'react-router-dom'
import '../Css/Home.css'

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>MailAméricas · Gestión de Pedidos</h1>
                    <p className="subtitle">Administra pedidos con una experiencia moderna, rápida y confiable.</p>
                    <div className="cta">
                        <Link to="/Dashboard" className="btn primary">Ver Dashboard</Link>
                        <Link to="/Formulario" className="btn ghost">Nuevo Pedido</Link>
                    </div>
                    <div className="hero-stats">
                        <div>
                            <span className="stat-label">Disponibilidad</span>
                            <span className="stat-value">99.9%</span>
                        </div>
                        <div>
                            <span className="stat-label">Pedidos/día</span>
                            <span className="stat-value">1.2k</span>
                        </div>
                        <div>
                            <span className="stat-label">Tiempo medio</span>
                            <span className="stat-value">2.4s</span>
                        </div>
                    </div>
                </div>
                <div className="hero-glow" aria-hidden="true" />
            </section>

            <section className="features">
                <div className="feature-card">
                    <div className="icon">📦</div>
                    <h3>Pedidos claros</h3>
                    <p>Visualizá cada pedido con detalle, estado y totales al instante.</p>
                </div>
                <div className="feature-card">
                    <div className="icon">⚡</div>
                    <h3>Acciones rápidas</h3>
                    <p>Filtrá por estado y creá nuevos pedidos con mínima fricción.</p>
                </div>
                <div className="feature-card">
                    <div className="icon">📊</div>
                    <h3>Indicadores</h3>
                    <p>Seguimiento de pendientes, enviados y entregados en tiempo real.</p>
                </div>
            </section>
        </div>
    )
}

export default Home


