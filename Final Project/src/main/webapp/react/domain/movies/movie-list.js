import MovieEditorInline from "./movie-editor-inline";
import movieService, {createMovieForSeries} from "./movie-service"

const SERIES_URL = "http://localhost:8080/api/series"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const MovieList = () => {
    const [movies, setMovies] = useState([])
    const [newMovie, setNewMovie] = useState({})
    const {seriesId} = useParams()
    useEffect(() => {
        findMoviesForSeries(seriesId)
    }, [])
    const createMovieForSeries = (movie) =>
        movieService.createMovieForSeries(seriesId, movie)
            .then(movie => {
                setNewMovie({title:''})
                setMovies(movies => ([...movies, movie]))
            })
    const updateMovie = (id, newMovie) =>
        movieService.updateMovie(id, newMovie)
            .then(movie => setMovies(movies => (movies.map(movie => movie.id === id ? newMovie : movie))))
    const findMoviesForSeries = (seriesId) =>
        movieService.findMoviesForSeries(seriesId)
            .then(movies => setMovies(movies))
    const deleteMovie = (id) =>
        movieService.deleteMovie(id)
            .then(movies => setMovies(movies => movies.filter(movie => movie.id !== id)))
    return(
        <div>
            <h2>
                <Link onClick={() => history.back()}>
                    <i className="fas fa-arrow-left margin-right-10px"></i>
                </Link>
                Movies
            </h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="Movie Title"
                                   title="Please enter a title for the movie"
                                   className="form-control"
                                   value={newMovie.title}
                                   onChange={(e) => setNewMovie(newMovie => ({...newMovie, title: e.target.value}))}/>
                        </div>
                        <div className="col">
                            <input placeholder="Movie Description"
                                   title="Please enter a tagline for the movie"
                                   className="form-control"
                                   value={newMovie.description}
                                   onChange={(e) => setNewMovie(newMovie => ({...newMovie, description: e.target.value}))}/>
                        </div>
                        <div className="col">
                            <select placeholder="Movie Genre"
                                   title="Please choose a genre for the movie"
                                   className="form-control"
                                   value={newMovie.genre}
                                   onChange={(e) => setNewMovie(newMovie => ({...newMovie, genre: e.target.value}))}>
                                <option>DRAMA</option>
                                <option>COMEDY</option>
                                <option>HORROR</option>
                                <option>ROMANCE</option>
                                <option>ACTION</option>
                                <option>SCI-FI</option>
                            </select>
                        </div>
                        <div className="col">
                            <input placeholder="Movie Release Date"
                                   title="Please enter a release date for the movie"
                                   className="form-control"
                                   value={newMovie.releaseDate}
                                   onChange={(e) => setNewMovie(newMovie => ({...newMovie, releaseDate: e.target.value}))}/>
                        </div>
                        <div className="col">
                            <input placeholder="Movie Budget"
                                   title="Please enter a total budget for the movie"
                                   className="form-control"
                                   value={newMovie.budget}
                                   onChange={(e) => setNewMovie(newMovie => ({...newMovie, budget: e.target.value}))}/>
                        </div>
                        <div className="col-2">
                            <i className="fas float-right fa-plus fa-2x" onClick={() => createMovieForSeries(newMovie)}></i>
                        </div>
                    </div>
                </li>
            {
                movies.map(movie =>
                    <li key={movie.id} className="list-group-item">
                        <MovieEditorInline key={movie._id}
                                           updateMovie={updateMovie}
                                           deleteMovie={deleteMovie}
                                           movie={movie}/>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default MovieList;