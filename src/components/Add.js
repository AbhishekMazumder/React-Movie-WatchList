import React, { useState } from 'react';

const Add = () => {
	const [query, setQuery] = useState('');

	const handleChange = e => {
		e.preventDefault();
		setQuery(e.target.value);
	};

	return (
		<div className="add-page">
			<div className="container">
				<div className="add-content">
					<div className="input-wrapper">
						<input
							type="text"
							placeholder="Search for a movie"
							value={query}
							onChange={handleChange}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Add;
