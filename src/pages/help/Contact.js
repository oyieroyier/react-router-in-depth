import React from 'react';

const Contact = () => {
	return (
		<div className="contact">
			<h3>Contact Us</h3>

			<form>
				<label>
					<span>Your email:</span>
					<input type="email" name="email" required />
				</label>
				<label>
					<span>Your mesage:</span>
					<textarea name="messasge" cols="30" rows="10"></textarea>
				</label>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default Contact;
