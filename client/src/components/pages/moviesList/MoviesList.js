import React from 'react';
import axios from 'axios';

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
			movieId: movie.id,
			movieTitle: movie.title,
			moviePoster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
		}
	})
		this.setState({ movies : movies});
}
  
	componentDidMount() {
		this.onDashboardLoad();
	};

    render() {
            return this.state.movies.map((element, index) => {
                return ( 
                    <div className="card" key={index}>
                        <div className="image">
                            <img src={element.moviePoster} alt=""/>
                        </div>
                        <div className="content">
                            <div className="header">{element.movieTitle}</div>
                        </div>
                    </div>
                )})
        }
    };

export default MoviesList;