import React from 'react'

const MovieControls = ({movie, type}) => {
  return (
		<div className="inner-card-controls">
			{type === 'watchlist' && (
				<>
					<button className="ctrl-btn">
						<i className="fa-fw fr fa-eye"></i>
					</button>
					<button className="ctrl-btn">
						<i className="fa-fw fr fa-times"></i>
					</button>
				</>
			)}
		</div>
	);
}

export default MovieControls
