import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const MovieControls = ({ movie, type }) => {
	const {
		removeMovieFromWatchlist,
		addMovieToWatched,
		moveFromWatchedToWatchlist,
		removeFromWatched,
	} = useContext(GlobalContext);
	return (
		<div className="inner-card-controls">
			<button
				className="ctrl-btn"
				onClick={
					type === 'watchlist'
						? () => addMovieToWatched(movie)
						: () => moveFromWatchedToWatchlist(movie)
				}
			>
				{type === 'watchlist' ? (
					<i className="fas fa-eye"></i>
				) : (
					<i className="fas fa-eye-slash"></i>
				)}
			</button>
			<button
				className="ctrl-btn"
				onClick={
					type === 'watchlist'
						? () => removeMovieFromWatchlist(movie.id)
						: () => removeFromWatched(movie.id)
				}
			>
				<i className="fas fa-times"></i>
			</button>
		</div>
	);
};

export default MovieControls;
