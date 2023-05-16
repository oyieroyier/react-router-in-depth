import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
	const location = useLocation();

	// /help/contact --> help | contact

	let currentLink = '';

	let crumbs = location.pathname
		.split('/')
		.filter((crumb) => crumb !== '')
		.map((crumb) => {
			currentLink += `/${crumb}`;
			return (
				<div className="crumb" key={crumb}>
					<Link to={currentLink}>{crumb}</Link>
				</div>
			);
		});
	return <div className="breadcrumbs">{crumbs}</div>;
};

export default Breadcrumbs;
