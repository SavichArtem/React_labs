import { Link } from 'react-router-dom';
import '../NotFoundPage/NotFoundPage.css';

export function NotFoundPage() {
  return (
    <div className="not_found_container">
      <h1>404 - Страница не найдена</h1>
      <p>Извините, запрашиваемая страница не существует.</p>
      <Link to="/" className="home_link">Вернуться на главную</Link>
    </div>
  );
}