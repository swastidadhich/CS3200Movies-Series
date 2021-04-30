const CAST_URL = "http://127.0.0.1:3306/api/casts"
const ACTOR_URL = "http://127.0.0.1:3306/api/actors"

export const createActorsForCast = (castId, actor) =>
    fetch(`${CAST_URL}/${castId}/actors`, {
      method: 'POST',
      body: JSON.stringify(actor),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findActorsForCast = (castId) =>
    fetch(`${CAST_URL}/${castId}/actors`)
    .then(response => response.json())

export const findActorById = (id) =>
    fetch(`${ACTOR_URL}/${id}`)
    .then(response => response.json())

export const updateActor = (id, actor) =>
    fetch(`${ACTOR_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(actor),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

const deleteActor = (id) =>
    fetch(`${ACTOR_URL}/${id}`, {
      method: "DELETE"
    })

export default {
  createActorsForCast,
  findActorsForCast,
  findActorById,
  updateActor,
  deleteActor
}