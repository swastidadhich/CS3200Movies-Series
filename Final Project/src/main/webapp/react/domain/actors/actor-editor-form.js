import actorService from "./actor-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;

const ActorEditorForm = () => {
  const [actor, setActor] = useState({})
  const {actorId} = useParams()
  const history = useHistory()
  useEffect(() => {
    findActorById(actorId)
  }, []);
  const findActorById = (id) =>
      actorService.findActorById(id)
      .then(actor => setActor(actor))
  const updateActor = (id, newActor) =>
      actorService.updateActor(id, newActor)
      .then(() => history.goBack())
  const deleteActor = (id) =>
      actorService.deleteActor(id)
      .then(() => history.goBack())

  return (
      <div>
        <h2>
          Actor Editor
        </h2>
        <label>Id</label>
        <input
            className="form-control margin-bottom-10px"
            readOnly={true}
            value={actor.id}/>
        <label>First Name</label>
        <input
            className="form-control margin-bottom-10px"
            onChange={(e) => setActor(actor => ({...actor, firstName: e.target.value}))}
            value={actor.firstName}/>
        <label>Last Name</label>
        <input
            className="form-control margin-bottom-10px"
            onChange={(e) => setActor(actor => ({...actor, lastName: e.target.value}))}
            value={actor.lastName}/>
        <label>Role</label>
        <input
            className="form-control margin-bottom-10px"
            onChange={(e) => setActor(actor => ({...actor, role: e.target.value}))}
            value={actor.role}/>

        <br/>
        <button
            onClick={() => updateActor(actor.id, actor)}
            className="btn btn-success btn-block">Save</button>
        <button
            onClick={() => {
              history.goBack()
            }}
            className="btn btn-danger btn-block margin-left-10px">Cancel</button>
        <button
            onClick={() => deleteActor(actor.id)}
            className="btn btn-danger btn-block margin-left-10px">Delete</button>
      </div>
  )
}

export default ActorEditorForm