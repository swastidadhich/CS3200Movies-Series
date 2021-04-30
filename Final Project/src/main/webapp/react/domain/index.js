import SeriesList from "./series/series-list";
import MovieList from "./movies/movie-list";
import CastList from "./casts/cast-list";
import SeriesEditorForm from "./series/series-editor-form";
import MovieEditorForm from "./movies/movie-editor-form";
import CastEditorForm from "./casts/cast-editor-form";

const {HashRouter, Link, Route} = window.ReactRouterDOM;
 
const App = () => {
    console.log(window.ReactRouterDOM)
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/series", "/"]} exact={true}>
                    <SeriesList/>
                </Route>
                <Route path="/series/:id" exact={true}>
                    <SeriesEditorForm/>
                </Route>
                <Route path="/series/:seriesId/movies" exact={true}>
                    <MovieList/>
                </Route>
                <Route path="/movies/:movieId" exact={true}>
                    <MovieEditorForm/>
                </Route>
                <Route path="/series/:seriesId/casts" exact={true}>
                    <CastList/>
                </Route>
                <Route path="/casts/:castId" exact={true}>
                    <CastEditorForm/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
