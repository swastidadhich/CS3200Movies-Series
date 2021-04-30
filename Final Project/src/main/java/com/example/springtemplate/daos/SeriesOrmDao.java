package com.example.springtemplate.daos;

import com.example.springtemplate.models.Series;
import com.example.springtemplate.repositories.SeriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class SeriesOrmDao {
  @Autowired
  SeriesRepository seriesRepository;

  @PostMapping("/api/series")
  public Series createSeries(@RequestBody Series series) {
    return seriesRepository.save(series);
  }

  @GetMapping("/api/series")
  public List<Series> findAllSeries() {
    return (List<Series>) seriesRepository.findAll();
  }

  @GetMapping("/api/series/{seriesId}")
  public Series findSeriesById(
      @PathVariable("seriesId") Integer id) {
    return seriesRepository.findById(id).get();
  }

  @GetMapping("/api/update/series/{seriesId}/{password}")
  public Series updateSeries(
      @PathVariable("seriesId") Integer id,
      @PathVariable("password") String newPass) {
    Series series = this.findSeriesById(id);
    series.setTitle(newPass);
    return seriesRepository.save(series);
  }

  @PutMapping("/api/series/{seriesId}")
  public Series updateSeries(
      @PathVariable("seriesId") Integer id,
      @RequestBody() Series newSeries) {
    Series series = this.findSeriesById(id);
    series.setTitle(newSeries.getTitle());
    return seriesRepository.save(series);
  }

  @DeleteMapping("/api/series/{seriesId}")
  public void deleteSeries(
      @PathVariable("seriesId") Integer id) {
    seriesRepository.deleteById(id);
  }
}