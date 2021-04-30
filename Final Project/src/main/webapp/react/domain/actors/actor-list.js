import ActorEditorInline from "./actor-editor-inline";
import actorService, {createActorForCast} from "./actor-service"

const COURSE_URL = "http://localhost:8080/api/actors"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const ActorList = () => {
  const [actors, setActors] = useState([])
  const [newActor, setNewActor] = useState({})
  const {castId} = useParams()
  useEffect(() => {
    findActorsForCast(castId)
  }, [])
  const createActorsForCase = (actor) =>
      actorService.createActorForCast(castId, actor)
      .then(actor => {
        setNewActor({name:''})
        setActors(actors => ([...actors, actors]))
      })
  const updateActor = (id, newActor) =>
      actorService.updateActor(id, newActor)
      .then(actor => setActors(actors => (actors.map(actor => actor.id === id ? newActor : actor))))
  const findActorsForCast = (castId) =>
      actorService.findActorsForCast(castId)
      .then(actors => setActors(actors))
  const deleteActor = (id) =>
      actorService.deleteActor(id)
      .then(actors => setActors(actors => actors.filter(actor => actor.id !== id)))
  return(
      <div>
        <h2>
          <Link onClick={() => history.back()}>
            <i className="fas fa-arrow-left margin-right-10px"></i>
          </Link>
          Sections
        </h2>
        <ul className="list-group">
          <li className="list-group-item">
            <div className="row">
              <div className="col">
                <input placeholder="Actor Name"
                       title="Please enter a name for the actor"
                       className="form-control"
                       value={newActor.title}
                       onChange={(e) => setNewActor(newActor => ({...newActor, name: e.target.value}))}/>
              </div>
              <div className="col-2">
                <i className="fas float-right fa-plus fa-2x" onClick={() => createActorForCast(newActor)}></i>
              </div>
            </div>
          </li>
          {
            actors.map(actor =>
                <li key={actor.id} className="list-group-item">
                  <ActorEditorInline key={actor._id}
                                       updateActor={updateActor}
                                       deleteActor={deleteActor}
                                       actor={actor}/>
                </li>)
          }
        </ul>
      </div>
  )
}

export default ActorList;