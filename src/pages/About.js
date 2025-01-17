import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const About = () => {
	const [user, setUser] = useState('Mario');

	if (!user) {
		return <Navigate to={'/'} replace={true} />;
	}
	return (
		<div className="about">
			<h2>About Us</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
				doloremque ea magnam pariatur, officiis aliquam, incidunt quisquam a
				ipsum vero cupiditate laboriosam ipsam voluptates assumenda.
			</p>
			<p>
				Rem iusto nulla obcaecati at non dolores est laudantium nihil molestiae
				possimus aspernatur eligendi, ullam ex excepturi, nesciunt animi!
				Voluptatem qui magnam nisi modi tenetur!
			</p>
			<p>
				Ipsa sunt beatae possimus odit, qui excepturi illo quo eligendi
				reiciendis fugit accusantium? Atque, illum. Voluptatem reiciendis
				voluptate veniam enim facere optio iure quaerat. Eius.
			</p>

			<button
				onClick={() => {
					setUser(null);
				}}
			>
				Logout
			</button>
		</div>
	);
};

export default About;
