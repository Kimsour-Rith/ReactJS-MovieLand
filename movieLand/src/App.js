import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard'
// e4be12da
const API_URL = 'http://www.omdbapi.com?apikey=e4be12da';


const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	const searchMovies= async(title) => {
		const response =  await fetch(`${API_URL}&s=${title}`); // to call the API to get response
		const data = await response.json();
		setMovies(data.Search);
	};

	useEffect(() =>{
		searchMovies('Spiderman');
	},[]);
	return(
		<div className="app">
			<h1>MovieLand</h1>
			<div className="search">
				<input
					placeholder="Search for movies"
					value = {searchTerm} // this is static value
					onChange ={(e) => setSearchTerm(e.target.value)}
				/>
				<img
					src ={SearchIcon}
					alt="search"
					onClick={() => searchMovies(searchTerm)}
				/>
			</div>

			{movies?.length > 0
				?(
					<div className='container'>
						{/* <MovieCard movie1={movie1}/> */}
						{movies.map((movie) =>(  // Dynamicly loop over all the movies
								<MovieCard movie={movie}/>
						))}
					</div>
				) : (
					<div className='empty'>
						<h2>No movies found</h2>
					</div>
				)
			}	
		</div>
	);
}

export default App;