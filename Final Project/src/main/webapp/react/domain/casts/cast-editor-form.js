import castService, {findCastById} from "./cast-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;

const CastEditorForm = () => {
    const [cast, setCast] = useState({})
    const {castId} = useParams()
    const history = useHistory()
    useEffect(() => {
        findCastById(castId)
    }, []);
    const findCastById = (id) =>
        castService.findCastById(id)
            .then(cast => setCast(cast))
    const updateCast = (id, newCast) =>
        castService.updateCast(id, newCast)
            .then(() => history.goBack())
    const deleteCast = (id) =>
        castService.deleteCast(id)
            .then(() => history.goBack())
    
    return (
        <div>
            <h2>
                Cast Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={cast.id}/>
            <label>Title</label>
            <br/>
            <button
                onClick={() => updateCast(cast.id, cast)}
                className="btn btn-success btn-block">Save</button>
            <button
                onClick={() => {
                    history.goBack()
                }}
                className="btn btn-danger btn-block margin-left-10px">Cancel</button>
            <button
                onClick={() => deleteCast(cast.id)}
                className="btn btn-danger btn-block margin-left-10px">Delete</button>
        </div>
    )
}

export default CastEditorForm