import seriesService from "./series-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;
const SERIES_URL = "http://localhost:8080/api/series"

const SeriesEditorForm = () => {
    const [series, setSeries] = useState({})
    const {id} = useParams()
    const history = useHistory()
    useEffect(() => {
        findSeriesById(id)
    }, []);
    const findSeriesById = (id) =>
        seriesService.findSeriesById(id)
            .then(series => setSeries(series))
    const updateSeries = (id, newSeries) =>
        seriesService.updateSeries(id, newSeries)
            .then(() => history.goBack())
    const deleteSeries = (id) =>
        seriesService.deleteSeries(id)
            .then(() => history.goBack())
    
    return (
        <div>
            <h2>
                Series Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={series.id}/>
            <label>Title</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setSeries(series => ({...series, title: e.target.value}))}
                value={series.title}/>
            <button
                onClick={() => updateSeries(series.id, series)}
                className="btn btn-success btn-block">Save</button>
            <button
                onClick={() => {
                    history.goBack()
                }}
                className="btn btn-danger btn-block margin-left-10px">Cancel</button>
            <button
                onClick={() => deleteSeries(series.id)}
                className="btn btn-danger btn-block margin-left-10px">Delete</button>
        </div>
    )
}

export default SeriesEditorForm