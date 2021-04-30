const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const MovieEditorInline = ({movie, deleteMovie, updateMovie}) => {
    const [movieCopy, setMovieCopy] = useState(movie)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/movies/${movieCopy.id}/series`}>
                            All Series
                        </Link>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={movieCopy.title}
                            onChange={(e)=>setMovieCopy(movieCopy => ({...movieCopy, title: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={movieCopy.description}
                            onChange={(e)=>setMovieCopy(movieCopy => ({...movieCopy, description: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <select
                            className="form-control"
                            value={movieCopy.genre}
                            onChange={(e)=>setMovieCopy(movieCopy => ({...movieCopy, genre: e.target.value}))}>
                            <option>DRAMA</option>
                            <option>COMEDY</option>
                            <option>HORROR</option>
                            <option>ROMANCE</option>
                            <option>ACTION</option>
                            <option>SCI-FI</option>
                        </select>
                    </div>
                    <div className="col">
                        <input
                            type="date"
                            className="form-control"
                            value={movieCopy.releaseDate}
                            onChange={(e)=>setMovieCopy(movieCopy => ({...movieCopy, releaseDate: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            type="number"
                            checked={movieCopy.budget}
                            onChange={(e)=>setMovieCopy(movieCopy => ({...movieCopy, budget: parseInt(e.target.value)}))}/>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateMovie(movieCopy.id, movieCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteMovie(movie.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/movies/${movieCopy.id}`}>
                            {movieCopy.title}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/movies/${movieCopy.id}`}>
                            {movieCopy.description}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/movies/${movieCopy.id}`}>
                            {movieCopy.genre}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/movies/${movieCopy.id}`}>
                            {movieCopy.releaseDate}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/movies/${movieCopy.id}`}>
                            {movieCopy.budget}
                        </Link>
                    </div>
                    <div className="col-1">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default MovieEditorInline;