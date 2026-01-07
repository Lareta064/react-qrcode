import { Link } from "react-router-dom";
const Navigation = () => {
	return (
		<div className="container">
			<nav className="page-nav">
				<Link to="/generate">Генерировать </Link>
				<Link to="/scan">Сканировать </Link>
				<Link to="/">История генерирования </Link>
				<Link to="/">История сканирования</Link>
			</nav>
		</div>
	 );
}
 
export default Navigation;