import { Link } from "react-router-dom";
const Navigation = () => {
	return (
		<div className="container">
			<nav className="page-nav">
				<Link to="/generate">Генерировать </Link>
				<Link to="/scan">Сканировать </Link>
				<Link to="/genhistory">История генерирования </Link>
				<Link to="/scanhistory">История сканирования</Link>
			</nav>
		</div>
	 );
}
 
export default Navigation;