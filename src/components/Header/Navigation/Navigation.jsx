import { BootstrapNav } from '../../Bootstrap/BootstrapNav';
import { Link, useLocation } from "react-router-dom";
import '../Navigation/Navigation.css';

export function Navigation() {
    const location = useLocation();
    
    return (
        <BootstrapNav>
            <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Главная</Link>
            </li>
            <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/freelancer' ? 'active' : ''}`} to="/freelancers">Фрилансеры</Link>
            </li>
            <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Контакты
                </Link>
            </li>
        </BootstrapNav>
    )
}