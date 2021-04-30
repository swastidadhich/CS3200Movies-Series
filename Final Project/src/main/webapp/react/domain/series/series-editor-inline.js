const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const SeriesEditorInline = ({series, deleteSeries, updateSeries}) => {
    const [seriesCopy, setSeriesCopy] = useState(series)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={seriesCopy.title}
                            onChange={(e)=>setSeriesCopy(seriesCopy => ({...seriesCopy, title: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/series/${seriesCopy.id}/movies`}>
                            Movies
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/series/${seriesCopy.id}/casts`}>
                            Casts
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateSeries(seriesCopy.id, seriesCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteSeries(series.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/series/${seriesCopy.id}`}>
                            {seriesCopy.title}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/series/${seriesCopy.id}/movies`}>
                            Movies
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/series/${seriesCopy.id}/casts`}>
                            Casts
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default SeriesEditorInline;