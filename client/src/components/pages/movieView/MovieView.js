import React from 'react';
import axios from 'axios';
import './movieView.css'

class MovieView extends React.Component {
  state = { movie_id : this.props.location.state.movieId || null, movieDetails : {} };
	onViewLoad = async () => {
	    const response = await axios.get(`https://api.themoviedb.org/3/movie/${this.state.movie_id}?`, { params: {
		  api_key: '0bdd84d5534b9b1f988719cdeba8dc4d',
		  language: 'en-US',
    }})

	    const movie = {
			id: response.data.id,
            title: response.data.title,
            overview: response.data.overview,
            runtime: `${response.data.runtime} min`,
            language: response.data.original_language,
            voteAverage: response.data.vote_average,
            moviePoster: `https://image.tmdb.org/t/p/w500/${response.data.poster_path}`
        }
	    this.setState({ movieDetails : movie});
}

  
	componentDidMount() {
		this.onViewLoad();
	};

    render() {
                return ( 
                    <div className="ui equal width middle aligned column grid">
                        <div className="center aligned column">
                            <img src={this.state.movieDetails.moviePoster}/>
                        </div>
                        <div className="column">
                            <p><span className="label">Title : </span>{this.state.movieDetails.title}</p>
                            <p><span className="label">Overview : </span>{this.state.movieDetails.overview}</p>
                            <p><span className="label">Runtime : </span>{this.state.movieDetails.runtime}</p>
                            <p><span className="label">Language : </span>{this.state.movieDetails.language}</p>
                            <p><span className="label">Vote average : </span>{this.state.movieDetails.voteAverage}</p>
                            </div>  
                    </div>
                )
        }
    };

export default MovieView;