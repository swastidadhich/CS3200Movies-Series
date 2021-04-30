const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const ActorEditorInline = ({actor, deleteActor, updateActor}) => {
  const [actorCopy, setActorCopy] = useState(actor)
  const [editing, setEditing] = useState(false)
  return(
      <div>
        {
          editing &&
          <div className="row">
            <div className="col">
              <input
                  className="form-control"
                  value={actorCopy.firstName}
                  onChange={(e)=>setActorCopy(actorCopy => ({...actorCopy, firstName: e.target.value}))}/>
            </div>
            <div className="col">
              <input
                  className="form-control"
                  value={actorCopy.lastName}
                  onChange={(e)=>setActorCopy(actorCopy => ({...actorCopy, lastName: e.target.value}))}/>
            </div>
            <div className="col">
              <input
                  className="form-control"
                  value={actorCopy.role}
                  onChange={(e)=>setActorCopy(actorCopy => ({...actorCopy, role: e.target.value}))}/>
            </div>
            <div className="col-2">
              <i className="fas fa-2x fa-check float-right margin-left-10px"
                 onClick={() => {
                   setEditing(false)
                   updateActor(actorCopy.id, actorCopy)
                 }}></i>
              <i className="fas fa-2x fa-undo float-right margin-left-10px"
                 onClick={() => setEditing(false)}></i>
              <i className="fas fa-2x fa-trash float-right margin-left-10px"
                 onClick={() => deleteActor(actor.id)}></i>
            </div>
          </div>
        }
        {
          !editing &&
          <div className="row">
            <div className="col">
              <Link to={`/sections/${actorCopy.id}`}>
                {actorCopy.firstName}
              </Link>
            </div>
            <div className="col">
              <Link to={`/sections/${actorCopy.id}`}>
                {actorCopy.lastName}
              </Link>
            </div>
            <div className="col">
              <Link to={`/sections/${actorCopy.id}`}>
                {actorCopy.role}
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

export default ActorEditorInline;