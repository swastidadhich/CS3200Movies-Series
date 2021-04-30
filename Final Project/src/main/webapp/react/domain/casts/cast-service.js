const SERIES_URL = "http://localhost:8080/api/series"
const CAST_URL = "http://localhost:8080/api/casts"

export const createCastForSeries = (seriesId, cast) =>
    fetch(`${SERIES_URL}/${seriesId}/series`, {
        method: 'POST',
        body: JSON.stringify(cast),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findCastsForSeries = (seriesId) =>
    fetch(`${SERIES_URL}/${seriesId}/series`)
        .then(response => response.json())

export const findCastById = (id) =>
    fetch(`${CAST_URL}/${id}`)
        .then(response => response.json())

export const updateCast = (id, cast) =>
    fetch(`${CAST_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(cast),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

const deleteCast = (id) =>
    fetch(`${CAST_URL}/${id}`, {
        method: "DELETE"
    })

export default {
    createCastForSeries,
    findCastsForSeries,
    findCastById,
    updateCast,
    deleteCast
}