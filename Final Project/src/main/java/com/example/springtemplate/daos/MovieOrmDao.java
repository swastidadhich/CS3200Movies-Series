package com.example.springtemplate.daos;

import com.example.springtemplate.repositories.MovieRepository;
import com.example.springtemplate.models.Series;
import com.example.springtemplate.models.Movie;
import com.example.springtemplate.repositories.SeriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class MovieOrmDao {
  @Autowired
  MovieRepository movieRepository;

  @Autowired
  SeriesRepository seriesRepository;

  @PostMapping("/api/movies")
  public Movie createMovie(@RequestBody Movie movie) {
    return movieRepository.save(movie);
  }

  @PostMapping("/api/series/{seriesId}/movies")
  public Movie createMovieForSeries(
      @PathVariable("seriesId") Integer sid,
      @RequestBody Movie movie) {
    movie = movieRepository.save(movie);
    Series series = seriesRepository.findById(sid).get();
    movie.setSeries(series);
    return movieRepository.save(movie);
  }

  @GetMapping("/api/series/{sid}/movies")
  public List<Movie> findMoviesForSeries(
      @PathVariable("sid") Integer seriesId) {
    Series series = seriesRepository.findById(seriesId).get();
    return series.getMovies();
  }

  @GetMapping("/api/movies")
  public List<Movie> findAllMovies() {
    return (List<Movie>) movieRepository.findAll();
  }

  @GetMapping("/api/movies/{movieId}")
  public Movie findMovieById(
      @PathVariable("movieId") Integer id) {
    return movieRepository.findById(id).get();
  }

  @PutMapping("/api/movies/{movieId}")
  public Movie updateMovie(
      @PathVariable("movieId") Integer id,
      @RequestBody() Movie newMovie) {
    Movie movie = this.findMovieById(id);
    movie.setTitle(newMovie.getTitle());
    movie.setDescription(newMovie.getDescription());
    movie.setGenre(newMovie.getGenre());
    movie.setReleaseDate(newMovie.getReleaseDate());
    movie.setBudget(newMovie.getBudget());
    return movieRepository.save(movie);
  }

  @DeleteMapping("/api/movies/{movieId}")
  public void deleteMovie(
      @PathVariable("movieId") Integer id) {
    movieRepository.deleteById(id);
  }
}
