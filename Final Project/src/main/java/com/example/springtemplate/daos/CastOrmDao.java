package com.example.springtemplate.daos;

import com.example.springtemplate.models.Cast;
import com.example.springtemplate.models.Series;
import com.example.springtemplate.repositories.CastRepository;
import com.example.springtemplate.repositories.SeriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class CastOrmDao {
  @Autowired
  CastRepository castRepository;

  @Autowired
  SeriesRepository seriesRepository;

  @PostMapping("/api/casts")
  public Cast createCast(@RequestBody Cast cast) {
    return castRepository.save(cast);
  }

  @PostMapping("/api/series/{seriesId}/casts")
  public Cast createCastForSeries(
      @PathVariable("seriesId") Integer sid,
      @RequestBody Cast cast) {
    cast = castRepository.save(cast);
    Series series = seriesRepository.findById(sid).get();
    cast.setSeries(series);
    return castRepository.save(cast);
  }

  @GetMapping("/api/series/{sid}/casts")
  public Cast findCastsForSeries(
      @PathVariable("sid") Integer seriesId) {
    Series series = seriesRepository.findById(seriesId).get();
    return series.getCasts();
  }

  @GetMapping("/api/casts")
  public List<Cast> findAllCasts() {
    return (List<Cast>) castRepository.findAll();
  }

  @GetMapping("/api/casts/{castId}")
  public Cast findCastById(
      @PathVariable("castId") Integer id) {
    return castRepository.findById(id).get();
  }

  @PutMapping("/api/casts/{castId}")
  public Cast updateCast(
      @PathVariable("castId") Integer id,
      @RequestBody() Cast newCast) {
    Cast cast = this.findCastById(id);
    return castRepository.save(cast);
  }

  @DeleteMapping("/api/casts/{castId}")
  public void deleteCast(
      @PathVariable("castId") Integer id) {
    castRepository.deleteById(id);
  }
}