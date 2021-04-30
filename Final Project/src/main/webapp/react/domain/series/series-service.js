const SERIES_URL = "http://localhost:8080/api/series"

export const createSeries = (series) =>
    fetch(SERIES_URL, {
        method: 'POST',
        body: JSON.stringify(series),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findAllSeries = () =>
    fetch(SERIES_URL)
        .then(response => response.json())

export const findSeriesById = (id) =>
    fetch(`${SERIES_URL}/${id}`)
        .then(response => response.json())

export const updateSeries = (id, series) =>
    fetch(`${SERIES_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(series),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

const deleteSeries = (id) =>
    fetch(`${SERIES_URL}/${id}`, {
        method: "DELETE"
    })

export default {
    createSeries,
    findAllSeries,
    findSeriesById,
    updateSeries,
    deleteSeries
}