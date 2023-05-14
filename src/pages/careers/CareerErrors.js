import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const CareerErrors = () => {
	const error = useRouteError();
	return (
		<div className="career-errors">
			<h2>Error</h2>
			<p>{error.message}</p>
			<Link to={'/'}>Back to the homepage</Link>
		</div>
	);
};

export default CareerErrors;
