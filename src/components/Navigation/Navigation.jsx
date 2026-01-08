import { NavLink } from "react-router-dom";
const Navigation = () => {
	const thisClass = 'page-nav-item';
	const thisActiveClass = 'page-nav-item page-nav-item--active';
	
	return (
		<div className="container">
			<nav className="page-nav">
				<NavLink to="/" end className={({isActive}) => isActive ? thisActiveClass : thisClass}>Generate the QR</NavLink>
				<NavLink to="/scan" className={({isActive}) => isActive ? thisActiveClass : thisClass}>Scan the QR</NavLink>
				<NavLink to="/genhistory" className={({isActive}) => isActive ? thisActiveClass : thisClass}>Generation history</NavLink>
				<NavLink to="/scanhistory" className={({isActive}) => isActive ? thisActiveClass : thisClass}>Scan history</NavLink>
			</nav>
		</div>
	 );
}
 
export default Navigation;