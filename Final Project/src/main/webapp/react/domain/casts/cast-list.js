import CastEditorInline from "./cast-editor-inline";
import castService, {createCastForSeries} from "./cast-service"

const SERIES_URL = "http://localhost:8080/api/series"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const CastList = () => {
    const [casts, setCasts] = useState([])
    const [newCast, setNewCast] = useState({})
    const {seriesId} = useParams()
    useEffect(() => {
        findCastsForSeries(seriesId)
    }, [])
    const createCastForSeries = (cast) =>
        castService.createCastForSeries(seriesId, cast)
            .then(cast => {
                setNewCast()
                setCasts(casts => ([...casts, cast]))
            })
    const updateCast = (id, newCast) =>
        castService.updateCast(id, newCast)
            .then(cast => setCasts(casts => (casts.map(cast => cast.id === id ? newCast : cast))))
    const findCastsForSeries = (seriesId) =>
        castService.findCastsForSeries(seriesId)
            .then(casts => setCasts(casts))
    const deleteCast = (id) =>
        castService.deleteCast(id)
            .then(casts => setCasts(casts => casts.filter(cast => cast.id !== id)))
    return(
        <div>
            <h2>
                <Link onClick={() => history.back()}>
                    <i className="fas fa-arrow-left margin-right-10px"></i>
                </Link>
                Casts
            </h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="Add Actor"/>
                        </div>
                        <div className="col-2">
                            <i className="fas float-right fa-plus fa-2x" onClick={() => createCastForSeries(newCast)}></i>
                        </div>
                    </div>
                </li>
            {
                casts.map(cast =>
                    <li key={cast.id} className="list-group-item">
                        <CastEditorInline key={cast._id}
                                          updateCast={updateCast}
                                          deleteCast={deleteCast}
                                          cast={cast}/>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default CastList;