import movieService, {findMovieById} from "./movie-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;

const MovieEditorForm = () => {
    const [movie, setMovie] = useState({})
    const {movieId} = useParams()
    const history = useHistory()
    useEffect(() => {
        findMovieById(movieId)
    }, []);
    const findMovieById = (id) =>
        movieService.findMovieById(id)
            .then(movie => setMovie(movie))
    const updateMovie = (id, newMovie) =>
        movieService.updateMovie(id, newMovie)
            .then(() => history.goBack())
    const deleteMovie = (id) =>
        movieService.deleteMovie(id)
            .then(() => history.goBack())
    
    return (
        <div>
            <h2>
                Movie Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={movie.id}/>
            <label>Title</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setMovie(movie => ({...movie, title: e.target.value}))}
                value={movie.title}/>
            <label>Description</label>
            <input
                className="form-control margin-bottom-10px"
                value={movie.description}
                onChange={(e)=>setMovie(movie => ({...movie, description: e.target.value}))}/>
            <label>Genre</label>
            <select
                className="form-control margin-bottom-10px"
                value={movie.genre}
                onChange={(e)=>setMovie(movie => ({...movie, genre: e.target.value}))}>
                <option>DRAMA</option>
                <option>COMEDY</option>
                <option>HORROR</option>
                <option>ROMANCE</option>
                <option>ACTION</option>
                <option>SCI-FI</option>
            </select>
            <label>Release Date</label>
            <input
                type='date'
                className="form-control margin-bottom-10px"
                value={movie.releaseDate}
                onChange={(e)=>setMovie(movie => ({...movie, releaseDate: e.target.value}))}/>
            <label> Budget </label>
            <input
                type="number"
                checked={movie.budget}
                onChange={(e)=>setMovie(movie => ({...movie, budget: parseInt(e.target.value)}))}/>
            <br/>
            <button
                onClick={() => updateMovie(movie.id, movie)}
                className="btn btn-success btn-block">Save</button>
            <button
                onClick={() => {
                    history.goBack()
                }}
                className="btn btn-danger btn-block margin-left-10px">Cancel</button>
            <button
                onClick={() => deleteMovie(movie.id)}
                className="btn btn-danger btn-block margin-left-10px">Delete</button>
        </div>
    )
}

export default MovieEditorForm