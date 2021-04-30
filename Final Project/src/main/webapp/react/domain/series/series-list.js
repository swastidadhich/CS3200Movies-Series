import SeriesEditorInline from "./series-editor-inline";
import seriesService, {findAllSeries} from "./series-service"

const SERIES_URL = "http://localhost:8080/api/series"
const { useState, useEffect } = React;

const SeriesList = () => {
    const [series, setSeries] = useState([])
    const [newSeries, setNewSeries] = useState({})
    useEffect(() => {
        findAllSeries()
    }, [])
    const createSeries = (series) =>
        seriesService.createSeries(series)
            .then(series => {
                setNewSeries({title:''})
                setSeries(series => ([...series, series]))
            })
    const updateSeries = (id, newSeries) =>
        seriesService.updateSeries(id, newSeries)
            .then(series => setSeries(series => (series.map(series => series.id === id ? newSeries : series))))
    const findAllSeries = () =>
        seriesService.findAllSeries()
            .then(series => setSeries(series))
    const deleteSeries = (id) =>
        seriesService.deleteSeries(id)
            .then(series => setSeries(series => series.filter(series => series.id !== id)))
    return(
        <div>
            <h2>Series</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="Series Title"
                                   title="Please enter a title for the series" className="form-control" value={newSeries.title}
                                   onChange={(e) => setNewSeries(newSeries => ({...newSeries, title: e.target.value}))}/>
                        </div>
                        <div className="col-3">
                            <i className="fas fa-plus fa-2x float-right" onClick={() => createSeries(newSeries)}></i>
                        </div>
                    </div>
                </li>
            {
              series.map(series =>
                    <li key={series.id} className="list-group-item">
                        <SeriesEditorInline key={series._id}
                            updateSeries={updateSeries()}
                            deleteSeries={deleteSeries()}
                            series={series}/>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default SeriesList;