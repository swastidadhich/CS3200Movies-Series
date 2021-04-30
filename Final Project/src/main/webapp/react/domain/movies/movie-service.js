const SERIES_URL = "http://localhost:8080/api/series"
const MOVIE_URL = "http://localhost:8080/api/movies"

export const createMovieForSeries = (seriesId, movie) =>
    fetch(`${SERIES_URL}/${seriesId}/series`, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findMoviesForSeries = (seriesId) =>
    fetch(`${SERIES_URL}/${seriesId}/series`)
        .then(response => response.json())

export const findMovieById = (id) =>
    fetch(`${MOVIE_URL}/${id}`)
        .then(response => response.json())

export const updateMovie = (id, movie) =>
    fetch(`${MOVIE_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(movie),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

const deleteMovie = (id) =>
    fetch(`${MOVIE_URL}/${id}`, {
        method: "DELETE"
    })

export default {
    createMovieForSeries,
    findMoviesForSeries,
    findMovieById,
    updateMovie,
    deleteMovie
}