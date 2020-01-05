import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './moviesList.css'

class MoviesList extends React.Component {
  state = { movies: [] };
	onDashboardLoad = async () => {
	  const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?', { params: {
		  api_key: '0bdd84d5534b9b1f988719cdeba8dc4d',
		  language: 'en-US',
		  page: '1',
		  region: 'PL',
		 }});

		const movies = response.data.results.map(movie => {return {
			id: movie.id,
			title: movie.title,
			poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
		}
	})
		this.setState({ movies : movies});
}
  
	componentDidMount() {
		this.onDashboardLoad();
	};

    render() {
            return this.state.movies.map((movie, index) => {
                return (
					<Link className="link" key={index}  to={{
						pathname: '/movie',
						state: {
							movieId : movie.id
						}
					}} >
                    <div className="card">
                        <div className="image">
                            <img src={movie.poster} alt=""/>
                        </div>
                        <div className="content">
                            <div className="header">{movie.title}</div>
                        </div>
                    </div>
					</Link>
                )})
        }
    };

export default MoviesList;