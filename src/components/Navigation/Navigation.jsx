import { NavLink } from "react-router-dom";
const Navigation = () => {
	const thisClass = 'page-nav-item';
	const thisActiveClass = 'page-nav-item page-nav-item--active';
	return (
		<div className="container">
			<nav className="page-nav">
				<NavLink to="/" className={({isActive}) => isActive ? thisActiveClass : thisClass}>Генерировать </NavLink>
				<NavLink to="/scan" className={({isActive}) => isActive ? thisActiveClass : thisClass}>Сканировать </NavLink>
				<NavLink to="/genhistory" className={({isActive}) => isActive ? thisActiveClass : thisClass}>История генерирования </NavLink>
				<NavLink to="/scanhistory" className={({isActive}) => isActive ? thisActiveClass : thisClass}>История сканирования</NavLink>
			</nav>
		</div>
	 );
}
 
export default Navigation;