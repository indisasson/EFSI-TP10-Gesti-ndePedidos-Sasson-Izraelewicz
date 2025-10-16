const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <span>© {year} MailAméricas</span>
                    <span className="separator">·</span>
                    <span>Gestión de Pedidos</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer


