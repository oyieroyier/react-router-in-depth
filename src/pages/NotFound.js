import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div>
			<h2>Page Not Found</h2>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quas
				doloribus omnis nisi, tenetur ad adipisci ipsum recusandae maxime
				deleniti.
			</p>

			<p>
				Go to the <Link to={'/'}> Homepage</Link>
			</p>
		</div>
	);
};

export default NotFound;
