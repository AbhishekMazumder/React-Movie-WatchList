import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const MovieCard = ({ movie }) => {
	const {
		addMovieToWatchlist,
		watchlist,
		watched,
		addMovieToWatched,
	} = useContext(GlobalContext);

	// let storedMovie = watchlist.find(o => o.id === movie.id);
	// const watchlistDisabled = storedMovie ? true : false;

	return (
		<div className="result-card">
			<div className="poster-wrapper">
				{movie.poster_path ? (
					<img
						src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
						alt={`${movie.title} poster`}
					/>
				) : (
					<div className="filler-poster"></div>
				)}
			</div>

			<div className="info">
				<div className="header">
					<h3 className="title">{movie.title}</h3>
					<h4 className="release-date">
						{movie.release_date ? movie.release_date.substring(0, 4) : '-'}
					</h4>
				</div>

				<div className="controls">
					<button
						className="btn"
						disabled={
							watchlist.find(o => o.id === movie.id)
								? true
								: watched.find(o => o.id === movie.id)
								? true
								: false
						}
						onClick={() => addMovieToWatchlist(movie)}
					>
						Add To Watchlist
					</button>

					<button
						className="btn"
						disabled={watched.find(o => o.id === movie.id) ? true : false}
						onClick={() => addMovieToWatched(movie)}
					>
						Add To Watched
					</button>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
