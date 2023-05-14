import { useLoaderData } from 'react-router-dom';

const CareerDetails = () => {
	const career = useLoaderData();

	return (
		<div className="career-details">
			<h2>Career Details for {career.title}</h2>
			<p>Starting Salary: {career.salary}</p>
			<p>Location: {career.location} </p>

			<div className="details">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae ut ea
				incidunt dolor exercitationem debitis alias quod error doloremque
				voluptatibus inventore impedit sit iure fuga minus, repudiandae non
				cupiditate excepturi. Unde voluptatibus corporis, facere fuga natus ipsa
				iste omnis sapiente?
			</div>
		</div>
	);
};

export default CareerDetails;

export const careerDetailsLoader = async ({ params }) => {
	const { id } = params;

	const response = await fetch(`http://localhost:3500/careers/${id}`);

	if (!response.ok) {
		throw Error('Could not find that career');
	}
	return response.json();
};
