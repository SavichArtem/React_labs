import '../Navigation/Navigation.css';
import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <nav className="nav">
            <ul className="nav_list">
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/freelancer">Фрилансеры</Link></li>
                <li><Link to="/contact">Контакты</Link></li>
            </ul>
        </nav>
    )
}